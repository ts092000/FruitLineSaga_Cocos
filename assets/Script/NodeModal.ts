import { _decorator, Button, Component, Node, Sprite, SpriteFrame, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NodeModal')
export class NodeModal extends Component {
    @property({
        type: Node,
        tooltip: 'Board background'
    })
    public boardBackground: Node;

    @property({
        type: Node,
        tooltip: 'Board fruit'
    })
    public boardFruit: Node;

    @property({
        type: Node,
        tooltip: 'List next turn'
    })
    public listNextCells: Node[] = [];

    @property({
        type: Node,
        tooltip: 'Game over board'
    })
    public gameOverBoard: Node;

    @property({
        type: Button,
        tooltip: 'Button restart'
    })
    public listButtonRestart: Button[] = [];

    @property({
        type: Node,
        tooltip: 'Footer view'
    })
    public boardView: Node;

    @property({
        type: Node,
        tooltip: 'Item boom'
    })
    public itemBoom: Node;

    @property({
        type: Node,
        tooltip: 'Item board'
    })
    public itemBoard: Node;

    @property({
        type: Node,
        tooltip: 'Board item hammer'
    })
    public itemHammerBoard: Node;

    @property({
        type: Node,
        tooltip: 'Item hammer'
    })
    public itemHammer: Node;

    @property({
        type: Node,
        tooltip: 'Item undo'
    })
    public itemUndo: Node;

    @property({
        type: Node,
        tooltip: 'Setting board'
    })
    public settingBoard: Node;

    @property({
        type: Button,
        tooltip: 'Setting button'
    })
    public buttonSetting;

    @property({
        type: Button,
        tooltip: 'Button resume'
    })
    public buttonResume: Button;

    @property({
        type: Button,
        tooltip: 'List button home'
    })
    public buttonHome: Button[] = [];

    @property({
        type: Node,
        tooltip: 'Button undo side'
    })
    public buttonUndoSide: Node;

    @property({
        type: Node,
        tooltip: 'Button boom side'
    })
    public buttonBoomSide: Node;

    @property({
        type: Node,
        tooltip: 'Button hammer side'
    })
    public buttonHammerSide: Node;

    @property({
        type: Node,
    })
    public gridBoom: Node;

    @property({
        type: Node
    })
    public gridHammer: Node;

    @property({
        type: Node,
    })
    public sideBar: Node;

    @property({
        type: Node
    })
    public footer: Node; 

    @property(Sprite)
    private spriteBg: Sprite;

    @property(SpriteFrame)
    private sprFrameBgHor: SpriteFrame;

    @property(SpriteFrame)
    private sprFrameBgVer: SpriteFrame

    @property(SpriteFrame)
    public sprFrameBoom: SpriteFrame; 

    @property(SpriteFrame)
    public sprFrameHammer: SpriteFrame; 

    @property(SpriteFrame)
    public sprFrameUndo: SpriteFrame;

    @property(SpriteFrame)
    public sprDouble: SpriteFrame;

    protected start(): void {
        this.spriteBg.spriteFrame = sys.isMobile ? this.sprFrameBgVer : this.sprFrameBgHor;
    }



}

