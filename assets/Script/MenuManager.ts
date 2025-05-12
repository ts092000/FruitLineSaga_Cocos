import { _decorator, Button, Component, director, Node } from 'cc';
import { Constants } from './Utils/Constants';
const { ccclass, property } = _decorator;

@ccclass('MenuManager')
export class MenuManager extends Component {
    @property({
        type: Button,
        tooltip: 'Button play'
    })
    private buttonPlay: Button;

    @property({
        type: Button,
        tooltip: 'Button setting'
    })
    private buttonSetting: Button;

    @property({
        type: Node,
        tooltip: 'Setting board'
    })
    private settingBoard: Node;

    @property({
        type: Button,
        tooltip: 'Button home'
    })
    private buttonHome: Button;

    @property({
        type: Node,
        tooltip: 'Main node'
    })
    private mainNode: Node;

    @property({
        type: Node,
        tooltip: 'Tutorial node'
    })
    private tutorialNode: Node;

    @property({
        type: Button,
        tooltip: 'Button tutorial'
    })
    private buttonTutorial: Button;

    @property({
        type: Button,
        tooltip: 'Button close'
    })
    private buttonClose: Button;

    protected onLoad(): void {
        this.buttonPlay.node.on(Button.EventType.CLICK, () => director.loadScene(Constants.SCENE_NAME.Game));
        this.buttonSetting.node.on(Button.EventType.CLICK, () => {
            this.buttonTutorial.interactable = false;
            this.buttonSetting.interactable = false;
            this.buttonPlay.interactable = false;
            this.settingBoard.active = true
        });
        this.buttonHome.node.on(Button.EventType.CLICK, () => {
            this.settingBoard.active = false;
            this.buttonTutorial.interactable = true;
            this.buttonSetting.interactable = true;
            this.buttonPlay.interactable = true;
        });

        this.buttonTutorial.node.on(Button.EventType.CLICK, () => {
            this.tutorialNode.active = true;
            this.mainNode.active = false;
        });

        this.buttonClose.node.on(Button.EventType.CLICK, () => {
            this.tutorialNode.active = false;
            this.mainNode.active = true;
        })
    }
}

