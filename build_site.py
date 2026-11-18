#!/usr/bin/env python3
"""Build the static GitHub Pages PWA from lossless encoded app/assets."""
from pathlib import Path
import base64
import gzip
import shutil

ROOT = Path(__file__).resolve().parent
OUT = ROOT / '_site'
OUT.mkdir(exist_ok=True)
parts = sorted((ROOT / 'payload').glob('part-*.txt'))
if len(parts) != 4:
    raise RuntimeError('Missing app source parts: expected 4')
compressed = base64.b64decode(''.join(p.read_text().strip() for p in parts), validate=True)
html = gzip.decompress(compressed)
assert html.startswith(b'<!DOCTYPE html>') and b'serviceWorker.register' in html
(OUT / 'index.html').write_bytes(html)
for name in ('manifest.webmanifest', 'sw.js', 'favicon.svg'):
    shutil.copyfile(ROOT / name, OUT / name)
for name in ('icon-192.png', 'icon-512.png', 'icon-512-maskable.png', 'apple-touch-icon.png'):
    (OUT / name).write_bytes(base64.b64decode((ROOT / 'payload' / (name + '.b64')).read_text(), validate=True))
(OUT / '.nojekyll').touch()
print('PWA built:', ', '.join(p.name for p in sorted(OUT.iterdir())))
