System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Camera, Component, Label, math, Node, Sprite, SpriteFrame, Vec3, NodeModal, PoolManager, Constants, Cell, CellType, ItemType, AnimationScore, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, GameView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfNodeModal(extras) {
    _reporterNs.report("NodeModal", "../NodeModal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Utils/Constants", _context.meta, extras);
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

  function _reportPossibleCrUseOfAnimationScore(extras) {
    _reporterNs.report("AnimationScore", "../PrefabControl/AnimationScore", _context.meta, extras);
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
      Camera = _cc.Camera;
      Component = _cc.Component;
      Label = _cc.Label;
      math = _cc.math;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      NodeModal = _unresolved_2.NodeModal;
    }, function (_unresolved_3) {
      PoolManager = _unresolved_3.PoolManager;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }, function (_unresolved_5) {
      Cell = _unresolved_5.Cell;
    }, function (_unresolved_6) {
      CellType = _unresolved_6.CellType;
      ItemType = _unresolved_6.ItemType;
    }, function (_unresolved_7) {
      AnimationScore = _unresolved_7.AnimationScore;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12a1eVhRWlFsrcHDXZpDJnM", "GameView", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Camera', 'Component', 'sys', 'EventTouch', 'Label', 'math', 'Node', 'Pool', 'Sprite', 'SpriteFrame', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameView", GameView = (_dec = ccclass('GameView'), _dec2 = property({
        type: _crd && NodeModal === void 0 ? (_reportPossibleCrUseOfNodeModal({
          error: Error()
        }), NodeModal) : NodeModal,
        tooltip: 'Node modal'
      }), _dec3 = property({
        type: _crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
          error: Error()
        }), PoolManager) : PoolManager,
        tooltip: 'Pool manager'
      }), _dec4 = property({
        type: SpriteFrame,
        tooltip: 'List fruit'
      }), _dec5 = property({
        type: Camera
      }), _dec6 = property({
        type: Label,
        tooltip: 'Label number item'
      }), _dec7 = property({
        type: Label,
        tooltip: 'Label number item side'
      }), _dec8 = property({
        type: Node,
        tooltip: 'Node load'
      }), _dec9 = property(Node), _dec10 = property(Sprite), _dec11 = property(Label), _dec(_class = (_class2 = class GameView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodeModal", _descriptor, this);

          _initializerDefineProperty(this, "poolManager", _descriptor2, this);

          _initializerDefineProperty(this, "listSpriteFrameFruit", _descriptor3, this);

          _initializerDefineProperty(this, "cameraGame", _descriptor4, this);

          _initializerDefineProperty(this, "listNumberItem", _descriptor5, this);

          _initializerDefineProperty(this, "listNumberItemSide", _descriptor6, this);

          _initializerDefineProperty(this, "loadNode", _descriptor7, this);

          _initializerDefineProperty(this, "nodeAnimationGift", _descriptor8, this);

          _initializerDefineProperty(this, "spriteGift", _descriptor9, this);

          _initializerDefineProperty(this, "lbGift", _descriptor10, this);
        }

        onLoad() {
          this.renderBoard(); // this.nodeModal.sideBar.active = sys.isMobile;

          this.nodeModal.footer.active = true;
        }

        renderBoard() {
          this.nodeModal.boardBackground.removeAllChildren();

          for (var i = 0; i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE; i++) {
            var cell = this.poolManager.getCell();
            cell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
              error: Error()
            }), Cell) : Cell).setCellType((_crd && CellType === void 0 ? (_reportPossibleCrUseOfCellType({
              error: Error()
            }), CellType) : CellType).Empty);
            this.nodeModal.boardBackground.addChild(cell);
            var coor = {
              row: Math.floor(i / (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_SIZE),
              col: i % (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_SIZE
            };
            cell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
              error: Error()
            }), Cell) : Cell).setCoordinates(coor);
          }
        }

        generateCells(arrayIndex, type) {
          var cell = this.poolManager.getCell();
          var cellComponent = cell.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
            error: Error()
          }), Cell) : Cell);
          var randomIndex = math.randomRangeInt(0, arrayIndex.length);
          var random = arrayIndex[randomIndex];
          var coor = {
            row: Math.floor(random / (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_SIZE),
            col: random % (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_SIZE
          };
          cellComponent.setCoordinates(coor);

          if (type !== undefined) {
            cellComponent.setCellType((_crd && CellType === void 0 ? (_reportPossibleCrUseOfCellType({
              error: Error()
            }), CellType) : CellType).Hint);
            cellComponent.setTypeFruit(type);
            cellComponent.setSpriteFruit(this.listSpriteFrameFruit[type]);
          } else {
            cellComponent.setCellType((_crd && CellType === void 0 ? (_reportPossibleCrUseOfCellType({
              error: Error()
            }), CellType) : CellType).Fruit);
            var randomType = math.randomRangeInt(0, this.listSpriteFrameFruit.length);
            cellComponent.setTypeFruit(randomType);
            cellComponent.setSpriteFruit(this.listSpriteFrameFruit[randomType]);
          }

          this.nodeModal.boardFruit.addChild(cell);
          return cell;
        }

        spawnNextCells() {
          var listType = new Array();

          while (listType.length < 3) {
            var randomType = math.randomRangeInt(0, this.listSpriteFrameFruit.length);
            listType.push(randomType);
          }

          this.nodeModal.listNextCells.map((item, index) => {
            item.getComponent(Sprite).spriteFrame = this.listSpriteFrameFruit[listType[index]];
          });
          return listType;
        }

        removeCells(node) {
          //Reset cell
          node.getComponent(_crd && Cell === void 0 ? (_reportPossibleCrUseOfCell({
            error: Error()
          }), Cell) : Cell).resetCell();
          this.poolManager.putCell(node);
        }

        showResult() {
          this.nodeModal.gameOverBoard.active = true;
          this.nodeModal.gameOverBoard.getComponent(Animation).play();
        }
        /**
        * @param event Event touch
        * @param node Node to inverse
        * @returns Local position of point in container node
        */


        getLocationTouch(event, node) {
          var location = this.cameraGame.screenToWorld(new Vec3(event.getLocation().x, event.getLocation().y, 0));
          var v3 = new Vec3();
          node.inverseTransformPoint(v3, new Vec3(location.x, location.y));
          return v3;
        }

        setLabelItem(value, index) {
          this.listNumberItem[index] && (this.listNumberItem[index].string = "" + value);
          this.listNumberItemSide[index] && (this.listNumberItemSide[index].string = "" + value);
        }

        showLoad() {
          this.loadNode.active = true;
        }

        hiddenLoad() {
          this.loadNode.active = false;
        }

        playAniamtionGift(gift) {
          switch (gift) {
            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).Boom:
              this.spriteGift.spriteFrame = this.nodeModal.sprFrameBoom;
              this.lbGift.string = '+ 1';
              break;

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).Hammer:
              this.spriteGift.spriteFrame = this.nodeModal.sprFrameHammer;
              this.lbGift.string = '+ 1';
              break;

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).Undo:
              this.spriteGift.spriteFrame = this.nodeModal.sprFrameUndo;
              this.lbGift.string = '+ 1';
              break;

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).None:
              this.spriteGift.spriteFrame = this.nodeModal.sprDouble;
              this.lbGift.string = '';
              break;
          }

          ;
          this.nodeAnimationGift.active = true;
          var anim = this.nodeAnimationGift.getComponent(Animation);
          anim.on(Animation.EventType.FINISHED, () => anim.node.active = false);
          anim.play();
        }

        playExplosion(parent, position) {
          var explo = this.poolManager.getExplosion();
          setTimeout(() => {
            explo.setPosition(position);
            parent.addChild(explo);
            var anim = explo.getComponent(Animation);
            anim.on(Animation.EventType.FINISHED, () => this.poolManager.putExplosion(anim.node));
            anim.play();
          }, 500);
        }

        playAnimationScore(textCombo, textScore) {
          var anim = this.poolManager.getAnimationScore();
          anim.getComponent(_crd && AnimationScore === void 0 ? (_reportPossibleCrUseOfAnimationScore({
            error: Error()
          }), AnimationScore) : AnimationScore).setText(textScore, textCombo);
          anim.parent = this.nodeModal.boardFruit.parent.parent;
          anim.getComponent(_crd && AnimationScore === void 0 ? (_reportPossibleCrUseOfAnimationScore({
            error: Error()
          }), AnimationScore) : AnimationScore).playAnimation();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeModal", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "poolManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listSpriteFrameFruit", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cameraGame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "listNumberItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "listNumberItemSide", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "loadNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodeAnimationGift", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spriteGift", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbGift", [_dec11], {
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
//# sourceMappingURL=e0c3c91e2d08b048d05805ed53959fa58ac6517c.js.map