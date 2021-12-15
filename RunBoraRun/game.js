var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 32 * 40,
    height: 32 * 25,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false,
            debug: false, //这个最后最后的时候要关掉，所以那个红色的格子会没有掉
        }
    },
    scale: { //这个是responsive跟着你的screen的大小，会自动scale
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [RBRintro, RBRstoryline1, RBRstoryline2, RBRcharacters, RBRgameRules, RBRinstructions, world, level1, level2, level3, RBRwin,RBRgameOver]
    //level1, level2, level3
};

var game = new Phaser.Game(config);