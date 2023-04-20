export default class mainScene extends Phaser.Scene {
    constructor() {
        super('mainScene')
        this.ground;
        this.platforms;
        this.bishop;
    }

    preload(){
        this.load.image('sky', '../game/assets/sky.png')
        this.load.image('ground', '../game/assets/ground.png')
        this.load.image('platform', '../game/assets/platform.png')
        this.load.spritesheet('bishop', '../game/assets/Bishop/bishop.png', {frameWidth: 32, frameHeight: 32})
    }

    create(){
        this.add.image(400, 300, 'sky')
        this.ground = this.physics.add.staticGroup()
        this.ground.create(400, 600, 'ground')
        this.platforms = this.physics.add.staticGroup()
        this.platforms.create(200, 350, 'platform')
        this.platforms.create(50, 500, 'platform')
        this.platforms.create(550, 350, 'platform')
        this.platforms.create(600, 500, 'platform')
        this.bishop = this.physics.add.sprite(0, 0, 'bishop')
        this.bishop.setCollideWorldBounds(true)
        this.bishop.setBounce(0.2)
    }

    update(){}

}