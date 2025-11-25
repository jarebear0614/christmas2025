import { SalemStreets } from '../game_objects/SalemStreets';
import { PanelBuilder, PanelRotator } from '../game_objects/PanelRotator';
import { Loft } from '../game_objects/Loft';
import { StardewValley } from '../game_objects/StardewValley';
import { BaseScene } from './BaseScene';

import { GameObjects, Input } from 'phaser'

export class Game extends BaseScene
{
    camera: Phaser.Cameras.Scene2D.Camera;

    panelRotator: PanelRotator;
    panelBuilder: PanelBuilder;

    leftKey: Input.Keyboard.Key | undefined;
    rightKey: Input.Keyboard.Key | undefined;

    isLeftKeyDown: boolean = false;
    isPreviousLeftKeyDown: boolean = false;

    isRightKeyDown: boolean = false;
    isPreviousRightKeyDown: boolean = false;

    currentDate: Date = new Date(new Date().toLocaleDateString());
    currentDisplayedDate?: string = undefined;

    affirmationDisplayed: boolean = false;
    affirmationBackground: GameObjects.Rectangle;
    affirmationPaper: GameObjects.Rectangle;
    affirmationText: GameObjects.Text;
    affirmationCloseBackground: GameObjects.Rectangle;
    affirmationClose: GameObjects.Image;
    affirmationTweenDuration: number = 250;

    constructor ()
    {
        super('Game');
    }

    preload()
    {
        this.load.image('arrowLeft', 'assets/arrowLeft.png');
        this.load.image('arrowRight', 'assets/arrowRight.png');
        this.load.image('cross', 'assets/cross.png');

        this.load.image('SalemStreetsWalkway', 'assets/SalemStreetsWalkway.png');
        this.load.spritesheet('SalemStreetsLightSpritesheet', 'assets/SalemStreetsLightSpriteSheet.png', {frameWidth: 57, frameHeight: 189})
        this.load.image('SalemStreetsCarriage2', 'assets/SalemStreetsCarriage2.png');
        this.load.image('SalemStreetsBackground', 'assets/SalemStreetsBackground.png');
        this.load.spritesheet('SalemStreetsManSprite', 'assets/SalemStreetsManSprite.png', {frameWidth: 64, frameHeight: 96 });

        this.load.image('StardewValleyBackground', 'assets/StardewValleyBackground.png');
        this.load.spritesheet('StardewPanelViviSpritesheet', 'assets/vivispritesheet.png', {frameWidth: 96, frameHeight: 128 })


        this.load.image('LoftFull', 'assets/LoftFull.png');
        this.load.image('LoftYinYangCats', 'assets/LoftYinYangCats.png');
        this.load.spritesheet('LoftMonitor', 'assets/LoftMonitor.png', {frameWidth: 120, frameHeight: 120 });
    }

    create ()
    {
        super.create();

        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0xffffff);

        this.panelBuilder = new PanelBuilder(this)
                                .add(new SalemStreets(this, 0, 0).create())
                                .add(new StardewValley(this, 0, 0).create())
                                .add(new Loft(this, 0, 0).create());

        this.panelRotator = new PanelRotator(this, this.panelBuilder.toConfig()).create();

        this.leftKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.rightKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.affirmationBackground = this.add.rectangle(0, 0, this.getGameWidth(), this.getGameHeight(), 0x000, 0.0).setOrigin(0, 0);
        this.affirmationPaper = this.add.rectangle(0, 0, this.getGameWidth() * 0.80, this.getGameHeight() * 0.65, 0xB79F7C, 0.0).setOrigin(0, 0);    
        this.affirmationPaper.setPosition((this.getGameWidth() / 2) - (this.affirmationPaper.displayWidth / 2), (this.getGameHeight() / 2) - (this.affirmationPaper.displayHeight / 2));
        
        this.affirmationCloseBackground = this.add.rectangle(0, 0, 64, 64, 0xFF0000, 0.0).setOrigin(0, 0);
        this.affirmationClose = this.add.image(0, 0, "cross").setOrigin(0, 0).setAlpha(0.0).setScale(0.75, 0.75);

        this.affirmationCloseBackground.setPosition(
            this.affirmationPaper.x + this.affirmationPaper.displayWidth - this.affirmationCloseBackground.displayWidth, 
            this.affirmationPaper.y
        ).setName("closeAffirmation");

        this.affirmationClose.setPosition(
            this.affirmationCloseBackground.x + (this.affirmationCloseBackground.displayWidth / 2) - (this.affirmationClose.displayWidth / 2),
            this.affirmationCloseBackground.y + (this.affirmationCloseBackground.displayHeight / 2) - (this.affirmationClose.displayWidth / 2),
        );

