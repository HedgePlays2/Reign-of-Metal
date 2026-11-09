# WebSonic engine staging

The GitHub Pages workflow downloads the upstream WebSonic repository at the pinned commit
`356bf6ce9760076f060a458075219f2f22e2162a` and stages its complete contents here at build time.

After deployment, the original engine test scene is served from:

`/Reign-of-Metal/engine/websonic/`

This is an upstream engine test scene, **not Reign of Metal gameplay**. It is kept separate from the Reign of Metal landing page while we verify whether the 2010 WebGL engine can run in current Chrome/Chromium.

## License separation

The upstream `LICENSE` file is copied into the deployed folder with the source and assets. It states:
- `index.html`, `js/`, `css/`, `tools/`, `level/`, and `shader/` are MIT-licensed.
- `mesh/` and `texture/` are separately licensed CC BY-NC.
- Bundled libraries have their own license notices.

The project is intended to remain non-commercial. Do not remove the upstream license file or present its assets as original Reign of Metal work.

Upstream: https://github.com/coreh-deprecated/WebSonic
