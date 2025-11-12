import { Animations, GameObjects } from "phaser";
import { BaseScene } from "../scenes/BaseScene";
import { BasePanel } from "./BasePanel";

export class SalemStreets extends BasePanel 
{
    text1: GameObjects.Text;
    text2: GameObjects.Text;
    text3: GameObjects.Text;
    text4: GameObjects.Text;
    text5: GameObjects.Text;

    background: GameObjects.Image;
    walkway: GameObjects.Image;
    man: GameObjects.Sprite;
    light: GameObjects.Image;
    carriage: GameObjects.Image;

    tempVivi: GameObjects.Sprite;

    constructor(scene: BaseScene, x: number, y: number)
    {
        super(scene, x, y);   
    }

    create() : BasePanel
    {
        super.create();

        this.background = this.scene.add.image(this.x, this.y, 'SalemStreetsBackground').setOrigin(0, 0);
        this.walkway = this.scene.add.image(this.x, this.y, 'SalemStreetsWalkway').setOrigin(0, 0);
        this.light = this.scene.add.image(this.x, this.y, 'SalemStreetsLight').setOrigin(0, 0);
        this.carriage = this.scene.add.image(this.x, this.y, 'SalemStreetsCarriage').setOrigin(0, 0);

        let viviXOffset = this.scene.getGameWidth() * 0.15;
        let viviYOffset = this.scene.getGameHeight() * 0.10;
        this.tempVivi = this.scene.add.sprite(this.x + viviXOffset, this.y + viviYOffset, 'StardewPanelViviSpritesheet', 0).setOrigin(0, 0);

        this.scene.anims.create({
            key: 'StardewPanelViviSpritesheet_Anim',
            frames: this.scene.anims.generateFrameNumbers('StardewPanelViviSpritesheet', {start: 0, end: 5}),
            frameRate: 5,
            repeat: 0
        });

        let manXOffset = this.scene.getGameWidth() * 0.05;
        let manYOffset = this.scene.getGameHeight() * 0.24;
        this.man = this.scene.add.sprite(this.x + manXOffset, this.y + manYOffset, 'SalemStreetsManSprite', 0).setOrigin(0, 0);

        this.scene.anims.create({
            key: 'SalemStreetsManSprite_Anim',
            frames: this.scene.anims.generateFrameNumbers('SalemStreetsManSprite', {start: 0, end: 1}),
            frameRate: 1,
            repeat: -1
        });

        this.addObject(this.background, 0, 0);
        this.addObject(this.walkway, 0, 0);
        this.addObject(this.light, 0, 0);
        this.addObject(this.carriage, 0, 0);
        this.addObject(this.man, manXOffset, manYOffset);
        this.addObject(this.tempVivi, viviXOffset, viviYOffset);

        this.man.anims.play({key: 'SalemStreetsManSprite_Anim', }, false);

        this.text1 = this.scene.add.text(0, 0, '1', {fontFamily: 'Arial', fontSize: 64, color: '#FFFFFF'})
            .setStroke("#000000", 5)
            .setScrollFactor(0)
            .setVisible(true);

        this.text2 = this.scene.add.text(0, 0, '2', {fontFamily: 'Arial', fontSize: 64, color: '#FFFFFF'})
            .setStroke("#000000", 5)
            .setScrollFactor(0)
            .setVisible(true);

        this.text3 = this.scene.add.text(0, 0, '3', {fontFamily: 'Arial', fontSize: 64, color: '#FFFFFF'})
            .setStroke("#000000", 5)
            .setScrollFactor(0)
            .setVisible(true);

        this.text4 = this.scene.add.text(0, 0, '4', {fontFamily: 'Arial', fontSize: 64, color: '#FFFFFF'})
            .setStroke("#000000", 5)
            .setScrollFactor(0)
            .setVisible(true);

        this.text5 = this.scene.add.text(0, 0, '5', {fontFamily: 'Arial', fontSize: 64, color: '#FFFFFF'})
            .setStroke("#000000", 5)
            .setScrollFactor(0)
            .setVisible(true);


        let xOffsetText1 = (this.scene.getGameWidth() / 2) - (this.text1.displayWidth / 2);
        let yOffsetText1 = (this.scene.getGameHeight() / 2) - (this.text1.displayHeight / 2);

        this.text1.setPosition(this.x + xOffsetText1, this.y + yOffsetText1);
        this.addObject(this.text1, xOffsetText1, yOffsetText1);

        let xOffsetText2 = (this.scene.getGameWidth() * 0.15) - (this.text2.displayWidth / 2);
        let yOffsetText2 = (this.scene.getGameHeight() * 0.15) - (this.text2.displayHeight / 2);

        this.text2.setPosition(this.x + xOffsetText2, this.y + yOffsetText2);
        this.addObject(this.text2, xOffsetText2, yOffsetText2);

        let xOffsetText3 = (this.scene.getGameWidth() * 0.85) - (this.text3.displayWidth / 2);
        let yOffsetText3 = (this.scene.getGameHeight() * 0.15) - (this.text3.displayHeight / 2);

        this.text3.setPosition(this.x + xOffsetText3, this.y + yOffsetText3);
        this.addObject(this.text3, xOffsetText3, yOffsetText3);

        let xOffsetText4 = (this.scene.getGameWidth() * 0.85) - (this.text4.displayWidth / 2);
        let yOffsetText4 = (this.scene.getGameHeight() * 0.85) - (this.text4.displayHeight / 2);

        this.text4.setPosition(this.x + xOffsetText4, this.y + yOffsetText4);
        this.addObject(this.text4, xOffsetText4, yOffsetText4);

        let xOffsetText5 = (this.scene.getGameWidth() * 0.15) - (this.text5.displayWidth / 2);
        let yOffsetText5 = (this.scene.getGameHeight() * 0.85) - (this.text5.displayHeight / 2);

        this.text5.setPosition(this.x + xOffsetText5, this.y + yOffsetText5);
        this.addObject(this.text5, xOffsetText5, yOffsetText5);

        this.addInteractable(this.scene.add.zone(this.x + xOffsetText1, this.y + yOffsetText1, this.text1.displayWidth,this.text1.displayHeight).setName('12/1/2025').setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText1, yOffsetText1);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText2, this.y + yOffsetText2, this.text2.displayWidth,this.text2.displayHeight).setName('12/2/2025').setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText2, yOffsetText2);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText3, this.y + yOffsetText3, this.text3.displayWidth,this.text3.displayHeight).setName('12/3/2025').setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText3, yOffsetText3);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText4, this.y + yOffsetText4, this.text4.displayWidth,this.text4.displayHeight).setName('12/4/2025').setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText4, yOffsetText4);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText5, this.y + yOffsetText5, this.text5.displayWidth,this.text5.displayHeight).setName('12/5/2025').setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText5, yOffsetText5);

        return this;
    }

    over(date: string): void 
    {
        switch(date)
        {
            case '12/1/2025':
                this.text1.setFill("#daf82eff")
                break;
            case '12/2/2025':
                this.text2.setFill("#daf82eff")
                break;
            case '12/3/2025':
                this.text3.setFill("#daf82eff")
                break;
            case '12/4/2025':
                this.text4.setFill("#daf82eff")
                break;
            case '12/5/2025':
                this.text5.setFill("#daf82eff")
                break;
        }
    }

    out(date: string): void {
        this.text1.setFill("#FFF");
        this.text2.setFill("#FFF");
        this.text3.setFill("#FFF");
        this.text4.setFill("#FFF");
        this.text5.setFill("#FFF");
    }

    click(date: string, fn: (affirmation: string) => void): void 
    {
        if(date == '12/1/2025')
        {
            let currentTween = this.scene.add.tween({
                targets: this.carriage,
                y: -1024,
                ease: 'Linear',
                duration: 800,
                repeat: 0,
                yoyo: false
            });

            currentTween.onCompleteHandler = () => {
                this.scene.tweens.killTweensOf(this.carriage);
                super.click(date, fn);
            }
        }
        else if(date == '12/2/2025')
        {
            this.tempVivi.anims.play('StardewPanelViviSpritesheet_Anim', false);

            this.tempVivi.on(Animations.Events.ANIMATION_COMPLETE, () => {
                this.tempVivi.off(Animations.Events.ANIMATION_COMPLETE);

                super.click(date, fn);
            });
        }
        else 
        {
            super.click(date, fn);
        }
    }
}