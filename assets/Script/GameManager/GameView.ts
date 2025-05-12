import { _decorator, Animation, Camera, Component, sys, EventTouch, Label, math, Node, Pool, Sprite, SpriteFrame, Vec3 } from 'cc';
import { NodeModal } from '../NodeModal';
import { PoolManager } from '../PoolManager';
import { Constants } from '../Utils/Constants';
import { Cell } from '../PrefabControl/Cell';
import { CellType, Coordinates, FruitType, ItemType } from '../Utils/DataTypes';
import { AnimationScore } from '../PrefabControl/AnimationScore';
const { ccclass, property } = _decorator;

@ccclass('GameView')
export class GameView extends Component {
    @property({
        type: NodeModal,
        tooltip: 'Node modal'
    })
    private nodeModal: NodeModal;

    @property({
        type: PoolManager,
        tooltip: 'Pool manager'
    })
    private poolManager: PoolManager;

    @property({
        type: SpriteFrame,
        tooltip: 'List fruit'
    })
    private listSpriteFrameFruit: SpriteFrame[] = [];

    @property({
        type: Camera
    })
    private cameraGame: Camera;

    @property({
        type: Label,
        tooltip: 'Label number item'
    })
    private listNumberItem: Label[] = [];

    @property({
        type: Label,
        tooltip: 'Label number item side'
    })
    private listNumberItemSide: Label[] = [];

    @property({
        type: Node,
        tooltip: 'Node load'
    })
    private loadNode: Node;

    @property(Node)
    private nodeAnimationGift: Node;

    @property(Sprite)
    private spriteGift: Sprite;

    @property(Label)
    private lbGift: Label;

    protected onLoad(): void {
        this.renderBoard();
        // this.nodeModal.sideBar.active = sys.isMobile;
        this.nodeModal.footer.active = true;
    }

    public renderBoard(): void {
        this.nodeModal.boardBackground.removeAllChildren();

        for (let i = 0; i < Constants.BOARD_SIZE * Constants.BOARD_SIZE; i++) {
            let cell = this.poolManager.getCell();
            cell.getComponent(Cell).setCellType(CellType.Empty);
            this.nodeModal.boardBackground.addChild(cell);

            let coor: Coordinates = { row: Math.floor(i / Constants.BOARD_SIZE), col: i % Constants.BOARD_SIZE };
            cell.getComponent(Cell).setCoordinates(coor);
        }
    }

    public generateCells(arrayIndex: Array<number>, type?: FruitType): Node {
        let cell = this.poolManager.getCell();
        let cellComponent = cell.getComponent(Cell);

        let randomIndex = math.randomRangeInt(0, arrayIndex.length);
        let random = arrayIndex[randomIndex];

        let coor: Coordinates = { row: Math.floor(random / Constants.BOARD_SIZE), col: random % Constants.BOARD_SIZE };
        cellComponent.setCoordinates(coor);
        
        if (type !== undefined) {
            cellComponent.setCellType(CellType.Hint);
            cellComponent.setTypeFruit(type);
            cellComponent.setSpriteFruit(this.listSpriteFrameFruit[type]);
        } else {
            cellComponent.setCellType(CellType.Fruit);
            let randomType = math.randomRangeInt(0, this.listSpriteFrameFruit.length);
            cellComponent.setTypeFruit(randomType);
            cellComponent.setSpriteFruit(this.listSpriteFrameFruit[randomType]);
        }

        this.nodeModal.boardFruit.addChild(cell);
        return cell;
    }

    public spawnNextCells(): Array<number> {
        let listType: Array<number> = new Array();
        while (listType.length < 3) {
            let randomType = math.randomRangeInt(0, this.listSpriteFrameFruit.length);
            listType.push(randomType);
        }
        this.nodeModal.listNextCells.map((item, index) => {
            item.getComponent(Sprite).spriteFrame = this.listSpriteFrameFruit[listType[index]];
        })

        return listType;
    }

    public removeCells(node: Node): void {
        //Reset cell
        node.getComponent(Cell).resetCell();
        this.poolManager.putCell(node);
    }

    public showResult(): void {
        this.nodeModal.gameOverBoard.active = true;
        this.nodeModal.gameOverBoard.getComponent(Animation).play();
    }

    /**
    * @param event Event touch
    * @param node Node to inverse
    * @returns Local position of point in container node
    */
    public getLocationTouch(event: EventTouch, node: Node): Vec3 {
        let location = this.cameraGame.screenToWorld(new Vec3(event.getLocation().x, event.getLocation().y, 0));
        let v3: Vec3 = new Vec3();
        node.inverseTransformPoint(v3, new Vec3(location.x, location.y));
        return v3;
    }

    public setLabelItem(value: number, index: number): void {
        this.listNumberItem[index] && (this.listNumberItem[index].string = `${value}`);
        this.listNumberItemSide[index] && (this.listNumberItemSide[index].string = `${value}`);
    }

    public showLoad(): void {
        this.loadNode.active = true;
    }

    public hiddenLoad(): void {
        this.loadNode.active = false;
    }

    public playAniamtionGift(gift: ItemType): void {
        switch (gift) {
            case ItemType.Boom:
                this.spriteGift.spriteFrame = this.nodeModal.sprFrameBoom;
                this.lbGift.string = '+ 1';
                break;
            case ItemType.Hammer:
                this.spriteGift.spriteFrame = this.nodeModal.sprFrameHammer;
                this.lbGift.string = '+ 1';
                break;
            case ItemType.Undo:
                this.spriteGift.spriteFrame = this.nodeModal.sprFrameUndo;
                this.lbGift.string = '+ 1';
                break;
            case ItemType.None:
                this.spriteGift.spriteFrame = this.nodeModal.sprDouble;
                this.lbGift.string = '';
                break;
        };
        this.nodeAnimationGift.active = true;
        let anim = this.nodeAnimationGift.getComponent(Animation);
        anim.on(Animation.EventType.FINISHED, () => anim.node.active = false);
        anim.play();
    }

    public playExplosion(parent: Node, position: Vec3): void {
        let explo = this.poolManager.getExplosion();

        setTimeout(() => {
            explo.setPosition(position);
            parent.addChild(explo);

            let anim = explo.getComponent(Animation);
            anim.on(Animation.EventType.FINISHED, () => this.poolManager.putExplosion(anim.node));
            anim.play();
        }, 500);
    }

    public playAnimationScore(textCombo: string, textScore: string): void {
        let anim = this.poolManager.getAnimationScore();
        anim.getComponent(AnimationScore).setText(textScore, textCombo);
        anim.parent = this.nodeModal.boardFruit.parent.parent;
        anim.getComponent(AnimationScore).playAnimation();
    }
}