        this.affirmationText = this.add.text(this.affirmationPaper.x + 30,  this.affirmationPaper.y + 60, '', {fontFamily: 'Arial', fontSize: 48, color: '#000000', wordWrap: {width: this.affirmationPaper.displayWidth - 60, useAdvancedWrap: true}})    

        this.input.on('gameobjectup', (_: Object, gameObject: Phaser.GameObjects.GameObject) => 
        {
            if(gameObject.name == "closeAffirmation") 
            {
                this.closeAffirmation(gameObject);
                return;
            }

            this.panelRotator.click(gameObject.name, (affirmation: string) =>
            {
                this.openAffirmation(gameObject, affirmation);
            });
        });

        this.input.on('gameobjectover', (_: Object, gameObject: Phaser.GameObjects.GameObject) => 
        {
            this.panelRotator.over(gameObject.name);
        });

        this.input.on('gameobjectout', (_: Object, gameObject: Phaser.GameObjects.GameObject) => 
        {
            this.panelRotator.out(gameObject.name);
        });
    }

    private openAffirmation(gameObject: GameObjects.GameObject, affirmation: string) 
    {
        if(this.affirmationDisplayed)
        {
            return;
        }

        this.affirmationDisplayed = true;

        this.tweens.add({
            targets: this.affirmationBackground,
            fillAlpha: { from: 0, to: 0.5 },
            ease: 'Linear',
            duration: this.affirmationTweenDuration,
            repeat: 0,
            yoyo: false
        });

        this.tweens.add({
            targets: this.affirmationCloseBackground,
            fillAlpha: { from: 0, to: 1.0 },
            ease: 'Linear',
            duration: this.affirmationTweenDuration,
            repeat: 0,
            yoyo: false
        });

        this.tweens.add({
            targets: this.affirmationClose,
            alpha: { from: 0, to: 1.0 },
            ease: 'Linear',
            duration: this.affirmationTweenDuration,
            repeat: 0,
            yoyo: false
        });

        let paperTween = this.tweens.add({
            targets: this.affirmationPaper,
            fillAlpha: { from: 0, to: 1 },
            ease: 'Linear',
            duration: this.affirmationTweenDuration,
            repeat: 0,
            yoyo: false
        });

        paperTween.onCompleteHandler = () => 
        {
            this.tweens.killTweensOf([this.affirmationPaper, this.affirmationClose, this.affirmationCloseBackground, this.affirmationBackground]);
            this.affirmationText.text = affirmation;

            this.panelRotator.off();
            this.panelRotator.out(gameObject.name);

            this.currentDisplayedDate = gameObject.name;

            this.affirmationCloseBackground.setInteractive({useHandCursor: true});
        };
    }

    private closeAffirmation(gameObject: GameObjects.GameObject) {

        this.tweens.add({
            targets: this.affirmationBackground,
            fillAlpha: { from: 0.5, to: 0.0 },
            ease: 'Linear',
            duration: this.affirmationTweenDuration,
            repeat: 0,
            yoyo: false
        });

        this.tweens.add({
            targets: this.affirmationCloseBackground,
            fillAlpha: { from: 1.0, to: 0.0 },
            ease: 'Linear',
            duration: this.affirmationTweenDuration,
            repeat: 0,
            yoyo: false
        });

        this.tweens.add({
            targets: this.affirmationClose,
            alpha: { from: 1.0, to: 0.0 },
            ease: 'Linear',
            duration: this.affirmationTweenDuration,
            repeat: 0,
            yoyo: false
        });

        let paperTween = this.tweens.add({
            targets: this.affirmationPaper,
            fillAlpha: { from: 1.0, to: 0 },
            ease: 'Linear',
            duration: this.affirmationTweenDuration,
            repeat: 0,
            yoyo: false
        });

        this.affirmationText.text = '';

        paperTween.onCompleteHandler = () => {
            this.tweens.killTweensOf([this.affirmationPaper, this.affirmationClose, this.affirmationCloseBackground, this.affirmationBackground]);

            this.panelRotator.on();
            this.panelRotator.closeAffirmation(this.currentDisplayedDate!)

            this.affirmationCloseBackground.disableInteractive(true);

            this.affirmationDisplayed = false;
        };
    }

    update(_: number, delta: number): void 
    {
        if(this.leftKey)
        {
            this.isPreviousLeftKeyDown = this.isLeftKeyDown;
            this.isLeftKeyDown = this.leftKey.isDown;
        }

        if(this.rightKey)
        {
            this.isPreviousRightKeyDown = this.isRightKeyDown;
            this.isRightKeyDown = this.rightKey.isDown;
        }

        if(!this.affirmationDisplayed)
        {
            if(this.isPreviousLeftKeyDown && !this.isLeftKeyDown)
            {
                this.panelRotator.left();
            }

            if(this.isPreviousRightKeyDown && !this.isRightKeyDown)
            {
                this.panelRotator.right();
            }
        }
    }
}
