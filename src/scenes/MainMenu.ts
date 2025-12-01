import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor ()
    {
        super('MainMenu');
    }

    preload()
    {
        this.load.image('LandingBg', 'assets/LandingBg.png');
    }

    create ()
    {
        this.background = this.add.image(0, 0, 'LandingBg').setOrigin(0, 0);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
