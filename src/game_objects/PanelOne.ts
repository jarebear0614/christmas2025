import { GameObjects } from "phaser";
import { BaseScene } from "../scenes/BaseScene";
import { BasePanel } from "./BasePanel";

export class PanelOne extends BasePanel 
{
    text1: GameObjects.Text;
    text2: GameObjects.Text;
    text3: GameObjects.Text;
    text4: GameObjects.Text;
    text5: GameObjects.Text;

    constructor(scene: BaseScene, x: number, y: number)
    {
        super(scene, x, y);   
    }

    create() : BasePanel
    {
        super.create();

        this.text1 = this.scene.add.text(0, 0, '1', {fontFamily: 'Arial', fontSize: 64, color: '#000000'})
            .setStroke("#000000", 2)
            .setScrollFactor(0)
            .setVisible(true);

        this.text2 = this.scene.add.text(0, 0, '2', {fontFamily: 'Arial', fontSize: 64, color: '#000000'})
            .setStroke("#000000", 2)
            .setScrollFactor(0)
            .setVisible(true);

        this.text3 = this.scene.add.text(0, 0, '3', {fontFamily: 'Arial', fontSize: 64, color: '#000000'})
            .setStroke("#000000", 2)
            .setScrollFactor(0)
            .setVisible(true);

        this.text4 = this.scene.add.text(0, 0, '4', {fontFamily: 'Arial', fontSize: 64, color: '#000000'})
            .setStroke("#000000", 2)
            .setScrollFactor(0)
            .setVisible(true);

        this.text5 = this.scene.add.text(0, 0, '5', {fontFamily: 'Arial', fontSize: 64, color: '#000000'})
            .setStroke("#000000", 2)
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
        this.text1.setFill("#000");
        this.text2.setFill("#000");
        this.text3.setFill("#000");
        this.text4.setFill("#000");
        this.text5.setFill("#000");
    }
}