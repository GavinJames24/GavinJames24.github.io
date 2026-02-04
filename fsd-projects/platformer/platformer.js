$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platform    
    createPlatform(500, 0, 20, 290);
    createPlatform(1350, 400, 50, 50);
    createPlatform(100, 20, 10, 10, "lime"); // bright green for a finushed platform
    createPlatform(300, 500, 30, 135);
    createPlatform(250, 120, 35, 215);
    // TODO 3 - Create Collectables
    createCollectible("steve", 1350, 50);
    createCollectible("steve", 200, 170, 0.5, 0.7);
    createCollectible("steve", 450, 500);
    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 100);
    createCannon("right", 300, 2000);
    createCannon("bottom", 450, 220);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
