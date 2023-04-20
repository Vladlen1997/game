export default class mainScene extends Phaser.Scene {
    constructor() {
        super('mainScene')
        this.ground;
        this.platforms;
    }

    preload(){
        this.load.image('sky', '../game/assets/sky.png')
        this.load.image('ground', '../game/assets/ground.png')
        this.load.image('platform', '../game/assets/platform.png')
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
    }

    update(){}

}