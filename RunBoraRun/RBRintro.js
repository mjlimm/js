class RBRintro extends Phaser.Scene {
  constructor() {
    super({
      key: "RBRintro",
    });

    // Put global variable here
  }

  preload() {

    this.load.image("RBRintro","assets/RBR intro.jpg");

  }

  create() {
    console.log("*** RBRintro scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'RBRintro').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to RBRstoryline1 scene");
        this.scene.start( "RBRstoryline1");
      },
      this
    );
//collectsound
         this.collectsound = this.sound.add("collect");
this.collectsound.play();
    }}