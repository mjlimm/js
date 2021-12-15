class RBRgameRules extends Phaser.Scene {
  constructor() {
    super({
      key: "RBRgameRules",
    });

    // Put global variable here
  }

  preload() {

    this.load.image("RBRgameRules","assets/RBR gamerules.jpg");

  }

  create() {
    console.log("*** RBRgameRules scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'RBRgameRules').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to RBRinstructions scene");
        this.scene.start( "RBRinstructions");
      },
      this
    );
//collectsound
         this.collectsound = this.sound.add("collect");
this.collectsound.play();
    }}