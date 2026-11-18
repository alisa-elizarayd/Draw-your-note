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

The **root `index.html` is the canonical, editable app source**. GitHub Pages publishes directly from the `main` branch `/ (root)` directory. The workflow validates syntax and PWA assets without overwriting edits. The `payload/` folder and `build_site.py` are historical initial-release build assets, not the active publishing source.

### v4 — immediate handwriting responsiveness (18 Nov 2026)
- Removed costly deep JSON cloning/comparison from every Apple Pencil lift-and-recontact.
- Cached completed curved strokes for significantly smoother rendering on dense boards.
- Deferred autosave work while Pencil is actively drawing.
- Fixed a WebKit pointer-capture race that could prematurely end a newly started stroke.
- Protected Pencil ink against accidental palm touch/pinch interruptions and preserved stroke endpoints.
- Increased the offline service-worker cache version so existing installations can update.

The app is fully client-side: no login, tracking, or cloud sync. Your drawings stay in your browser storage, not on GitHub. **Export a JSON backup** before clearing Safari data or switching devices.

Hardware note: Apple Pencil requires testing on a real iPad; desktop simulations do not prove iPadOS stylus compatibility.

## Live site

https://alisa-elizarayd.github.io/Draw-your-note/
