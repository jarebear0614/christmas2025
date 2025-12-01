import { GameObjects } from "phaser";
import { BaseScene } from "../scenes/BaseScene";
import { BasePanel } from "./BasePanel";

export class Gables extends BasePanel 
{
    text1: GameObjects.Text;
    text2: GameObjects.Text;
    text3: GameObjects.Text;
    text4: GameObjects.Text;
    text5: GameObjects.Text;

    background: GameObjects.Image;

    us: GameObjects.Image;
    usXOffset: number = 0;

    sun: GameObjects.Image;   

    raccoon: GameObjects.Image;
    raccoonDisplayHeight: number = 0;

    frog: GameObjects.Image;
    frogDisplayHeight: number = 0;

    constructor(scene: BaseScene, x: number, y: number)
    {
        super(scene, x, y);   
    }

    create(currentDate: Date) : BasePanel
    {
        super.create(currentDate);

        this.background = this.scene.add.image(this.x, this.y, 'GablesFull').setOrigin(0, 0);

        this.usXOffset = this.scene.getGameWidth() * 0.40;
        let usYOffset = this.scene.getGameHeight() * 0.70;
        this.us = this.scene.add.image(this.x + this.usXOffset, this.y + usYOffset, 'GablesUs', 0).setOrigin(0, 0);       
        
        let sunXOffset = this.scene.getGameWidth() * 0.685;
        let sunYOffset = this.scene.getGameHeight() * 0.02;
        this.sun = this.scene.add.image(this.x + sunXOffset, this.y + sunYOffset, 'GablesSun', 0).setOrigin(0, 0);   

        let raccoonXOffset = this.scene.getGameWidth() * 0.07;
        let raccoonYOffset = this.scene.getGameHeight() * 0.78;
        this.raccoon = this.scene.add.image(this.x + raccoonXOffset, this.y + raccoonYOffset, 'GablesRaccoon', 0).setOrigin(0, 1); 
        this.raccoonDisplayHeight = this.raccoon.displayHeight;
        this.raccoon.displayHeight = 0;

        let frogXOffset = this.scene.getGameWidth() * 0.60;
        let frogYOffset = this.scene.getGameHeight() * 0.98;
        this.frog = this.scene.add.image(this.x + frogXOffset, this.y + frogYOffset, 'GablesFrog', 0).setOrigin(0, 1); 
        this.frogDisplayHeight = this.frog.displayHeight;
        this.frog.displayHeight = 0;

        this.addObject(this.background, 0, 0);
        this.addObject(this.us, this.usXOffset, usYOffset);
        this.addObject(this.sun, sunXOffset, sunYOffset);
        this.addObject(this.raccoon, raccoonXOffset, raccoonYOffset);
        this.addObject(this.frog, frogXOffset, frogYOffset);

        this.text1 = this.createNumberedText('25').setFill(currentDate >= new Date(2025, 11, 25) ? '#FFFFFF' : '#AAAAAA');
        this.text2 = this.createNumberedText('9').setFill(currentDate >= new Date(2025, 11, 9) ? '#FFFFFF' : '#AAAAAA');
        this.text3 = this.createNumberedText('14').setFill(currentDate >= new Date(2025, 11, 14) ? '#FFFFFF' : '#AAAAAA');
        this.text4 = this.createNumberedText('19').setFill(currentDate >= new Date(2025, 11, 19) ? '#FFFFFF' : '#AAAAAA');
        this.text5 = this.createNumberedText('24').setFill(currentDate >= new Date(2025, 11, 24) ? '#FFFFFF' : '#AAAAAA');

        let xOffsetText1 = (this.scene.getGameWidth() * 0.50) - (this.text2.displayWidth / 2);
        let yOffsetText1 = (this.scene.getGameHeight() * 0.65) - (this.text2.displayHeight / 2);

        this.text1.setPosition(this.x + xOffsetText1, this.y + yOffsetText1);
        this.addObject(this.text1, xOffsetText1, yOffsetText1);

        let xOffsetText2 = (this.scene.getGameWidth() * 0.50) - (this.text2.displayWidth / 2);
        let yOffsetText2 = (this.scene.getGameHeight() * 0.35) - (this.text2.displayHeight / 2);

        this.text2.setPosition(this.x + xOffsetText2, this.y + yOffsetText2);
        this.addObject(this.text2, xOffsetText2, yOffsetText2);

        let xOffsetText3 = (this.scene.getGameWidth() * 0.85) - (this.text3.displayWidth / 2);
        let yOffsetText3 = (this.scene.getGameHeight() * 0.10) - (this.text3.displayHeight / 2);

        this.text3.setPosition(this.x + xOffsetText3, this.y + yOffsetText3);
        this.addObject(this.text3, xOffsetText3, yOffsetText3);

        let xOffsetText4 = (this.scene.getGameWidth() * 0.75) - (this.text4.displayWidth / 2);
        let yOffsetText4 = (this.scene.getGameHeight() * 0.95) - (this.text4.displayHeight / 2);

        this.text4.setPosition(this.x + xOffsetText4, this.y + yOffsetText4);
        this.addObject(this.text4, xOffsetText4, yOffsetText4);

        let xOffsetText5 = (this.scene.getGameWidth() * 0.10) - (this.text5.displayWidth / 2);
        let yOffsetText5 = (this.scene.getGameHeight() * 0.85) - (this.text5.displayHeight / 2);

        this.text5.setPosition(this.x + xOffsetText5, this.y + yOffsetText5);
        this.addObject(this.text5, xOffsetText5, yOffsetText5);

        this.addInteractable(this.scene.add.zone(this.x + xOffsetText1, this.y + yOffsetText1, this.text1.displayWidth,this.text1.displayHeight).setName('12/25/2025').setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText1, yOffsetText1);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText2, this.y + yOffsetText2, this.text2.displayWidth,this.text2.displayHeight).setName('12/9/2025').setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText2, yOffsetText2);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText3, this.y + yOffsetText3, this.text3.displayWidth,this.text3.displayHeight).setName('12/14/2025').setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText3, yOffsetText3);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText4, this.y + yOffsetText4, this.text4.displayWidth,this.text4.displayHeight).setName('12/19/2025').setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText4, yOffsetText4);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText5, this.y + yOffsetText5, this.text5.displayWidth,this.text5.displayHeight).setName('12/24/2025').setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText5, yOffsetText5);

        return this;
    }

    over(date: string): void 
    {
    }

    out(date: string): void {
    }

    click(date: string, fn: (affirmation: string) => void): void 
    {
        if(date == "12/25/2025") 
        {
            let currentTween = this.scene.add.tween({
                targets: this.us,
                x: this.usXOffset - 100,
                ease: 'Linear',
                duration: 400,
                repeat: 0,
                yoyo: false
            });

            currentTween.onCompleteHandler = () => {
                this.scene.tweens.killTweensOf(this.us);

                let nextTween = this.scene.add.tween({
                    targets: this.us,
                    x: this.usXOffset + 100,
                    ease: 'Linear',
                    duration: 800,
                    repeat: 0,
                    yoyo: false
                });

                nextTween.onCompleteHandler = () => 
                {
                    this.scene.tweens.killTweensOf(this.us);
                    let finalTween = this.scene.add.tween({
                        targets: this.us,
                        x: this.usXOffset,
                        ease: 'Linear',
                        duration: 400,
                        repeat: 0,
                        yoyo: false
                    })

                    finalTween.onCompleteHandler = () =>
                    {
                        this.scene.tweens.killTweensOf(this.us);
                        super.click(date, fn);
                    }
                }
            }
        }
        else if(date == '12/19/2025')
        {
            let currentTween = this.scene.add.tween({
                targets: this.frog,
                displayHeight: this.frogDisplayHeight,
                ease: 'Linear',
                duration: 400,
                repeat: 0,
                yoyo: false
            });

            currentTween.onCompleteHandler = () => 
            {
                this.scene.tweens.killTweensOf(this.frog);
                super.click(date, fn);
            }
        }
        else if(date == '12/24/2025')
        {
            let currentTween = this.scene.add.tween({
                targets: this.raccoon,
                displayHeight: this.raccoonDisplayHeight,
                ease: 'Linear',
                duration: 400,
                repeat: 0,
                yoyo: false
            });

            currentTween.onCompleteHandler = () => 
            {
                this.scene.tweens.killTweensOf(this.raccoon);
                super.click(date, fn);
            }
        }
        else
        {
            super.click(date, fn);
        }
    }

    closeAffirmation(date: string): void 
    {

        if(date == '12/19/2025')
        {
            let currentTween = this.scene.add.tween({
                targets: this.frog,
                displayHeight: 0,
                ease: 'Linear',
                duration: 400,
                repeat: 0,
                yoyo: false
            });

            currentTween.onCompleteHandler = () => 
            {
                this.scene.tweens.killTweensOf(this.frog);
            }
        }
        else if(date == '12/24/2025')
        {
            let currentTween = this.scene.add.tween({
                targets: this.raccoon,
                displayHeight: 0,
                ease: 'Linear',
                duration: 400,
                repeat: 0,
                yoyo: false
            });

            currentTween.onCompleteHandler = () => 
            {
                this.scene.tweens.killTweensOf(this.raccoon);
            }
        }
    }
}