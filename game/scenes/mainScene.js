export default class mainScene extends Phaser.Scene {
    constructor() {
        super('mainScene')
    }

    preload(){
        this.load.image('sky', '../game/assets/sky.png')
        this.load.image('ground', '../game/assets/ground.png')
        this.load.image('platform', '../game/assets/platform.png')
    }

    create(){
        this.add.image(400, 300, 'sky')
    }

    update(){}

}