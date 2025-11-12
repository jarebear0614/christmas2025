import { BaseScene } from "../scenes/BaseScene";
import { BasePanel } from "./BasePanel";


export class PanelOrder 
{
    panel: BasePanel;
    order: number;

    constructor(panel: BasePanel, order: number) 
    {
        this.panel = panel;
        this.order = order;
    }
}

export class PanelConfig 
{
    panels: PanelOrder[] = [];
}

export class PanelBuilder 
{
    protected scene: BaseScene;
    panels: PanelOrder[] = [];
    currentOrder = 0;

    constructor(scene: BaseScene) 
    {
        this.scene = scene;
    }

    add(panel: BasePanel): PanelBuilder 
    {
        this.panels.push(new PanelOrder(panel, this.currentOrder++));
        return this;
    }

    toConfig(): PanelConfig 
    {
        return { panels: this.panels };
    }
}

export class PanelRotator {
    protected scene: BaseScene;

    config: PanelConfig;
    index: number = 0;

    private animating: boolean = false;

    constructor(scene: BaseScene, config: PanelConfig) 
    {
        this.scene = scene;
        this.config = config;
    }

    create(): PanelRotator 
    {
        this.positionPanels();

        return this;
    }

    private positionPanels() 
    {
        let w = this.scene.getGameWidth();

        let currentPanel = this.config.panels[this.index];
        currentPanel.panel.setPosition(0, 0);

        let previousIndex = this.index - 1 < 0 ? (this.config.panels.length - 1) : (this.index - 1);
        let previousPanel = this.config.panels[previousIndex];
        previousPanel.panel.setPosition(-w, 0);

        let nextIndex = this.index + 1 >= this.config.panels.length ? 0 : (this.index + 1);
        let nextPanel = this.config.panels[nextIndex];
        nextPanel.panel.setPosition(w, 0);
    }

    update(delta: number) 
    {

    }

    on()
    {
        this.config.panels[this.index].panel.on();
    }

    off()
    {
        this.config.panels[this.index].panel.off();
    }

    over(date: string) 
    {
        this.config.panels[this.index].panel.over(date);
    }

    out(date: string)
    {
        this.config.panels[this.index].panel.out(date);
    }

    click(date: string, fn: (affirmation: string) => void) : void
    {
        return this.config.panels[this.index].panel.click(date, fn);
    }

    left() 
    {
        if (this.animating) return;
        this.animating = true;

        let previousIndex = this.index - 1 < 0 ? (this.config.panels.length - 1) : (this.index - 1);
        let previousPanel = this.config.panels[previousIndex];
        this.scene.add.tween({
            targets: previousPanel.panel,
            x: 0,
            ease: 'Quad.easeOut',
            duration: 400,
            repeat: 0,
            yoyo: false
        });

        let currentPanel = this.config.panels[this.index];
        let currentTween = this.scene.add.tween({
            targets: currentPanel.panel,
            x: this.scene.getGameWidth(),
            ease: 'Quad.easeOut',
            duration: 400,
            repeat: 0,
            yoyo: false
        });

        currentTween.onCompleteHandler = () => {
            this.scene.tweens.killTweensOf([previousPanel.panel, currentPanel.panel]);

            this.index--;
            if (this.index < 0) this.index = this.config.panels.length - 1;
            this.positionPanels();

            this.animating = false;
        }
    }

    right() 
    {
        if (this.animating) return;
        this.animating = true;

        let nextIndex = this.index >= this.config.panels.length - 1 ? 0 : (this.index + 1);
        let nextPanel = this.config.panels[nextIndex];
        this.scene.add.tween({
            targets: nextPanel.panel,
            x: 0,
            ease: 'Quad.easeOut',
            duration: 400,
            repeat: 0,
            yoyo: false
        });

        let currentPanel = this.config.panels[this.index];
        let currentTween = this.scene.add.tween({
            targets: currentPanel.panel,
            x: -this.scene.getGameWidth(),
            ease: 'Quad.easeOut',
            duration: 400,
            repeat: 0,
            yoyo: false
        })

        currentTween.onCompleteHandler = () => {
            this.scene.tweens.killTweensOf([nextPanel.panel, currentPanel.panel]);

            this.index++;
            if (this.index >= this.config.panels.length) this.index = 0;
            this.positionPanels();

            this.animating = false;
        }
    }
}