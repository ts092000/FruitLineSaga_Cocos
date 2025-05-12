import { AudioType, Turn } from './../Utils/DataTypes';
import { _decorator, Animation, Button, Component, director, EventTouch, Label, Node, ProgressBar, randomRangeInt, Tween, tween, Vec3 } from 'cc';
import { MatrixManager } from './MatrixManager';
import { GameView } from './GameView';
import { NodeModal } from '../NodeModal';
import { Cell } from '../PrefabControl/Cell';
import { CellType, Coordinates, FruitType, ItemType } from '../Utils/DataTypes';
import { Constants } from '../Utils/Constants';
import { ScoreManager } from '../ScoreManager';
import { AudioController } from '../AudioController';
import { GameCenterController } from '../GameCenter/GameCenterController';
import { LevelBar } from '../PrefabControl/LevelBar';
import { LeaderboardHandle } from '../../Leaderboard/Script/LeaderboardHandle';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    @property({
        type: MatrixManager,
        tooltip: 'Matrix manager'
    })
    private matrixManager: MatrixManager;

    @property({
        type: GameView,
        tooltip: 'Game view node'
    })
    private gameView: GameView;

    @property({
        type: NodeModal,
        tooltip: 'Node modal'
    })
    private nodeModal: NodeModal;

    @property({
        type: ScoreManager,
        tooltip: 'Score manager'
    })
    private scoreManager: ScoreManager;

    @property({
        type: AudioController
    })
    private audioController: AudioController;

    @property({
        type: GameCenterController,
        tooltip: 'Game center controller'
    })
    private gameCenter: GameCenterController;

    @property(LevelBar)
    private levelBar: LevelBar;

    @property(ProgressBar)
    private progressTime: ProgressBar;

    @property(Label)
    private lbCountDown: Label;

    @property(Node)
    private coefficientNode: Node;

    @property(LeaderboardHandle)
    private lbHandle: LeaderboardHandle;

    private listBoardCell: Array<Node> = new Array();
    private listFruitCell: Array<Node> = new Array();
    private listNextTypes: Array<number> = new Array();
    private listNextCells: Array<Node> = new Array();
    private listCoorOfItem: Array<Coordinates> = new Array();

    private currentFruitCell: Node | null = null;
    private boardItem: Node;

    private isGameOver: boolean = false;
    private isPause: boolean = false;
    private currentItem: ItemType = ItemType.None;
    private turn: Turn = { cell: null, coor: null, listNewCell: [], listNextCell: [], prev: null, path: [] }

    private numberItem: Map<ItemType, number> = new Map();
    private numberAction: number = 0;

    private interval: number;
    private time: number = 0;
    private intervalProcess: number;
    private countdown: number = 1500;

    private coefficient: number = 1;
    private combo: number = 1;
    private prevGift: number = -1;

    protected start(): void {

        this.lbCountDown.node.parent.active = false;
        this.coefficientNode.active = false;
        this.levelBar.setCurrentLabel(1);
        this.levelBar.setValueBar(0);
        // this.gameCenter.startMatch(() => {
        //     this.interval = setInterval(() => {
        //         if (!this.gameCenter) clearInterval(this.interval);
        //         this.time++
        //         this.gameCenter && this.gameCenter.logMatch({ score: this.scoreManager.getScore() });
        //     }, 1000);
        // });
        this.gameView.hiddenLoad();
        this.initGame();
    }

    private showCountdown(): void {
        this.lbCountDown.node.parent.active = true;
        this.lbCountDown.string = `15`;
        this.coefficient = 2;
        this.coefficientNode.active = true;
        setTimeout(() => {
            this.intervalProcess = setInterval(() => {
                this.progressTime.progress -= 0.0006;
                if (this.progressTime.progress <= 0) {
                    clearInterval(this.intervalProcess);
                    this.coefficient = 1;
                    this.lbCountDown.node.parent.active = false;
                    this.coefficientNode.active = false;
                    this.progressTime.progress = 1;
                    this.countdown = 1500;
                }
                this.countdown--;
                if (this.countdown < 0) {
                    return;
                }
                if (this.countdown % 100 === 0) this.lbCountDown.string = `${this.countdown / 100}`;
            }, 10)
        }, 1110);
    }

    private initGame(): void {
        //Set info turn
        this.turn.prev = { ...this.turn };
        this.numberItem.set(ItemType.Boom, Constants.DEFAULT_NUMBER_ITEM);
        this.numberItem.set(ItemType.Hammer, Constants.DEFAULT_NUMBER_ITEM);
        this.numberItem.set(ItemType.Undo, Constants.DEFAULT_NUMBER_ITEM);

        //Init fruit cell
        this.spawnCellFruit();
        this.spawnCellFruit();
        this.spawnCellFruit();
        this.spawnCellFruit();

        //Spawn next cells
        this.listNextTypes = this.gameView.spawnNextCells();

        //Get list cell
        this.listBoardCell = this.nodeModal.boardBackground.children;
        this.listFruitCell = this.nodeModal.boardFruit.children;

        //Add events
        this.listBoardCell.map((cell) => cell.on(Node.EventType.TOUCH_START, this.onTouchStartBoard, this));
        this.listFruitCell.map((cell) => cell.on(Node.EventType.TOUCH_START, this.onTouchStartCell, this))

        this.addEventButtons();
    }

    private addEventButtons(): void {
        this.nodeModal.buttonResume.node.on(Button.EventType.CLICK, () => {
            this.isPause = false;
            this.nodeModal.settingBoard.active = false;
        });

        this.nodeModal.buttonSetting.node.on(Button.EventType.CLICK, () => {
            this.isPause = true;
            this.nodeModal.settingBoard.active = true;
        });

        this.nodeModal.buttonHome.map((button) => {
            button.node.on(Button.EventType.CLICK, () => director.loadScene(Constants.SCENE_NAME.Begin));
        })

        this.nodeModal.listButtonRestart.map((button) => {
            button.node.on(Button.EventType.CLICK, () => {
                director.loadScene(Constants.SCENE_NAME.Game)
            });
        })

        //Event item
        this.nodeModal.itemBoom.on(Node.EventType.TOUCH_START, this.onTouchStartBoom, this);
        this.nodeModal.itemHammer.on(Node.EventType.TOUCH_START, this.onTouchStartHammer, this);
        this.nodeModal.itemUndo.on(Node.EventType.TOUCH_START, this.handleUndo, this);

        //Event item
        this.nodeModal.itemBoom.on(Node.EventType.TOUCH_END, this.onTouchEndItem, this);
        this.nodeModal.itemHammer.on(Node.EventType.TOUCH_END, this.onTouchEndItem, this);

        //Event item
        this.nodeModal.buttonBoomSide.on(Node.EventType.TOUCH_START, this.onTouchStartBoom, this);
        this.nodeModal.buttonHammerSide.on(Node.EventType.TOUCH_START, this.onTouchStartHammer, this);
        this.nodeModal.buttonUndoSide.on(Node.EventType.TOUCH_START, this.handleUndo, this);

        //Event item
        this.nodeModal.itemBoom.on(Node.EventType.TOUCH_END, this.onTouchEndItem, this);
        this.nodeModal.itemHammer.on(Node.EventType.TOUCH_END, this.onTouchEndItem, this);


        this.nodeModal.boardView.on(Node.EventType.TOUCH_MOVE, this.onTouchMoveBoardView, this);
        this.nodeModal.boardView.on(Node.EventType.TOUCH_END, this.onTouchEndBoardView, this);
        this.nodeModal.boardView.on(Node.EventType.TOUCH_CANCEL, this.onTouchEndBoardView, this);
    }

    /**
    * Handle on touch start empty cell
    * @param event 
    * @returns 
    */
    private onTouchStartBoard(event: EventTouch): void {
        if (!this.currentFruitCell || this.isGameOver || this.isPause) return;
        let cell = event.target;
        let currentCellComponent = this.currentFruitCell.getComponent(Cell);

        let newCoor = cell.getComponent(Cell).getCoordinates();
        let oldCoor = currentCellComponent.getCoordinates();

        let path = this.matrixManager.getPath(newCoor, oldCoor);
        let type = currentCellComponent.getTypeFruit();
        currentCellComponent.stopAnimation();
        if (path.length <= 1) {
            this.currentFruitCell = null;
            return;
        }

        //Move cell
        this.moveFruit(path, false);
        this.turn.path = path;
        this.numberAction++;

        this.matrixManager.fillCell(newCoor.row * Constants.BOARD_SIZE + newCoor.col, type);
        this.matrixManager.emptyCell(oldCoor.row * Constants.BOARD_SIZE + oldCoor.col);

        //remove index
        let index = newCoor.row * Constants.BOARD_SIZE + newCoor.col;
        this.matrixManager.fillIndex(index);
    }

    /**
     * Handle on start fruit
     * @param event 
     * @returns 
     */
    private onTouchStartCell(event: EventTouch): void {
        if (this.isGameOver || this.isPause) return;
        let cell: Node = event.target;

        cell.getComponent(Cell).playAnimation();
        if (cell !== this.currentFruitCell) {
            this.currentFruitCell?.getComponent(Cell).stopAnimation();
            this.currentFruitCell = cell;
            this.audioController.playAudio(AudioType.Click);
        } else {
            this.audioController.playAudio(AudioType.Tick);
            this.currentFruitCell = null;
        }
    }

    /**
     * 
     * @param type Type of fruit
     * @returns Node is spawned
     */
    private spawnCellFruit(type?: FruitType): Node {
        let cell = this.gameView.generateCells(this.matrixManager.arrayIndex, type);
        let coor = cell.getComponent(Cell).getCoordinates();
        let index = coor.row * Constants.BOARD_SIZE + coor.col;
        this.matrixManager.fillIndex(index);

        if (type === undefined) {
            let type = cell.getComponent(Cell).getTypeFruit();
            this.matrixManager.fillCell(index, type);
            cell.on(Node.EventType.TOUCH_START, this.onTouchStartCell, this);
        }
        return cell;
    }

    /**
     * Move current fruit 
     * @param path Path of fruit
     * @param isRestore Check action is restore
     */
    private moveFruit(path: Array<Coordinates>, isRestore: boolean): void {
        if (!this.currentFruitCell || this.isGameOver || this.isPause) return;
        this.audioController.playAudio(AudioType.Slide);
        let arrayTw: Array<Tween<Node>> = new Array();
        let i = 0;
        let time = path.length < 3 ? 0.07 : 0.03;

        //Create list tween
        while (i < path.length) {
            let temp: Coordinates = path[i];
            let newPos: Vec3 = new Vec3(temp.col * Constants.CELL_SIZE, (8 - temp.row) * Constants.CELL_SIZE);
            let tw = tween(this.currentFruitCell).to(time, { position: newPos }, { easing: 'smooth' });
            arrayTw.push(tw);
            i++;
        }

        //Set the next tween
        for (let i = 0; i < arrayTw.length - 1; i++) arrayTw[i].call(() => arrayTw[i + 1].start());

        //Play tween move
        arrayTw[arrayTw.length - 1].call(() => {
            this.moveComplete(path, isRestore);
        });
        arrayTw[0].start();
        this.isPause = true;
    }

    /**
    * Handle move cell complete
    * @param path Path of cell move
    */
    private moveComplete(path: Array<Coordinates>, isRestore: boolean): void {
        if (!this.currentFruitCell || this.isGameOver) return;
        this.currentFruitCell.getComponent(Cell).setCoordinates(path[path.length - 1]);
        this.isPause = false;

        if (!isRestore) {
            this.turn.listNewCell = [];
            this.turn.listNextCell = [];

            this.turn.cell = this.currentFruitCell;
            this.turn.coor = this.currentFruitCell.getComponent(Cell).getCoordinates();
            this.turn.prev = { ...this.turn };

            let currentType = this.currentFruitCell.getComponent(Cell).getTypeFruit();
            this.currentFruitCell = null;

            //Remove next cell if it is in path
            let nextCell = this.getNextCellByCoor(path[path.length - 1]);
            if (nextCell) {
                this.gameView.removeCells(nextCell);
                this.removeNodeFromList(this.listNextCells, nextCell);
            }

            if (!this.deleteCells(path[path.length - 1], currentType)) {
                this.listNextCells.map((cell) => {
                    let cellComponent = cell.getComponent(Cell);
                    //Set type fruit
                    cellComponent.setCellType(CellType.Fruit);

                    //Fill in data
                    let coor = cellComponent.getCoordinates();
                    let index = coor.row * Constants.BOARD_SIZE + coor.col;
                    let type = cell.getComponent(Cell).getTypeFruit();
                    this.matrixManager.fillCell(index, type);

                    cell.on(Node.EventType.TOUCH_START, this.onTouchStartCell, this);
                    this.turn.listNewCell.push(cell);
                    this.deleteCells(coor, type);
                });

                this.generateListNextCells();
            }
            this.checkGameOver();
        } else {
            this.currentFruitCell = null;
        }
    }

    //Handle action undo
    private handleUndo(): void {
        if (this.isPause || this.numberItem.get(ItemType.Undo) <= 0 || this.numberAction < 2) return;

        this.listFruitCell = this.getListFruitCell();
        if (this.listFruitCell.length <= 3) return;

        this.currentFruitCell?.getComponent(Cell).stopAnimation();
        let number = this.numberItem.get(ItemType.Undo);
        this.numberItem.set(ItemType.Undo, number - 1);
        this.gameView.setLabelItem(number - 1, ItemType.Undo);

        this.turn = { ...this.turn.prev };
        this.listNextCells = this.turn.listNewCell;
        this.restoreNewCell([...this.turn.listNewCell]);
        this.restoreNextCell([...this.turn.listNextCell]);
        this.restoreCurrentCell(this.turn.cell, this.turn.path.reverse());
    }

    private restoreNewCell(listCell: Node[]): void {
        listCell.map((cell) => {
            let component = cell.getComponent(Cell);
            component.setCellType(CellType.Hint);

            //Fill in data
            let coor = component.getCoordinates();
            this.matrixManager.emptyCell(coor.row * Constants.BOARD_SIZE + coor.col);
            this.matrixManager.fillIndex(coor.row * Constants.BOARD_SIZE + coor.col);
            cell.off(Node.EventType.TOUCH_START);
        })
    }

    private restoreNextCell(listCell: Node[]): void {
        listCell.map((cell) => {
            let component = cell.getComponent(Cell);
            component.setCellType(CellType.Hint);

            //Fill in data
            let coor = component.getCoordinates();
            let index = coor.row * Constants.BOARD_SIZE + coor.col;
            this.matrixManager.emptyCell(index);
            this.gameView.removeCells(cell);
        })
    }

    /**
     * Move current fruit to old coor
     * @param cell Current fruit
     * @param path 
     */
    private restoreCurrentCell(cell: Node, path: Coordinates[] = []): void {
        let currentCoor = cell.getComponent(Cell).getCoordinates();
        let oldCoor = path[path.length - 1];
        let type = cell.getComponent(Cell).getTypeFruit();
        this.matrixManager.fillCell(oldCoor.row * Constants.BOARD_SIZE + oldCoor.col, type);
        this.matrixManager.fillIndex(oldCoor.row * Constants.BOARD_SIZE + oldCoor.col);

        this.matrixManager.emptyCell(currentCoor.row * Constants.BOARD_SIZE + currentCoor.col);

        this.currentFruitCell = cell;
        this.moveFruit(path, true);
    }

    //Handle on select item
    private onTouchStartBoom(event: EventTouch): void {
        this.onTouchStartItem(event, ItemType.Boom, this.nodeModal.itemBoard);
    }

    private onTouchStartHammer(event: EventTouch): void {
        this.onTouchStartItem(event, ItemType.Hammer, this.nodeModal.itemHammerBoard);
    }

    private onTouchStartItem(event: EventTouch, type: ItemType, board: Node) {
        if (this.numberItem.get(type) <= 0 || this.isPause) return;
        let location = this.gameView.getLocationTouch(event, this.nodeModal.boardView);
        let coor = this.getIndexByLocation(location);
        this.boardItem = board;
        switch (type) {
            case ItemType.Boom:
                this.nodeModal.gridBoom.active = false;
                this.boardItem.setPosition(location.x - 150, location.y - 50);
                break;

            case ItemType.Hammer:
                this.boardItem.setPosition(location.x, location.y);
                this.nodeModal.gridHammer.active = false;
                break;
        }
        //this.nodeModal.itemBoard.setPosition(location);
        this.boardItem.active = true;
        this.currentItem = type;
    }

    private onTouchEndItem(): void {
        if (!this.boardItem || this.isPause) return;
        this.boardItem.active = false;
    }

    private onTouchMoveBoardView(event: EventTouch): void {
        if (!this.boardItem || this.isPause) return;
        let location = this.gameView.getLocationTouch(event, this.nodeModal.boardView);
        let coor = this.getIndexByLocation(location);

        //Get list location
        let listCoor: Array<Coordinates> = new Array();
        let temp: Coordinates = { row: 8 - coor.row, col: coor.col };
        this.boardItem.active = true;

        switch (this.currentItem) {
            case ItemType.None:
                this.boardItem.active = false;
                return;
            case ItemType.Boom:
                if (coor.row > Constants.BOARD_SIZE || coor.row < 0 ||
                    coor.col < 0 || coor.col >= Constants.BOARD_SIZE) {
                    this.nodeModal.gridBoom.active = false;
                    this.boardItem.setPosition(location.x - 150, location.y - 50);
                    break;
                } else {
                    if (coor.row <= 0) coor.row = 0;
                    if (coor.col <= 0) coor.col = 1;
                    if (coor.row >= Constants.BOARD_SIZE - 3) coor.row = Constants.BOARD_SIZE - 3;
                    if (coor.col >= Constants.BOARD_SIZE - 2) coor.col = Constants.BOARD_SIZE - 2;

                    this.nodeModal.gridBoom.active = true;

                    temp = { row: 8 - coor.row, col: coor.col };
                    while (listCoor.length < 9) {
                        listCoor.push(temp);
                        listCoor.push({ ...temp, col: temp.col + 1 });
                        listCoor.push({ ...temp, col: temp.col - 1 });
                        temp = { row: temp.row - 1, col: temp.col };
                    }
                    this.boardItem.setPosition(coor.col * Constants.CELL_SIZE - 40, coor.row * Constants.CELL_SIZE);
                    break;
                }
            case ItemType.Hammer:
                if (coor.row > Constants.BOARD_SIZE || coor.row < 0 ||
                    coor.col < 0 || coor.col >= Constants.BOARD_SIZE) {
                    this.boardItem.setPosition(location.x, location.y);
                    this.nodeModal.gridHammer.active = false;
                    break;
                } else {
                    if (coor.row <= 0) coor.row = 0;
                    if (coor.col <= 0) coor.col = 0;
                    if (coor.row >= Constants.BOARD_SIZE - 1) coor.row = Constants.BOARD_SIZE - 1;
                    if (coor.col >= Constants.BOARD_SIZE - 1) coor.col = Constants.BOARD_SIZE - 1;

                    this.nodeModal.gridHammer.active = true;

                    temp = { row: 8 - coor.row, col: coor.col };
                    listCoor.push(temp);
                    this.boardItem.setPosition(coor.col * Constants.CELL_SIZE, coor.row * Constants.CELL_SIZE);
                    break;
                }
        }
        //Get list delete
        this.listCoorOfItem = [...listCoor];
    }

    private onTouchEndBoardView(): void {
        if (this.currentItem === ItemType.None) return;
        if (this.listCoorOfItem.length === 0) {
            this.boardItem.active = false;
            this.currentItem = ItemType.None;
            return;
        }
        let numberFruit = this.getListFruitCell().length;
        let listCells = this.getListDeleteCell(this.listCoorOfItem);

        if (this.currentItem === ItemType.Hammer) this.audioController.playAudio(AudioType.Hammer)
        else this.audioController.playAudio(AudioType.Boom);

        //If board empty
        if (listCells.length >= numberFruit) {
            this.currentItem = ItemType.None;
            this.boardItem && (this.boardItem.active = false);
            this.boardItem = null;
            return;
        }

        this.boardItem.getComponent(Animation).play();
        if (this.currentItem === ItemType.Boom) this.gameView.playExplosion(this.boardItem.parent, this.boardItem.position);
        this.isPause = true;
        setTimeout(() => {
            for (let item of listCells) {
                if (item.getComponent(Cell).getCellType() === CellType.Hint) continue;
                let coor = item.getComponent(Cell).getCoordinates();
                this.matrixManager.emptyCell(coor.row * Constants.BOARD_SIZE + coor.col)
                this.gameView.removeCells(item);
            }

            let number = this.numberItem.get(this.currentItem) - 1;
            this.listCoorOfItem = [];

            this.numberItem.set(this.currentItem, number);
            this.gameView.setLabelItem(number, this.currentItem);

            this.currentItem = ItemType.None;
            this.boardItem.active = false;
            this.boardItem = null;
            this.isPause = false;
        }, 500);
    }

    private getIndexByLocation(location: Vec3): Coordinates {
        let row = Math.floor(location.y / Constants.CELL_SIZE);
        let col = Math.floor(location.x / Constants.CELL_SIZE);

        return { row: row, col: col }
    }

    private getNextCellByCoor(coor: Coordinates): Node {
        let cell = this.listNextCells.find((item) =>
            item.getComponent(Cell).getCoordinates().row === coor.row &&
            item.getComponent(Cell).getCoordinates().col === coor.col)
        return cell;
    }

    private removeNodeFromList(array: Array<Node>, node: Node): void {
        let index = array.findIndex((item) => item === node);
        array.splice(index, 1);
    }

    private generateListNextCells(): void {
        //Generate list next cells
        this.listNextCells = [];
        this.listNextTypes.map((type) => {
            let cell = this.spawnCellFruit(type);
            this.listNextCells.push(cell);
            this.turn.listNextCell.push(cell)
        });

        this.listNextTypes = this.gameView.spawnNextCells();
    }

    private deleteCells(coor: Coordinates, type: number): boolean {
        let listCoor = this.matrixManager.getListDelete(coor, type);
        let listDeleteCell = this.getListDeleteCell(listCoor);
        if (this.matrixManager.count >= 2) this.combo += this.matrixManager.count - 1;
        this.matrixManager.count = 0;

        if (listCoor.length > 0) {
            this.isPause = true;
            listCoor.map((item) => this.matrixManager.emptyCell(item.row * Constants.BOARD_SIZE + item.col));
            this.audioController.playAudio(AudioType.Award);

            listDeleteCell.map((item) => {
                item.getComponent(Cell).hiddenCell();
                setTimeout(() => {
                    this.gameView.removeCells(item);
                    this.isPause = false;
                }, 1000);
            });
            let score = listCoor.length * this.coefficient * this.combo;
            if (this.combo >= 2) {
                this.gameView.playAnimationScore(`combo ${this.combo}`, `+${score}`)
            }
            this.scoreManager.addScore(score);
            this.combo++;

            this.levelBar.setToValue(score, () => {
                this.randomGift();
            });
            // let logGame = {
            //     seconds: this.time,
            //     score: this.scoreManager.getScore(),
            //     datetime: new Date().toDateString()
            // }

            // this.gameCenter.setGameData(logGame);
            return true;
        } else {
            this.combo = 1;
        }
        return false;
    }

    private randomGift(): void {
        let array: number[] = [];

        for (let i = 0; i < 55; i++) array.push(3);
        for (let i = 0; i < 40; i++) array.push(2);
        for (let i = 0; i < 5; i++) array.push(0);

        array = array.filter((item) => item !== this.prevGift);

        let random = randomRangeInt(0, array.length);
        random = array[random];
        console.log(random);


        this.gameView.playAniamtionGift(random);
        if (random < 3) {
            let number = this.numberItem.get(random);
            this.numberItem.set(random, number + 1);
            this.gameView.setLabelItem(number + 1, random);
        } else {
            this.coefficientNode.active = true;
            this.showCountdown();
        };
    }

    private getListFruitCell(): Array<Node> {
        let listCell = this.nodeModal.boardFruit.children;
        listCell = listCell.filter((item) =>
            item.getComponent(Cell) && item.getComponent(Cell).getCellType() === CellType.Fruit);

        return listCell;
    }

    private getListDeleteCell(listCoor: Array<Coordinates>): Array<Node> {
        let listDeleteCells: Array<Node> = new Array();

        this.listFruitCell = this.nodeModal.boardFruit.children;
        this.listFruitCell.map((cell) => {
            let cellComponent = cell.getComponent(Cell);
            if (this.matrixManager.isElementOfArray(cellComponent.getCoordinates(), listCoor))
                listDeleteCells.push(cell);
        })
        return listDeleteCells;
    }

    private checkGameOver(): void {
        if (this.matrixManager.arrayIndex.length <= 0) {
            this.audioController.playAudio(AudioType.Lose);
            this.isGameOver = true;
            let count = 0;
            let isCompleted: boolean = false;

            // let interval = setInterval(() => {
            //     count++;
            //     if (count > 2 && !isCompleted) {
            //         this.gameView.showLoad();
            //         clearInterval(interval);
            //     }
            // }, 1000)

            // clearInterval(this.interval)
            // this.gameCenter.logMatch({ score: this.scoreManager.getScore() });
            // this.gameCenter.completeMatch(() => {
            //     this.lbHandle.show();
            //     isCompleted = true;
            // }, { score: this.scoreManager.getScore() });
            this.gameView.showResult();
        }
    }
}