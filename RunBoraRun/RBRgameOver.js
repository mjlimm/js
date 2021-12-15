class RBRgameOver extends Phaser.Scene {
  constructor() {
    super({
      key: "RBRgameOver",
    });

    // Put global variable here
  }

  preload() {

    this.load.image("RBRgameOver","assets/RBR lose.jpg");

  }

  create() {
    console.log("*** RBRgameOver scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'RBRgameOver').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to RBRintro scene");
        this.scene.start( "RBRintro");
      },
      this
    );
//collectsound
         this.collectsound = this.sound.add("collect");
this.collectsound.play();
    }}