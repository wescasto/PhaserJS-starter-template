var config = {
    'width': 1280,
    'height': 908,
    'renderer': Phaser.CANVAS,
    'parent': 'phaser-game',
    'resolution': window.devicePixelRatio,
    'state': { preload: preload, create: create, update: update, render: render }
}

var game = new Phaser.Game(config);

function preload() {
    // game.load.image('spriteName', 'images/sprite-filename.png');
    // game.load.audio('audioName', 'audio/audio-filename.mp3');
    // game.load.spritesheet('spritesheetName', 'images/spritesheet-filename.png', width, height, numberOfFrames);
}

function create() {  
    // functions and game code
}

function update() {
    // things that run every frame of game
}

function render () {
    // game.debug.spriteInfo(spriteName, x, y);
}