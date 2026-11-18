# Draw your notes ✎

A minimal, offline-capable **Apple Pencil handwriting whiteboard** with movable sticky notes, smooth pen strokes, a transparent highlighter, partial eraser and autosave.

## Install on iPad

Open the [published app](https://alisa-elizarayd.github.io/Draw-your-note/) in **Safari**, then choose **Share → Add to Home Screen**. Open it once while online so the service worker caches the application for offline access.

## Features

- Apple Pencil draws; fingers pan and pinch-zoom.
- Draw on, above and across colorful sticky notes; also type text, move/resize/duplicate/delete notes.
- Smooth strokes, colors, transparent marker, partial eraser, undo/redo.
- Offline PWA with 192×192 and 512×512 icons and an Apple touch icon.
- Notes auto-save on this device. Export/import JSON backups or export PNG.

## Deployment

Source of the self-contained `index.html` is stored losslessly (gzip + base64) in four `payload/part-*.txt` files. `build_site.py` reconstructs the exact HTML plus PNG icons from encoded files into `_site/`. The GitHub Actions workflow deploys `_site/` automatically after a push to `main`.

The app is fully client-side: no login, tracking, or cloud sync. Your drawings stay in your browser storage, not on GitHub. **Export a JSON backup** before clearing Safari data or switching devices.

Hardware note: Apple Pencil requires testing on a real iPad; desktop simulations do not prove iPadOS stylus compatibility.

## Live site

https://alisa-elizarayd.github.io/Draw-your-note/
