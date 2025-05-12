import { _decorator, Button, Component, Node, tween, Vec3, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Tutorial')
export class Tutorial extends Component {
    @property({
        type: Button,
        tooltip: 'Button next'
    })
    private buttonNext: Button;

    @property({
        type: Button,
        tooltip: 'Button back'
    })
    private buttonBack: Button;

    @property({
        type: Node,
        tooltip: 'Content tutorial'
    })
    private content: Node;

    @property({
        type: Button,
        tooltip: 'Button close'
    })
    private buttonClose: Button;

    protected onLoad(): void {
        this.buttonBack.node.on(Button.EventType.CLICK, () => {
            if (this.content.position.x + 350 >= 0) this.buttonBack.node.active = false;
            else this.buttonNext.node.active = true;

            this.buttonBack.interactable = false;
            this.buttonNext.interactable = false;

            tween(this.content).to(0.2,
                { position: new Vec3(this.content.position.x + 350, this.content.position.y) },
                { easing: 'smooth' }).call(() => {
                    this.buttonBack.interactable = true;
                    this.buttonNext.interactable = true;
                }).start();
        });

        this.buttonNext.node.on(Button.EventType.CLICK, () => {
            if (this.content.position.x - 350 <= -1400) this.buttonNext.node.active = false;
            else this.buttonBack.node.active = true;

            this.buttonBack.interactable = false;
            this.buttonNext.interactable = false;

            tween(this.content).to(0.2,
                { position: new Vec3(this.content.position.x - 350, this.content.position.y) },
                { easing: 'smooth' }).call(() => {
                    this.buttonBack.interactable = true;
                    this.buttonNext.interactable = true;
                }).start();
        });

        this.buttonClose.node.on(Button.EventType.CLICK, () => {
            this.content.setPosition(0, this.content.position.y);
            this.buttonBack.node.active = false;
            this.buttonNext.node.active = true;
        })
    }
}

