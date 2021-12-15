class RBRstoryline1 extends Phaser.Scene {
  constructor() {
    super({
      key: "RBRstoryline1",
    });

    // Put global variable here
  }

  preload() {

    this.load.image("RBRstoryline1","assets/RBR storyline1.jpg");

  }

  create() {
    console.log("*** RBRstoryline1 scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'RBRstoryline1').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to RBRstoryline2 scene");
        this.scene.start( "RBRstoryline2");
      },
      this
    );
//collectsound
         this.collectsound = this.sound.add("collect");
this.collectsound.play();
    }}