# WebSonic integration notes

Upstream project: https://github.com/coreh-deprecated/WebSonic

## Integration approach

The GitHub Pages workflow downloads WebSonic at the pinned upstream commit
`356bf6ce9760076f060a458075219f2f22e2162a` and stages the complete upstream project
under `engine/websonic/` in the Pages build artifact.

The repository now also contains the first Reign of Metal level file at
`levels/eggmans-factory.jsonlevel`. During deployment, the workflow installs this
map as WebSonic's starting level (`engine/websonic/level/lvl0.jsonlevel`), so the
engine opens directly into the **Eggman's Factory — Blockout 01** layout.

The blockout is an early greybox built from WebSonic's existing tile surfaces.
It includes a broad factory floor, perimeter walls, raised service platforms,
an overhead maintenance catwalk, interior divider panels, and a central
maintenance trench with stepping pads. It is a first layout pass, not finished
factory art; it currently reuses the upstream demo mesh and textures.

The original upstream engine test scene is still separate from the Reign of Metal
landing page. The deployed engine scene is available at:

`/Reign-of-Metal/engine/websonic/`

## What WebSonic is

WebSonic is a 2010 JavaScript engine using WebGL. Its original README describes:
- 3D Sonic-style physics generalized to three dimensions
- JSON-based tile maps
- A custom JSON mesh format and vertex-based animation
- Sylvester for matrix/vector math
- Ray/triangle intersection as its collision method
- Keyboard controls designed for the original demo

The upstream author explicitly describes the code as unfinished, messy, and poorly
documented. Known issues include unstable matrix inversion and broken shadow
behavior under some camera configurations.

## Licensing

The upstream LICENSE distinguishes between:
- Engine source files (`index.html`, `js/`, `css/`, `tools/`, `level/`, `shader/`): MIT license, with copyright notice retained.
- Models and textures (`mesh/`, `texture/`): CC BY-NC. These are non-commercial assets and have separate attribution requirements.
- Bundled third-party libraries: retain their respective notices.

The workflow preserves the upstream `LICENSE` file and stages the upstream files
unchanged before replacing only the starting level map with the project's own
level file. This project is intended to remain non-commercial. Do not treat every
upstream file as MIT-licensed or present upstream models/textures as original work.

## Next engineering steps

- [x] Deploy WebSonic and confirm the original engine scene loads.
- [x] Test Sonic's movement and physics in the engine.
- [x] Create the first Eggman's Factory tile-map blockout.
- [ ] Test the new factory layout in Chrome/Chromium, especially the start point, platforms, and trench.
- [ ] Check browser console and network requests for failed resources.
- [ ] Verify WebGL context creation and shader compilation.
- [ ] Test performance on a Chromebook.
- [ ] Replace placeholder/upstream environment art with original or appropriately licensed factory assets.
- [ ] Replace the old controls with configurable keyboard/gamepad/touch controls.
- [ ] Add the game's own pause menu, save data, and character selection.

## Important

The root landing page is only the project shell. The WebSonic scene now loads the
first Reign of Metal level blockout, but it is not yet a finished playable demo.

## Browser level editor

A lightweight browser-based tile-map editor is available at `tools/level-editor.html` and is linked from the project home page. It loads `levels/eggmans-factory.jsonlevel`, lets you paint or erase WebSonic surface IDs across individual height layers, supports import/export, and downloads an updated `.jsonlevel` file. It does not write to GitHub automatically: upload the exported file to `levels/eggmans-factory.jsonlevel` to publish your edits. The editor preserves the WebSonic `data[y][z][x]` layout and mesh path.
