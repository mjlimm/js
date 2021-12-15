class level3 extends Phaser.Scene {
  constructor() {
    super({
      key: "level3",
    });
  }
//level3 Map
  // incoming data from scene below 
  init(data) {
    
    this.playerPos = data.playerPos;

  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("level3","assets/level3map.json");

    // // Step 2 : Preload any images here, nickname, filename 

    this.load.image("asset","assets/firstassetpack.png");
    this.load.image("nature tileset","assets/RPGnature tileset.png");

  //treat
  this.load.atlas( 'treat', 'assets/treat.png', 'assets/treat.json');

    //enemy
    this.load.atlas( 'bwb', 'assets/bwb.png', 'assets/bwb.json');
    this.load.atlas( 'bwf', 'assets/bwf.png', 'assets/bwf.json');
    this.load.atlas( 'bwl', 'assets/bwl.png', 'assets/bwl.json');
    this.load.atlas( 'bwr', 'assets/bwr.png', 'assets/bwr.json');
  }

  create() {
    console.log("*** level3 scene");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({key:'level3'}); 

    //collectsound
    this.collectsound = this.sound.add("collect");

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let firstassetpackTiles = map.addTilesetImage("asset", "asset"); 
    let RPGnaturetilesetTiles = map.addTilesetImage("nature tileset", "nature tileset"); 
     

    let tilesArray = [ firstassetpackTiles,RPGnaturetilesetTiles ] 

    // Step 5  Load in layers by layers 
    this.grass = map.createLayer("grass", tilesArray, 0, 0); 
    this.soil = map.createLayer("soil", tilesArray, 0, 0);
    this.flowers = map.createLayer("flowers", tilesArray, 0, 0);
    this.water = map.createLayer("water", tilesArray, 0, 0);
    this.tree = map.createLayer("tree", tilesArray, 0, 0);
    this.house = map.createLayer("house", tilesArray, 0, 0);
    this.connectinghouse = map.createLayer("connectinghouse", tilesArray, 0, 0);
      
    //for enemy walk
    this.time.addEvent({ delay: 1000, callback: this.moveDownUp1, callbackScope: this, loop: false });
    this.time.addEvent({ delay: 1000, callback: this.moveDownUp2, callbackScope: this, loop: false });
    this.time.addEvent({ delay: 1000, callback: this.moveDownUp3, callbackScope: this, loop: false });
    this.time.addEvent({ delay: 1000, callback: this.moveDownUp4, callbackScope: this, loop: false });

 //treat 
 this.anims.create({
  key: 'treat',
  frames: [
  { key: 'treat', frame: "treat-93"},
  { key: 'treat', frame: "treat-95"},
  { key: 'treat', frame: "treat-97"},
  { key: 'treat', frame: "treat-94"},
  { key: 'treat', frame: "treat-96"},
  
  ],
  frameRate: 6,
  repeat: -1
  })         

//npc
    //back
    this.anims.create({
      key: 'bwb',
      frames: [
      { key: 'bwb', frame: "bwb-58"},
      { key: 'bwb', frame: "bwb-60"},
      { key: 'bwb', frame: "bwb-59"},
      { key: 'bwb', frame: "bwb-61"},
      
       ],
      frameRate: 6,
      repeat: -1
      })
  
      //font
      this.anims.create({
        key: 'bwf',
        frames: [
        { key: 'bwf', frame: "bwf-77"},
        { key: 'bwf', frame: "bwf-79"},
        { key: 'bwf', frame: "bwf-76"},
        { key: 'bwf', frame: "bwf-78"},
        
         ],
        frameRate: 6,
        repeat: -1
        })
  
      // //left
      this.anims.create({
        key: 'bwl',
        frames: [
        { key: 'bwl', frame: "bwl-69"},
        { key: 'bwl', frame: "bwl-72"},
        { key: 'bwl', frame: "bwl-68"},
        { key: 'bwl', frame: "bwl-70"},
        { key: 'bwl', frame: "bwl-73"},
        { key: 'bwl', frame: "bwl-74"},
        { key: 'bwl', frame: "bwl-71"},
        { key: 'bwl', frame: "bwl-67"},
        
         ],
        frameRate: 6,
        repeat: -1
        })
  
      //   //right
        this.anims.create({
          key: 'bwr',
          frames: [
          { key: 'bwr', frame: "bwr-87"},
          { key: 'bwr', frame: "bwr-89"},
          { key: 'bwr', frame: "bwr-90"},
          { key: 'bwr', frame: "bwr-86"},
          { key: 'bwr', frame: "bwr-88"},
          { key: 'bwr', frame: "bwr-91"},
          { key: 'bwr', frame: "bwr-92"},
          { key: 'bwr', frame: "bwr-85"},
          
           ],
          frameRate: 6,
          repeat: -1
          })

    // this.physics.world.bounds.width = this.groundLayer.width; 
    // this.physics.world.bounds.height = this.groundLayer.height;

     //enemy position
     this.bwb = this.physics.add.sprite(652, 271, 'bwb').play('bwb').setScale(0.30);
     this.bwf = this.physics.add.sprite(303, 658, 'bwf').play('bwf').setScale(0.30);
     this.bwl = this.physics.add.sprite(1211, 380, 'bwl').play('bwl').setScale(0.30);
     this.bwr = this.physics.add.sprite(204, 428, 'bwr').play('bwr').setScale(0.30);

    // Object layers
      // var start = map.findObject("objectLayer",(obj) => obj.name === "start");
      this.player = this.physics.add.sprite(172, 175, 'right').setScale(0.25);

    //enable debug
    window.player = this.player;


    this.player.setCollideWorldBounds(true); // don't go out of the this.map 

    // // create the arrow keys
     this.cursors = this.input.keyboard.createCursorKeys();

    // // camera follow player 
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);


    this.connectinghouse.setCollisionByExclusion(-1, true) 
    this.house.setCollisionByExclusion(-1, true)
    this.water.setCollisionByExclusion(-1, true)
    this.tree.setCollisionByExclusion(-1, true)

    this.physics.add.collider(this.player, this.connectinghouse); 
    this.physics.add.collider(this.player, this.house);
    this.physics.add.collider(this.player, this.water);
    this.physics.add.collider(this.player, this.tree);

  //collect treat
    //collect treat place n overlap treat
    this.treat1 = this.physics.add.sprite(351, 175, 'treat').play("treat").setScale(0.20); 
    this.physics.add.overlap(this.player, this.treat1, this.collectitem, null, this);

    this.treat2 = this.physics.add.sprite(399, 371, 'treat').play("treat").setScale(0.20); 
    this.physics.add.overlap(this.player, this.treat2, this.collectitem, null, this);

    this.treat3 = this.physics.add.sprite(52, 565, 'treat').play("treat").setScale(0.20); 
    this.physics.add.overlap(this.player, this.treat3, this.collectitem, null, this);

    this.treat4 = this.physics.add.sprite(308, 712, 'treat').play("treat").setScale(0.20); 
    this.physics.add.overlap(this.player, this.treat4, this.collectitem, null, this);

    this.treat5 = this.physics.add.sprite(719, 719, 'treat').play("treat").setScale(0.20); 
    this.physics.add.overlap(this.player, this.treat5, this.collectitem, null, this);

    this.treat6 = this.physics.add.sprite(612, 528, 'treat').play("treat").setScale(0.20); 
    this.physics.add.overlap(this.player, this.treat6, this.collectitem, null, this);

    this.treat7 = this.physics.add.sprite(752, 345, 'treat').play("treat").setScale(0.20); 
    this.physics.add.overlap(this.player, this.treat7, this.collectitem, null, this);

    this.treat8 = this.physics.add.sprite(649, 168, 'treat').play("treat").setScale(0.20); 
    this.physics.add.overlap(this.player, this.treat8, this.collectitem, null, this);

    this.treat9 = this.physics.add.sprite(848, 36, 'treat').play("treat").setScale(0.20); 
    this.physics.add.overlap(this.player, this.treat9, this.collectitem, null, this);

    this.treat10 = this.physics.add.sprite(978, 145, 'treat').play("treat").setScale(0.20); 
    this.physics.add.overlap(this.player, this.treat10, this.collectitem, null, this);

    this.treat11 = this.physics.add.sprite(1135, 72, 'treat').play("treat").setScale(0.20); 
    this.physics.add.overlap(this.player, this.treat11, this.collectitem, null, this);

    this.treat12 = this.physics.add.sprite(1115, 378, 'treat').play("treat").setScale(0.20); 
    this.physics.add.overlap(this.player, this.treat12, this.collectitem, null, this);

    this.treat13 = this.physics.add.sprite(1204, 495, 'treat').play("treat").setScale(0.20); 
    this.physics.add.overlap(this.player, this.treat13, this.collectitem, null, this);

    this.treat14 = this.physics.add.sprite(1008, 719, 'treat').play("treat").setScale(0.20); 
    this.physics.add.overlap(this.player, this.treat14, this.collectitem, null, this);

    this.treat15 = this.physics.add.sprite(1185, 605, 'treat').play("treat").setScale(0.20); 
    this.physics.add.overlap(this.player, this.treat15, this.collectitem, null, this);

  } 
  /////////////////// end of create //////////////////////////////

  update() {

    //go back to level2
    if ( this.player.x < 112
        && this.player.y > 112 && this.player.y < 175 ) {
            this.level2();
        }

    // win
    if ( this.player.x > 1263
        && this.player.y > 665 && this.player.y < 769 ) {
        this.RBRwin();
        }

    if (this.cursors.left.isDown) {
        this.player.body.setVelocityX(-200);
        this.player.anims.play("left", true); 
        } 
        else if (this.cursors.right.isDown) {
        this.player.body.setVelocityX(200);
        this.player.anims.play("right", true);
        } 
        else if (this.cursors.up.isDown) {
        this.player.body.setVelocityY(-200);
        this.player.anims.play("up", true);
        //console.log('up');
        } 
        else if (this.cursors.down.isDown) {
        this.player.body.setVelocityY(200);
        this.player.anims.play("down", true);
        //console.log('down');
        } 
        else {
        this.player.anims.stop(); 
        this.player.body.setVelocity(0, 0);
        }
     }

        // Function to jump to worldmap
        level2(player, tile) {
            console.log("level2 function");
            this.scene.start("level2");
        }

      // Function to win
      RBRwin(player, tile) {
        console.log("RBRwin function");
        this.scene.start("RBRwin");
    }

      //collect treat
        // treat
        collectitem(player,treat1)
        {
        treat1.disableBody(true,true);
        this.collectsound.play();
        }

        collectitem(player,treat2)
        {
        treat2.disableBody(true,true);
        this.collectsound.play();
        }

        collectitem(player,treat3)
        {
        treat3.disableBody(true,true);
        this.collectsound.play();
        }

        collectitem(player,treat4)
        {
        treat4.disableBody(true,true);
        this.collectsound.play();
        }

        collectitem(player,treat5)
        {
        treat5.disableBody(true,true);
        this.collectsound.play();
        }

        collectitem(player,treat6)
        {
        treat6.disableBody(true,true);
        this.collectsound.play();
        }

        collectitem(player,treat7)
        {
        treat7.disableBody(true,true);
        this.collectsound.play();
        }

        collectitem(player,treat8)
        {
        treat8.disableBody(true,true);
        this.collectsound.play();
        }

        collectitem(player,treat9)
        {
        treat9.disableBody(true,true);
        this.collectsound.play();
        }

        collectitem(player,treat10)
        {
        treat10.disableBody(true,true);
        this.collectsound.play();
        }

        collectitem(player,treat11)
        {
        treat11.disableBody(true,true);
        this.collectsound.play();
        }

        collectitem(player,treat12)
        {
        treat12.disableBody(true,true);
        this.collectsound.play();
        }

        collectitem(player,treat13)
        {
        treat13.disableBody(true,true);
        this.collectsound.play();
        }

        collectitem(player,treat14)
        {
        treat14.disableBody(true,true);
        this.collectsound.play();
        }

        collectitem(player,treat15)
        {
        treat15.disableBody(true,true);
        this.collectsound.play();
        }
  
        //enemy walk
        moveDownUp1() {
          console.log('moveDownUp')
          this.tweens.timeline({
              targets: this.bwb,
              ease: 'Linear',
              loop: -1, // loop forever
              duration: 2000,
              tweens: [
              {
                  y: 114,
              },
              {
                  y: 271,
              },
          ]
          });
      }

        moveDownUp3() {
          console.log('moveDownUp')
          this.tweens.timeline({
              targets: this.bwf,
              ease: 'Linear',
              loop: -1, // loop forever
              duration: 2000,
              tweens: [
              {
                  y: 766,
              },
              {
                  y: 658,
              },
          ]
          });
      }

      moveDownUp4() {
        console.log('moveDownUp')
        this.tweens.timeline({
            targets: this.bwl,
            ease: 'Linear',
            loop: -1, // loop forever
            duration: 2000,
            tweens: [
            {
                x: 1040,
            },
            {
                x: 1211,
            },
        ]
        });
    }

    moveDownUp2() {
      console.log('moveDownUp')
      this.tweens.timeline({
          targets: this.bwr,
          ease: 'Linear',
          loop: -1, // loop forever
          duration: 2000,
          tweens: [
          {
              x: 399,
          },
          {
              x: 240,
          },
      ]
      });
  }


} //////////// end of class world ////////////////////////