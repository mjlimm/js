class RBRstoryline2 extends Phaser.Scene {
  constructor() {
    super({
      key: "RBRstoryline2",
    });

    // Put global variable here
  }

  preload() {

    this.load.image("RBRstoryline2","assets/RBR storyline2.jpg");

  }

  create() {
    console.log("*** RBRstoryline2 scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'RBRstoryline2').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to RBRcharacters scene");
        this.scene.start( "RBRcharacters");
      },
      this
    );
//collectsound
         this.collectsound = this.sound.add("collect");
this.collectsound.play();
    }}