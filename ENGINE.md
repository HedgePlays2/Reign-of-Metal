# WebSonic integration notes

Upstream project: https://github.com/coreh-deprecated/WebSonic

## What we know

WebSonic is a 2010 JavaScript engine using WebGL. Its original README describes:
- 3D Sonic-style physics generalized to three dimensions
- JSON-based tile maps
- Custom JSON mesh format and vertex-based animation
- Sylvester for matrix/vector math
- Ray/triangle intersection as its collision method
- Keyboard controls designed for the original demo

The upstream author explicitly describes the code as unfinished, messy, and poorly documented. Known issues include unstable matrix inversion and broken shadow behavior under some camera configurations.

## Licensing

The upstream LICENSE distinguishes between:
- Engine source files (`index.html`, `js/`, `css/`, `tools/`, `level/`, `shader/`): MIT license, with copyright notice retained.
- Models and textures (`mesh/`, `texture/`): CC BY-NC. These are non-commercial assets and have separate attribution requirements.
- Bundled third-party libraries: retain their respective notices.

Do not copy the upstream models or textures into this project without reviewing their CC BY-NC terms and adding required attribution. Do not assume every file has the same license.

## Integration checklist

- [ ] Bring in the MIT-licensed engine source and preserve its license notice.
- [ ] Audit old browser APIs and script loading.
- [ ] Verify WebGL context creation on current Chrome/Chromium.
- [ ] Verify all engine asset paths on GitHub Pages (case-sensitive).
- [ ] Get the original test scene rendering.
- [ ] Test movement, jumping, camera rotation, and collisions.
- [ ] Add responsive keyboard/gamepad/touch controls without breaking the original input.
- [ ] Build an original Eggman's Factory level.
- [ ] Create or source game assets with appropriate licenses.
- [ ] Add a game loop, pause menu, save data, and character selection.

## Important

The landing page in this repository is only the project shell. It does not pretend that the WebSonic engine has been integrated or that gameplay is already working.
