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
    toggleGrid();


    // TODO 2 - Create Platform    
    createPlatform(200, 250, 950, 20);
    createPlatform(1300, 520, 350, 50, "red");
    createPlatform(0, 350, 50, 50, "lime"); // bright green for a finished platform
    createPlatform(200, 620, 950, 20);
    createPlatform(200, 450, 950, 20);
    
    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 480);
    createCollectable("steve", 0, 300);
    createCollectable("steve", 700, 200);
    
    // TODO 4 - Create Cannons
    createCannon("top", 1000, 480);
    createCannon("top", 675, 450);
    createCannon("left", 120, 800); 
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
