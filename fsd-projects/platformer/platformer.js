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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(150, 602, 1950, 50, "red");
    createPlatform(0, 465, 1250, 50, "orange");
    createPlatform(150, 328, 1250, 50, "yellow");
    createPlatform(425, 280, -60, 25, "green");
    createPlatform(560, 230, 60, 25, "blue");
    createPlatform(695, 180, 60, 15, "purple");
    createPlatform(830, 130, 60, 25, "red");
    createPlatform(1110, 0, 60, 210, "orange");
    createPlatform(0, 0, 9000000, 10, "yellow");
    createPlatform(0, 1400, 9000000, 10, "green");
    // TODO 3 - Create Collectables
createCollectable("steve", 830, 95, .5, 1.0125);
createCollectable("steve", 695, 95, 1, 1.0125);
createCollectable("steve", 560, 95, .25, 1.0125);
createCollectable("steve", 830, 95, .005, .05025);
createCollectable("steve", 380, 95, 3, 1.00125);
createCollectable("steve", 1300, 120, 3, 1);
createCollectable("steve", 830, 95, 3, 1.0125);
createCollectable("steve", 1300, 700, 3, 1.0125);
createCollectable("max", 1300, 550, 99, 1.0125);
    // TODO 4 - Create Cannons
createCannon("top", 200, 2000);
createCannon("right", 300, 2000);
createCannon("top", 1200, 2000);

    
    



    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
