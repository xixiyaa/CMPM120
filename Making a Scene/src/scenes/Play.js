class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
        console.log('Play: constructor')
    }
    init(states) {
        console.log('Play: init')
        this.HP = states.HP
        this.EXP = states.EXP
    }

    create() {
        console.log('Play: create')
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`)
    }
}