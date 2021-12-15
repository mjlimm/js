class RBRcharacters extends Phaser.Scene {
  constructor() {
    super({
      key: "RBRcharacters",
    });

    // Put global variable here
  }

  preload() {

    this.load.image("RBRcharacters","assets/RBR characters.jpg");

  }

  create() {
    console.log("*** RBRcharacters scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'RBRcharacters').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to RBRgameRules scene");
        this.scene.start( "RBRgameRules");
      },
      this
    );
//collectsound
         this.collectsound = this.sound.add("collect");
this.collectsound.play();
    }}