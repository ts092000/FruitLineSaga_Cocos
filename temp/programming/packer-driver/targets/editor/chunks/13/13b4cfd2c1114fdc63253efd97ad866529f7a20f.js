System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioType, _decorator, Animation, Button, Component, director, Label, Node, ProgressBar, randomRangeInt, tween, Vec3, MatrixManager, GameView, NodeModal, Cell, CellType, ItemType, Constants, ScoreManager, AudioController, GameCenterController, LevelBar, LeaderboardHandle, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioType(extras) {
    _reporterNs.report("AudioType", "./../Utils/DataTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurn(extras) {
    _reporterNs.report("Turn", "./../Utils/DataTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatrixManager(extras) {
    _reporterNs.report("MatrixManager", "./MatrixManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameView(extras) {
    _reporterNs.report("GameView", "./GameView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeModal(extras) {
    _reporterNs.report("NodeModal", "../NodeModal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCell(extras) {
    _reporterNs.report("Cell", "../PrefabControl/Cell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCellType(extras) {
    _reporterNs.report("CellType", "../Utils/DataTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoordinates(extras) {
    _reporterNs.report("Coordinates", "../Utils/DataTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFruitType(extras) {
    _reporterNs.report("FruitType", "../Utils/DataTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../Utils/DataTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Utils/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScoreManager(extras) {
    _reporterNs.report("ScoreManager", "../ScoreManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioController(extras) {
    _reporterNs.report("AudioController", "../AudioController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCenterController(extras) {
    _reporterNs.report("GameCenterController", "../GameCenter/GameCenterController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelBar(extras) {
    _reporterNs.report("LevelBar", "../PrefabControl/LevelBar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeaderboardHandle(extras) {
    _reporterNs.report("LeaderboardHandle", "../../Leaderboard/Script/LeaderboardHandle", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Button = _cc.Button;
      Component = _cc.Component;
      director = _cc.director;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      randomRangeInt = _cc.randomRangeInt;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      AudioType = _unresolved_2.AudioType;
    }, function (_unresolved_3) {
      MatrixManager = _unresolved_3.MatrixManager;
    }, function (_unresolved_4) {
      GameView = _unresolved_4.GameView;
    }, function (_unresolved_5) {
      NodeModal = _unresolved_5.NodeModal;
    }, function (_unresolved_6) {
      Cell = _unresolved_6.Cell;
    }, function (_unresolved_7) {
      CellType = _unresolved_7.CellType;
      ItemType = _unresolved_7.ItemType;
    }, function (_unresolved_8) {
      Constants = _unresolved_8.Constants;
    }, function (_unresolved_9) {
      ScoreManager = _unresolved_9.ScoreManager;
    }, function (_unresolved_10) {
      AudioController = _unresolved_10.AudioController;
    }, function (_unresolved_11) {
      GameCenterController = _unresolved_11.GameCenterController;
    }, function (_unresolved_12) {
      LevelBar = _unresolved_12.LevelBar;
    }, function (_unresolved_13) {
      LeaderboardHandle = _unresolved_13.LeaderboardHandle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37702BxTWtL6prdeQ8AlteY", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Button', 'Component', 'director', 'EventTouch', 'Label', 'Node', 'ProgressBar', 'randomRangeInt', 'Tween', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property({
        type: _crd && MatrixManager === void 0 ? (_reportPossibleCrUseOfMatrixManager({
          error: Error()
        }), MatrixManager) : MatrixManager,
        tooltip: 'Matrix manager'
      }), _dec3 = property({
        type: _crd && GameView === void 0 ? (_reportPossibleCrUseOfGameView({
          error: Error()
        }), GameView) : GameView,
        tooltip: 'Game view node'
      }), _dec4 = property({
        type: _crd && NodeModal === void 0 ? (_reportPossibleCrUseOfNodeModal({
          error: Error()
        }), NodeModal) : NodeModal,
        tooltip: 'Node modal'
      }), _dec5 = property({
        type: _crd && ScoreManager === void 0 ? (_reportPossibleCrUseOfScoreManager({
          error: Error()
        }), ScoreManager) : ScoreManager,
        tooltip: 'Score manager'
      }), _dec6 = property({
        type: _crd && AudioController === void 0 ? (_reportPossibleCrUseOfAudioController({
          error: Error()
        }), AudioController) : AudioController
      }), _dec7 = property({
        type: _crd && GameCenterController === void 0 ? (_reportPossibleCrUseOfGameCenterController({
          error: Error()
        }), GameCenterController) : GameCenterController,
        tooltip: 'Game center controller'
      }), _dec8 = property(_crd && LevelBar === void 0 ? (_reportPossibleCrUseOfLevelBar({
        error: Error()
      }), LevelBar) : LevelBar), _dec9 = property(ProgressBar), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(_crd && LeaderboardHandle === void 0 ? (_reportPossibleCrUseOfLeaderboardHandle({
        error: Error()
      }), LeaderboardHandle) : LeaderboardHandle), _dec(_class = (_class2 = class GameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "matrixManager", _descriptor, this);

          _initializerDefineProperty(this, "gameView", _descriptor2, this);

          _initializerDefineProperty(this, "nodeModal", _descriptor3, this);

          _initializerDefineProperty(this, "scoreManager", _descriptor4, this);

          _initializerDefineProperty(this, "audioController", _descriptor5, this);

          _initializerDefineProperty(this, "gameCenter", _descriptor6, this);

          _initializerDefineProperty(this, "levelBar", _descriptor7, this);

          _initializerDefineProperty(this, "progressTime", _descriptor8, this);

          _initializerDefineProperty(this, "lbCountDown", _descriptor9, this);

          _initializerDefineProperty(this, "coefficientNode", _descriptor10, this);

          _initializerDefineProperty(this, "lbHandle", _descriptor11, this);

          this.listBoardCell = new Array();
          this.listFruitCell = new Array();
          this.listNextTypes = new Array();
          this.listNextCells = new Array();
          this.listCoorOfItem = new Array();
          this.currentFruitCell = null;
          this.boardItem = void 0;
          this.isGameOver = false;
          this.isPause = false;
          this.currentItem = (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).None;
          this.turn = {
            cell: null,
            coor: null,
            listNewCell: [],
            listNextCell: [],
            prev: null,
            path: []
          };
          this.numberItem = new Map();
          this.numberAction = 0;
          this.interval = void 0;
          this.time = 0;
          this.intervalProcess = void 0;
          this.countdown = 1500;
          this.coefficient = 1;
          this.combo = 1;
          this.prevGift = -1;
        }

        start() {
          this.lbCountDown.node.parent.active = false;
          this.coefficientNode.active = false;
          this.levelBar.setCurrentLabel(1);
          this.levelBar.setValueBar(0);
          this.gameCenter.startMatch(() => {
            this.interval = setInterval(() => {
              if (!this.gameCenter) clearInterval(this.interval);
              this.time++;
              this.gameCenter && this.gameCenter.logMatch({
                score: this.scoreManager.getScore()
              });
            }, 1000);
            this.gameView.hiddenLoad();
            this.initGame();
          });
        }

        showCountdown() {
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
            }, 10);
          }, 1110);
        }

        initGame() {
          //Set info turn
          this.turn.prev = { ...this.turn
          };
          this.numberItem.set((_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).Boom, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DEFAULT_NUMBER_ITEM);
          this.numberItem.set((_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).Hammer, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DEFAULT_NUMBER_ITEM);
          this.numberItem.set((_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).Undo, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DEFAULT_NUMBER_ITEM); //Init fruit cell

          this.spawnCellFruit();
          this.spawnCellFruit();
          this.spawnCellFruit();
          this.spawnCellFruit(); //Spawn next cells

          this.listNextTypes = this.gameView.spawnNextCells(); //Get list cell

          this.listBoardCell = this.nodeModal.boardBackground.children;
          this.listFruitCell = this.nodeModal.boardFruit.children; //Add events

          this.listBoardCell.map(cell => cell.on(Node.EventType.TOUCH_START, this.onTouchStartBoard, this));
          this.listFruitCell.map(cell => cell.on(Node.EventType.TOUCH_START, this.onTouchStartCell, this));
          this.addEventButtons();
        }

        addEventButtons() {
          this.nodeModal.buttonResume.node.on(Button.EventType.CLICK, () => {
            this.isPause = false;
            this.nodeModal.settingBoard.active = false;
          });
          this.nodeModal.buttonSetting.node.on(Button.EventType.CLICK, () => {
            this.isPause = true;
            this.nodeModal.settingBoard.active = true;
          });
          this.nodeModal.buttonHome.map(button => {
            button.node.on(Button.EventType.CLICK, () => director.loadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SCENE_NAME.Begin));
          });
          this.nodeModal.listButtonRestart.map(button => {
            button.node.on(Button.EventType.CLICK, () => {
              director.loadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SCENE_NAME.Game);
            });
          }); //Event item

          this.nodeModal.itemBoom.on(Node.EventType.TOUCH_START, this.onTouchStartBoom, this);
          this.nodeModal.itemHammer.on(Node.EventType.TOUCH_START, this.onTouchStartHammer, this);
          this.nodeModal.itemUndo.on(Node.EventType.TOUCH_START, this.handleUndo, this); //Event item

          this.nodeModal.itemBoom.on(Node.EventType.TOUCH_END, this.onTouchEndItem, this);
          this.nodeModal.itemHammer.on(Node.EventType.TOUCH_END, this.onTouchEndItem, this); //Event item

          this.nodeModal.buttonBoomSide.on(Node.EventType.TOUCH_START, this.onTouchStartBoom, this);
          this.nodeModal.buttonHammerSide.on(Node.EventType.TOUCH_START, this.onTouchStartHammer, this);
          this.nodeModal.buttonUndoSide.on(Node.EventType.TOUCH_START, this.handleUndo, this); //Event item

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


        onTouchStartBoard(event) {
          if (!this.currentFruitCell || this.isGameOver || this.isPause) return;
          let cell = event.target;
          let currentCellComponent = this.currentFruitCell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
            error: Error()
          }), Cell) : Cell);
          let newCoor = cell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
            error: Error()
          }), Cell) : Cell).getCoordinates();
          let oldCoor = currentCellComponent.getCoordinates();
          let path = this.matrixManager.getPath(newCoor, oldCoor);
          let type = currentCellComponent.getTypeFruit();
          currentCellComponent.stopAnimation();

          if (path.length <= 1) {
            this.currentFruitCell = null;
            return;
          } //Move cell


          this.moveFruit(path, false);
          this.turn.path = path;
          this.numberAction++;
          this.matrixManager.fillCell(newCoor.row * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE + newCoor.col, type);
          this.matrixManager.emptyCell(oldCoor.row * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE + oldCoor.col); //remove index

          let index = newCoor.row * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE + newCoor.col;
          this.matrixManager.fillIndex(index);
        }
        /**
         * Handle on start fruit
         * @param event 
         * @returns 
         */


        onTouchStartCell(event) {
          if (this.isGameOver || this.isPause) return;
          let cell = event.target;
          cell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
            error: Error()
          }), Cell) : Cell).playAnimation();

          if (cell !== this.currentFruitCell) {
            var _this$currentFruitCel;

            (_this$currentFruitCel = this.currentFruitCell) == null ? void 0 : _this$currentFruitCel.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
              error: Error()
            }), Cell) : Cell).stopAnimation();
            this.currentFruitCell = cell;
            this.audioController.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
              error: Error()
            }), AudioType) : AudioType).Click);
          } else {
            this.audioController.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
              error: Error()
            }), AudioType) : AudioType).Tick);
            this.currentFruitCell = null;
          }
        }
        /**
         * 
         * @param type Type of fruit
         * @returns Node is spawned
         */


        spawnCellFruit(type) {
          let cell = this.gameView.generateCells(this.matrixManager.arrayIndex, type);
          let coor = cell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
            error: Error()
          }), Cell) : Cell).getCoordinates();
          let index = coor.row * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE + coor.col;
          this.matrixManager.fillIndex(index);

          if (type === undefined) {
            let type = cell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
              error: Error()
            }), Cell) : Cell).getTypeFruit();
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


        moveFruit(path, isRestore) {
          if (!this.currentFruitCell || this.isGameOver || this.isPause) return;
          this.audioController.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
            error: Error()
          }), AudioType) : AudioType).Slide);
          let arrayTw = new Array();
          let i = 0;
          let time = path.length < 3 ? 0.07 : 0.03; //Create list tween

          while (i < path.length) {
            let temp = path[i];
            let newPos = new Vec3(temp.col * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CELL_SIZE, (8 - temp.row) * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CELL_SIZE);
            let tw = tween(this.currentFruitCell).to(time, {
              position: newPos
            }, {
              easing: 'smooth'
            });
            arrayTw.push(tw);
            i++;
          } //Set the next tween


          for (let i = 0; i < arrayTw.length - 1; i++) arrayTw[i].call(() => arrayTw[i + 1].start()); //Play tween move


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


        moveComplete(path, isRestore) {
          if (!this.currentFruitCell || this.isGameOver) return;
          this.currentFruitCell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
            error: Error()
          }), Cell) : Cell).setCoordinates(path[path.length - 1]);
          this.isPause = false;

          if (!isRestore) {
            this.turn.listNewCell = [];
            this.turn.listNextCell = [];
            this.turn.cell = this.currentFruitCell;
            this.turn.coor = this.currentFruitCell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
              error: Error()
            }), Cell) : Cell).getCoordinates();
            this.turn.prev = { ...this.turn
            };
            let currentType = this.currentFruitCell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
              error: Error()
            }), Cell) : Cell).getTypeFruit();
            this.currentFruitCell = null; //Remove next cell if it is in path

            let nextCell = this.getNextCellByCoor(path[path.length - 1]);

            if (nextCell) {
              this.gameView.removeCells(nextCell);
              this.removeNodeFromList(this.listNextCells, nextCell);
            }

            if (!this.deleteCells(path[path.length - 1], currentType)) {
              this.listNextCells.map(cell => {
                let cellComponent = cell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
                  error: Error()
                }), Cell) : Cell); //Set type fruit

                cellComponent.setCellType((_crd && CellType === void 0 ? (_reportPossibleCrUseOfCellType({
                  error: Error()
                }), CellType) : CellType).Fruit); //Fill in data

                let coor = cellComponent.getCoordinates();
                let index = coor.row * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BOARD_SIZE + coor.col;
                let type = cell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
                  error: Error()
                }), Cell) : Cell).getTypeFruit();
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
        } //Handle action undo


        handleUndo() {
          var _this$currentFruitCel2;

          if (this.isPause || this.numberItem.get((_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).Undo) <= 0 || this.numberAction < 2) return;
          this.listFruitCell = this.getListFruitCell();
          if (this.listFruitCell.length <= 3) return;
          (_this$currentFruitCel2 = this.currentFruitCell) == null ? void 0 : _this$currentFruitCel2.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
            error: Error()
          }), Cell) : Cell).stopAnimation();
          let number = this.numberItem.get((_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).Undo);
          this.numberItem.set((_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).Undo, number - 1);
          this.gameView.setLabelItem(number - 1, (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).Undo);
          this.turn = { ...this.turn.prev
          };
          this.listNextCells = this.turn.listNewCell;
          this.restoreNewCell([...this.turn.listNewCell]);
          this.restoreNextCell([...this.turn.listNextCell]);
          this.restoreCurrentCell(this.turn.cell, this.turn.path.reverse());
        }

        restoreNewCell(listCell) {
          listCell.map(cell => {
            let component = cell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
              error: Error()
            }), Cell) : Cell);
            component.setCellType((_crd && CellType === void 0 ? (_reportPossibleCrUseOfCellType({
              error: Error()
            }), CellType) : CellType).Hint); //Fill in data

            let coor = component.getCoordinates();
            this.matrixManager.emptyCell(coor.row * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_SIZE + coor.col);
            this.matrixManager.fillIndex(coor.row * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_SIZE + coor.col);
            cell.off(Node.EventType.TOUCH_START);
          });
        }

        restoreNextCell(listCell) {
          listCell.map(cell => {
            let component = cell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
              error: Error()
            }), Cell) : Cell);
            component.setCellType((_crd && CellType === void 0 ? (_reportPossibleCrUseOfCellType({
              error: Error()
            }), CellType) : CellType).Hint); //Fill in data

            let coor = component.getCoordinates();
            let index = coor.row * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_SIZE + coor.col;
            this.matrixManager.emptyCell(index);
            this.gameView.removeCells(cell);
          });
        }
        /**
         * Move current fruit to old coor
         * @param cell Current fruit
         * @param path 
         */


        restoreCurrentCell(cell, path = []) {
          let currentCoor = cell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
            error: Error()
          }), Cell) : Cell).getCoordinates();
          let oldCoor = path[path.length - 1];
          let type = cell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
            error: Error()
          }), Cell) : Cell).getTypeFruit();
          this.matrixManager.fillCell(oldCoor.row * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE + oldCoor.col, type);
          this.matrixManager.fillIndex(oldCoor.row * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE + oldCoor.col);
          this.matrixManager.emptyCell(currentCoor.row * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE + currentCoor.col);
          this.currentFruitCell = cell;
          this.moveFruit(path, true);
        } //Handle on select item


        onTouchStartBoom(event) {
          this.onTouchStartItem(event, (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).Boom, this.nodeModal.itemBoard);
        }

        onTouchStartHammer(event) {
          this.onTouchStartItem(event, (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).Hammer, this.nodeModal.itemHammerBoard);
        }

        onTouchStartItem(event, type, board) {
          if (this.numberItem.get(type) <= 0 || this.isPause) return;
          let location = this.gameView.getLocationTouch(event, this.nodeModal.boardView);
          let coor = this.getIndexByLocation(location);
          this.boardItem = board;

          switch (type) {
            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).Boom:
              this.nodeModal.gridBoom.active = false;
              this.boardItem.setPosition(location.x - 150, location.y - 50);
              break;

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).Hammer:
              this.boardItem.setPosition(location.x, location.y);
              this.nodeModal.gridHammer.active = false;
              break;
          } //this.nodeModal.itemBoard.setPosition(location);


          this.boardItem.active = true;
          this.currentItem = type;
        }

        onTouchEndItem() {
          if (!this.boardItem || this.isPause) return;
          this.boardItem.active = false;
        }

        onTouchMoveBoardView(event) {
          if (!this.boardItem || this.isPause) return;
          let location = this.gameView.getLocationTouch(event, this.nodeModal.boardView);
          let coor = this.getIndexByLocation(location); //Get list location

          let listCoor = new Array();
          let temp = {
            row: 8 - coor.row,
            col: coor.col
          };
          this.boardItem.active = true;

          switch (this.currentItem) {
            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).None:
              this.boardItem.active = false;
              return;

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).Boom:
              if (coor.row > (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_SIZE || coor.row < 0 || coor.col < 0 || coor.col >= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_SIZE) {
                this.nodeModal.gridBoom.active = false;
                this.boardItem.setPosition(location.x - 150, location.y - 50);
                break;
              } else {
                if (coor.row <= 0) coor.row = 0;
                if (coor.col <= 0) coor.col = 1;
                if (coor.row >= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BOARD_SIZE - 3) coor.row = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BOARD_SIZE - 3;
                if (coor.col >= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BOARD_SIZE - 2) coor.col = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BOARD_SIZE - 2;
                this.nodeModal.gridBoom.active = true;
                temp = {
                  row: 8 - coor.row,
                  col: coor.col
                };

                while (listCoor.length < 9) {
                  listCoor.push(temp);
                  listCoor.push({ ...temp,
                    col: temp.col + 1
                  });
                  listCoor.push({ ...temp,
                    col: temp.col - 1
                  });
                  temp = {
                    row: temp.row - 1,
                    col: temp.col
                  };
                }

                this.boardItem.setPosition(coor.col * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).CELL_SIZE - 40, coor.row * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).CELL_SIZE);
                break;
              }

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).Hammer:
              if (coor.row > (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_SIZE || coor.row < 0 || coor.col < 0 || coor.col >= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_SIZE) {
                this.boardItem.setPosition(location.x, location.y);
                this.nodeModal.gridHammer.active = false;
                break;
              } else {
                if (coor.row <= 0) coor.row = 0;
                if (coor.col <= 0) coor.col = 0;
                if (coor.row >= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BOARD_SIZE - 1) coor.row = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BOARD_SIZE - 1;
                if (coor.col >= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BOARD_SIZE - 1) coor.col = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BOARD_SIZE - 1;
                this.nodeModal.gridHammer.active = true;
                temp = {
                  row: 8 - coor.row,
                  col: coor.col
                };
                listCoor.push(temp);
                this.boardItem.setPosition(coor.col * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).CELL_SIZE, coor.row * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).CELL_SIZE);
                break;
              }

          } //Get list delete


          this.listCoorOfItem = [...listCoor];
        }

        onTouchEndBoardView() {
          if (this.currentItem === (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).None) return;

          if (this.listCoorOfItem.length === 0) {
            this.boardItem.active = false;
            this.currentItem = (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).None;
            return;
          }

          let numberFruit = this.getListFruitCell().length;
          let listCells = this.getListDeleteCell(this.listCoorOfItem);
          if (this.currentItem === (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).Hammer) this.audioController.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
            error: Error()
          }), AudioType) : AudioType).Hammer);else this.audioController.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
            error: Error()
          }), AudioType) : AudioType).Boom); //If board empty

          if (listCells.length >= numberFruit) {
            this.currentItem = (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).None;
            this.boardItem && (this.boardItem.active = false);
            this.boardItem = null;
            return;
          }

          this.boardItem.getComponent(Animation).play();
          if (this.currentItem === (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).Boom) this.gameView.playExplosion(this.boardItem.parent, this.boardItem.position);
          this.isPause = true;
          setTimeout(() => {
            for (let item of listCells) {
              if (item.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
                error: Error()
              }), Cell) : Cell).getCellType() === (_crd && CellType === void 0 ? (_reportPossibleCrUseOfCellType({
                error: Error()
              }), CellType) : CellType).Hint) continue;
              let coor = item.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
                error: Error()
              }), Cell) : Cell).getCoordinates();
              this.matrixManager.emptyCell(coor.row * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_SIZE + coor.col);
              this.gameView.removeCells(item);
            }

            let number = this.numberItem.get(this.currentItem) - 1;
            this.listCoorOfItem = [];
            this.numberItem.set(this.currentItem, number);
            this.gameView.setLabelItem(number, this.currentItem);
            this.currentItem = (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).None;
            this.boardItem.active = false;
            this.boardItem = null;
            this.isPause = false;
          }, 500);
        }

        getIndexByLocation(location) {
          let row = Math.floor(location.y / (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CELL_SIZE);
          let col = Math.floor(location.x / (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CELL_SIZE);
          return {
            row: row,
            col: col
          };
        }

        getNextCellByCoor(coor) {
          let cell = this.listNextCells.find(item => item.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
            error: Error()
          }), Cell) : Cell).getCoordinates().row === coor.row && item.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
            error: Error()
          }), Cell) : Cell).getCoordinates().col === coor.col);
          return cell;
        }

        removeNodeFromList(array, node) {
          let index = array.findIndex(item => item === node);
          array.splice(index, 1);
        }

        generateListNextCells() {
          //Generate list next cells
          this.listNextCells = [];
          this.listNextTypes.map(type => {
            let cell = this.spawnCellFruit(type);
            this.listNextCells.push(cell);
            this.turn.listNextCell.push(cell);
          });
          this.listNextTypes = this.gameView.spawnNextCells();
        }

        deleteCells(coor, type) {
          let listCoor = this.matrixManager.getListDelete(coor, type);
          let listDeleteCell = this.getListDeleteCell(listCoor);
          if (this.matrixManager.count >= 2) this.combo += this.matrixManager.count - 1;
          this.matrixManager.count = 0;

          if (listCoor.length > 0) {
            this.isPause = true;
            listCoor.map(item => this.matrixManager.emptyCell(item.row * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_SIZE + item.col));
            this.audioController.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
              error: Error()
            }), AudioType) : AudioType).Award);
            listDeleteCell.map(item => {
              item.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
                error: Error()
              }), Cell) : Cell).hiddenCell();
              setTimeout(() => {
                this.gameView.removeCells(item);
                this.isPause = false;
              }, 1000);
            });
            let score = listCoor.length * this.coefficient * this.combo;

            if (this.combo >= 2) {
              this.gameView.playAnimationScore(`combo ${this.combo}`, `+${score}`);
            }

            this.scoreManager.addScore(score);
            this.combo++;
            this.levelBar.setToValue(score, () => {
              this.randomGift();
            });
            let logGame = {
              seconds: this.time,
              score: this.scoreManager.getScore(),
              datetime: new Date().toDateString()
            };
            this.gameCenter.setGameData(logGame);
            return true;
          } else {
            this.combo = 1;
          }

          return false;
        }

        randomGift() {
          let array = [];

          for (let i = 0; i < 55; i++) array.push(3);

          for (let i = 0; i < 40; i++) array.push(2);

          for (let i = 0; i < 5; i++) array.push(0);

          array = array.filter(item => item !== this.prevGift);
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
          }

          ;
        }

        getListFruitCell() {
          let listCell = this.nodeModal.boardFruit.children;
          listCell = listCell.filter(item => item.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
            error: Error()
          }), Cell) : Cell) && item.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
            error: Error()
          }), Cell) : Cell).getCellType() === (_crd && CellType === void 0 ? (_reportPossibleCrUseOfCellType({
            error: Error()
          }), CellType) : CellType).Fruit);
          return listCell;
        }

        getListDeleteCell(listCoor) {
          let listDeleteCells = new Array();
          this.listFruitCell = this.nodeModal.boardFruit.children;
          this.listFruitCell.map(cell => {
            let cellComponent = cell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
              error: Error()
            }), Cell) : Cell);
            if (this.matrixManager.isElementOfArray(cellComponent.getCoordinates(), listCoor)) listDeleteCells.push(cell);
          });
          return listDeleteCells;
        }

        checkGameOver() {
          if (this.matrixManager.arrayIndex.length <= 0) {
            this.audioController.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
              error: Error()
            }), AudioType) : AudioType).Lose);
            this.isGameOver = true;
            let count = 0;
            let isCompleted = false;
            let interval = setInterval(() => {
              count++;

              if (count > 2 && !isCompleted) {
                this.gameView.showLoad();
                clearInterval(interval);
              }
            }, 1000);
            clearInterval(this.interval);
            this.gameCenter.logMatch({
              score: this.scoreManager.getScore()
            });
            this.gameCenter.completeMatch(() => {
              this.lbHandle.show();
              isCompleted = true;
              this.gameView.showResult();
            }, {
              score: this.scoreManager.getScore()
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "matrixManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeModal", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scoreManager", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "audioController", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gameCenter", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "levelBar", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "progressTime", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbCountDown", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "coefficientNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lbHandle", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=13b4cfd2c1114fdc63253efd97ad866529f7a20f.js.map