import { GameObjects } from "phaser";
import { BaseScene } from "../scenes/BaseScene";
import { BasePanel } from "./BasePanel";


export class Loft extends BasePanel 
{
    text1: GameObjects.Text;
    text2: GameObjects.Text;
    text3: GameObjects.Text;
    text4: GameObjects.Text;
    text5: GameObjects.Text;

    background: GameObjects.Image;
    yinYangCats: GameObjects.Image;
    monitor: GameObjects.Sprite;


    constructor(scene: BaseScene, x: number, y: number)
    {
        super(scene, x, y);   
    }

    create() : BasePanel
    {
        super.create();

        this.background = this.scene.add.image(this.x, this.y, 'LoftFull').setOrigin(0, 0);

        let yinYangCatsXOffset = this.scene.getGameWidth() * 0.28;
        let yinYangCatsYOffset = this.scene.getGameHeight() * 0.66;
        this.yinYangCats = this.scene.add.image(this.x + yinYangCatsXOffset, this.y + yinYangCatsYOffset, 'LoftYinYangCats').setOrigin(0, 0);

        let monitorXOffset = this.scene.getGameWidth() * 0.01;
        let monitorYOffset = this.scene.getGameHeight() * 0.01;
        this.monitor = this.scene.add.sprite(this.x + monitorXOffset, this.y + monitorYOffset, 'LoftMonitor', 0).setOrigin(0, 0);

        this.addObject(this.background, 0, 0);
        this.addObject(this.yinYangCats, yinYangCatsXOffset, yinYangCatsYOffset);
        this.addObject(this.monitor, monitorXOffset, monitorYOffset);

        this.text1 = this.createNumberedText('1');
        this.text2 = this.createNumberedText('2');
        this.text3 = this.createNumberedText('3');
        this.text4 = this.createNumberedText('4');
        this.text5 = this.createNumberedText('5');

        let xOffsetText1 = (this.scene.getGameWidth() * 0.03) - (this.text1.displayWidth / 2);
        let yOffsetText1 = (this.scene.getGameHeight() * 0.03) - (this.text1.displayHeight / 2);

        this.text1.setPosition(this.x + xOffsetText1, this.y + yOffsetText1);
        this.addObject(this.text1, xOffsetText1, yOffsetText1);

        let xOffsetText2 = (this.scene.getGameWidth() * 0.28) - (this.text2.displayWidth / 2);
        let yOffsetText2 = (this.scene.getGameHeight() * 0.66) - (this.text2.displayHeight / 2);

        this.text2.setPosition(this.x + xOffsetText2, this.y + yOffsetText2);
        this.addObject(this.text2, xOffsetText2, yOffsetText2);

        let xOffsetText3 = (this.scene.getGameWidth() * 0.88) - (this.text3.displayWidth / 2);
        let yOffsetText3 = (this.scene.getGameHeight() * 0.35) - (this.text3.displayHeight / 2);

        this.text3.setPosition(this.x + xOffsetText3, this.y + yOffsetText3);
        this.addObject(this.text3, xOffsetText3, yOffsetText3);

        let xOffsetText4 = (this.scene.getGameWidth() * 0.23) - (this.text4.displayWidth / 2);
        let yOffsetText4 = (this.scene.getGameHeight() * 0.30) - (this.text4.displayHeight / 2);

        this.text4.setPosition(this.x + xOffsetText4, this.y + yOffsetText4);
        this.addObject(this.text4, xOffsetText4, yOffsetText4);

        let xOffsetText5 = (this.scene.getGameWidth() * 0.425) - (this.text5.displayWidth / 2);
        let yOffsetText5 = (this.scene.getGameHeight() * 0.20) - (this.text5.displayHeight / 2);

        this.text5.setPosition(this.x + xOffsetText5, this.y + yOffsetText5);
        this.addObject(this.text5, xOffsetText5, yOffsetText5);

        this.addInteractable(this.scene.add.zone(this.x + xOffsetText1, this.y + yOffsetText1, this.text1.displayWidth,this.text1.displayHeight).setName('12/1/2025').setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText1, yOffsetText1);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText2, this.y + yOffsetText2, this.text2.displayWidth,this.text2.displayHeight).setName('12/2/2025').setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText2, yOffsetText2);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText3, this.y + yOffsetText3, this.text3.displayWidth,this.text3.displayHeight).setName('12/3/2025').setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText3, yOffsetText3);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText4, this.y + yOffsetText4, this.text4.displayWidth,this.text4.displayHeight).setName('12/4/2025').setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText4, yOffsetText4);
        this.addInteractable(this.scene.add.zone(this.x + xOffsetText5, this.y + yOffsetText5, this.text5.displayWidth,this.text5.displayHeight).setName('12/5/2025').setOrigin(0, 0).setInteractive({useHandCursor: true}).setScrollFactor(0), xOffsetText5, yOffsetText5);

        return this;
    }

    click(date: string, fn: (affirmation: string) => void): void 
    {
        if(date == '12/1/2025')
        {
            this.monitor.setFrame(1);
            super.click(date, fn);
        }
        else {
            super.click(date, fn);
        }
    }
}