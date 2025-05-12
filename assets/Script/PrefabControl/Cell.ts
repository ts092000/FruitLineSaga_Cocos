import { _decorator, Animation, Component, Node, Sprite, SpriteFrame, tween, Vec3 } from 'cc';
import { CellType, Coordinates, FruitType } from '../Utils/DataTypes';
import { Constants } from '../Utils/Constants';
const { ccclass, property } = _decorator;

@ccclass('Cell')
export class Cell extends Component {
    @property({
        type: Sprite,
        tooltip: 'Sprite fruil'
    })
    private spriteFruit: Sprite;

    @property({
        type: Animation,
        tooltip: 'Animation cell'
    })
    private animation: Animation;

    @property({
        type: Node,
        tooltip: 'Swirl node'
    })
    private swirlNode: Node;

    private coordinates: Coordinates = { row: 0, col: 0 };
    private isSelecting: boolean = false;
    private type: FruitType = FruitType.Apple;
    private cellType: CellType = CellType.Empty;

    protected start(): void {
        this.spriteFruit.node.setPosition(20, 20);
    }

    public setCellType(type: CellType): void {
        this.cellType = type;
        if (type === CellType.Hint) {
            tween(this.spriteFruit.node).to(0.1, { scale: new Vec3(0.1, 0.1, 1) }).start();
        }
        if (type === CellType.Fruit) {
            tween(this.spriteFruit.node).to(0.1, { scale: new Vec3(0.18, 0.18, 1) }).start();

        }

        this.spriteFruit.node.active = !(this.cellType === CellType.Empty);
        this.node.getComponent(Sprite).enabled = this.cellType === CellType.Empty;
    }

    public playAnimation(): void {
        this.onTouchStart();
    }

    public setCoordinates(coordinates: Coordinates): void {
        this.coordinates = { ...coordinates };
        this.node.setPosition(coordinates.col * Constants.CELL_SIZE, (8 - coordinates.row) * Constants.CELL_SIZE);
    }

    public getCoordinates(): Coordinates {
        return this.coordinates;
    }

    private onTouchStart(): void {
        this.isSelecting = !this.isSelecting;
        if (this.isSelecting) this.animation.play();
        else this.stopAnimation();
    }

    public stopAnimation(): void {
        this.isSelecting = false;
        this.animation.stop();

        this.spriteFruit.node.setScale(0.18, 0.18);
    }

    public setSpriteFruit(spriteFrame: SpriteFrame): void {
        this.spriteFruit.spriteFrame = spriteFrame;
    }

    public setTypeFruit(type: FruitType): void {
        this.type = type;
    }

    public getTypeFruit(): FruitType {
        return this.type;
    }

    public hiddenCell(): void {
        this.node.off(Node.EventType.TOUCH_START);
        this.swirlNode.active = true;
        this.animation.play(Constants.ANIMATION_NAME.FruitHidden);
    }

    public resetCell(): void {
        this.coordinates = { row: 0, col: 0 };
        this.isSelecting = false;
        this.setTypeFruit(FruitType.Apple);
        this.setCellType(CellType.Empty);
        this.animation.stop();
        this.node.off(Node.EventType.TOUCH_START);
    }

    public getCellType(): CellType {
        return this.cellType;
    }
}

