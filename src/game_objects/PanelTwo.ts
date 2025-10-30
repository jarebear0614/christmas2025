import { BaseScene } from "../scenes/BaseScene";
import { BasePanel } from "./BasePanel";


export class PanelTwo extends BasePanel 
{
    constructor(scene: BaseScene, x: number, y: number)
    {
        super(scene, x, y);   
    }

    create() : BasePanel
    {
        super.create();

        let text = this.scene.add.text(0, 0, '2', {fontFamily: 'Arial', fontSize: 64, color: '#000000'})
            .setStroke("#000000", 2)
            .setScrollFactor(0)
            .setVisible(true);

        text.setPosition(this.x + (this.scene.getGameWidth() / 2) - (text.displayWidth / 2), this.y + (this.scene.getGameHeight() / 2) - (text.displayHeight / 2));

        let xOffset = (this.scene.getGameWidth() / 2) - (text.displayWidth / 2);
        let yOffset = (this.scene.getGameHeight() / 2) - (text.displayHeight / 2);

        text.setPosition(this.x + xOffset, this.y + yOffset);
        this.addObject(text, xOffset, yOffset);

        return this;
    }
}