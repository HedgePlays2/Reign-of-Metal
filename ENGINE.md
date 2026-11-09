# WebSonic integration notes

Upstream project: https://github.com/coreh-deprecated/WebSonic

## Integration approach

The GitHub Pages workflow downloads WebSonic at the pinned upstream commit
`356bf6ce9760076f060a458075219f2f22e2162a` and stages the complete upstream project
under `engine/websonic/` in the Pages build artifact. This keeps the original test
scene separate from the Reign of Metal landing page and avoids silently changing
or misrepresenting upstream files.

After the Pages workflow succeeds, the original engine test scene will be available at:

`/Reign-of-Metal/engine/websonic/`

The landing page links to that test scene. It is an upstream demo, not playable
Reign of Metal content. We still need to test it in current Chrome/Chromium and
fix any compatibility problems before building the first original level.

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
unchanged. This project is intended to remain non-commercial. Do not treat every
upstream file as MIT-licensed or present upstream models/textures as original work.

## Next engineering steps

- [ ] Run the deployed original test scene on current Chrome/Chromium.
- [ ] Check browser console and network requests for failed resources.
- [ ] Verify WebGL context creation and shader compilation.
- [ ] Test movement, jumping, camera rotation, and collisions.
- [ ] Test performance on a Chromebook.
- [ ] Replace the old controls with configurable keyboard/gamepad/touch controls.
- [ ] Build an original Eggman's Factory level and original/appropriately licensed assets.
- [ ] Add the game's own pause menu, save data, and character selection.

## Important

The root landing page is only the project shell. The upstream test scene is a
technical integration check, not a playable Reign of Metal demo.
