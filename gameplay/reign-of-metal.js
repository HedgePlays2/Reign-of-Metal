(function (global) {
  "use strict";

  function start(engine, player) {
    if (!engine || !player || !engine.world || !engine.resources) {
      console.error("Reign of Metal gameplay could not start: missing engine or player.");
      return;
    }

    var totalRings = 10;
    var collectedRings = 0;
    var score = 0;
    var ui = document.createElement("div");
    ui.id = "rom-objective";
    ui.style.cssText = [
      "position:fixed",
      "top:12px",
      "right:12px",
      "z-index:20",
      "min-width:220px",
      "padding:12px 15px",
      "border:1px solid rgba(255,75,91,.75)",
      "border-radius:10px",
      "background:rgba(7,13,24,.88)",
      "box-shadow:0 8px 28px rgba(0,0,0,.35)",
      "color:#f4f7ff",
      "font:700 13px/1.5 Arial, sans-serif",
      "letter-spacing:.08em",
      "text-transform:uppercase",
      "pointer-events:none"
    ].join(";");
    ui.innerHTML =
      '<div style="color:#ff6575;font-size:10px;letter-spacing:.2em">REIGN OF METAL</div>' +
      '<div style="font-size:15px;margin:3px 0 7px">EGGMAN\'S FACTORY</div>' +
      '<div id="rom-objective-text" style="color:#c9d5e8;font-size:11px;font-weight:600;letter-spacing:.04em">Follow the ring trail</div>' +
      '<div id="rom-ring-count" style="margin-top:7px;color:#ffd45b">RINGS 0 / ' + totalRings + '</div>' +
      '<div id="rom-score" style="color:#b8c9df;font-size:11px">SCORE 0</div>';
    document.body.appendChild(ui);

    function updateHud() {
      var ringText = document.getElementById("rom-ring-count");
      var scoreText = document.getElementById("rom-score");
      var objectiveText = document.getElementById("rom-objective-text");
      if (ringText) ringText.textContent = "RINGS " + collectedRings + " / " + totalRings;
      if (scoreText) scoreText.textContent = "SCORE " + score;
      if (objectiveText) {
        objectiveText.textContent = collectedRings === totalRings
          ? "Ring trail cleared — keep exploring"
          : "Follow the ring trail";
      }
      var originalRings = document.getElementById("rings");
      var originalScore = document.getElementById("score");
      if (originalRings) originalRings.textContent = collectedRings;
      if (originalScore) originalScore.textContent = score;
    }

    // Reuse WebSonic's native Spring object and spring mesh.
    // Spring.js handles the launch impulse and STATE_SPRING animation.
    var springSpots = [
      [1024, 0, 160],
      [1280, 0, 160],
      [1536, 0, 160]
    ];
    if (typeof Spring === "function") {
      springSpots.forEach(function (spot) {
        var spring = new Spring(engine, player);
        spring.position($V(spot));
        engine.world.add(spring);
      });
    } else {
      console.warn("WebSonic Spring.js was not loaded; factory springs were skipped.");
    }

    // Static factory control monitors add visual landmarks to the otherwise
    // open assembly floor. The upstream monitor mesh is already loaded by WebSonic.
    var monitorMesh = engine.resources.get("mesh/monitor.jsonmesh");
    var monitorSpots = [
      [320, 24, 320],
      [864, 24, 320],
      [1408, 24, 320],
      [320, 24, 1408],
      [864, 24, 1408],
      [1408, 24, 1408]
    ];
    if (monitorMesh) {
      monitorSpots.forEach(function (spot) {
        var monitor = engine.world.MeshEntity(monitorMesh);
        monitor.position($V(spot));
        monitor.scale($V([1.55, 1.55, 1.55]));
        engine.world.add(monitor);
      });
    }

    var ringMesh = engine.resources.get("mesh/ring.jsonmesh");
    for (var i = 0; i < totalRings; i++) {
      (function (index) {
        var ring = engine.world.MeshEntity(ringMesh);
        ring.position($V([820 + index * 86, 82, 160]));
        ring.scale($V([0.65, 0.65, 0.65]));
        var phase = index * 0.22;
        ring.update = function () {
          ring.rotation(Matrix.RotationY((engine.world.time() * 2.2) + phase).ensure4x4());
          if (player.position().subtract(ring.position()).modulus() < 38) {
            collectedRings++;
            score += 100;
            updateHud();
            engine.world.remove(ring);
          }
        };
        engine.world.add(ring);
      })(i);
    }

    updateHud();
    console.log("Reign of Metal gameplay started: " + totalRings + " collectible rings, " + springSpots.length + " native springs, and " + monitorSpots.length + " factory monitors placed.");
  }

  global.ReignOfMetal = { start: start };
})(window);
