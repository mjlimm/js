class RBRinstructions extends Phaser.Scene {
  constructor() {
    super({
      key: "RBRinstructions",
    });

    // Put global variable here
  }

  preload() {

    this.load.image("RBRinstructions","assets/RBR instructions.jpg");

  }

  create() {
    console.log("*** RBRinstructions scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'RBRinstructions').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to world scene");
        this.scene.start( "world");
      },
      this
    );
//collectsound
         this.collectsound = this.sound.add("collect");
this.collectsound.play();
    }}