System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Component, Node, Sprite, tween, Vec3, CellType, FruitType, Constants, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Cell;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCellType(extras) {
    _reporterNs.report("CellType", "../Utils/DataTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoordinates(extras) {
    _reporterNs.report("Coordinates", "../Utils/DataTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFruitType(extras) {
    _reporterNs.report("FruitType", "../Utils/DataTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Utils/Constants", _context.meta, extras);
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
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      CellType = _unresolved_2.CellType;
      FruitType = _unresolved_2.FruitType;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5f02o0MQ9F+ZzXI9I7BgjI", "Cell", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Cell", Cell = (_dec = ccclass('Cell'), _dec2 = property({
        type: Sprite,
        tooltip: 'Sprite fruil'
      }), _dec3 = property({
        type: Animation,
        tooltip: 'Animation cell'
      }), _dec4 = property({
        type: Node,
        tooltip: 'Swirl node'
      }), _dec(_class = (_class2 = class Cell extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spriteFruit", _descriptor, this);

          _initializerDefineProperty(this, "animation", _descriptor2, this);

          _initializerDefineProperty(this, "swirlNode", _descriptor3, this);

          this.coordinates = {
            row: 0,
            col: 0
          };
          this.isSelecting = false;
          this.type = (_crd && FruitType === void 0 ? (_reportPossibleCrUseOfFruitType({
            error: Error()
          }), FruitType) : FruitType).Apple;
          this.cellType = (_crd && CellType === void 0 ? (_reportPossibleCrUseOfCellType({
            error: Error()
          }), CellType) : CellType).Empty;
        }

        start() {
          this.spriteFruit.node.setPosition(20, 20);
        }

        setCellType(type) {
          this.cellType = type;

          if (type === (_crd && CellType === void 0 ? (_reportPossibleCrUseOfCellType({
            error: Error()
          }), CellType) : CellType).Hint) {
            tween(this.spriteFruit.node).to(0.1, {
              scale: new Vec3(0.1, 0.1, 1)
            }).start();
          }

          if (type === (_crd && CellType === void 0 ? (_reportPossibleCrUseOfCellType({
            error: Error()
          }), CellType) : CellType).Fruit) {
            tween(this.spriteFruit.node).to(0.1, {
              scale: new Vec3(0.18, 0.18, 1)
            }).start();
          }

          this.spriteFruit.node.active = !(this.cellType === (_crd && CellType === void 0 ? (_reportPossibleCrUseOfCellType({
            error: Error()
          }), CellType) : CellType).Empty);
          this.node.getComponent(Sprite).enabled = this.cellType === (_crd && CellType === void 0 ? (_reportPossibleCrUseOfCellType({
            error: Error()
          }), CellType) : CellType).Empty;
        }

        playAnimation() {
          this.onTouchStart();
        }

        setCoordinates(coordinates) {
          this.coordinates = { ...coordinates
          };
          this.node.setPosition(coordinates.col * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CELL_SIZE, (8 - coordinates.row) * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CELL_SIZE);
        }

        getCoordinates() {
          return this.coordinates;
        }

        onTouchStart() {
          this.isSelecting = !this.isSelecting;
          if (this.isSelecting) this.animation.play();else this.stopAnimation();
        }

        stopAnimation() {
          this.isSelecting = false;
          this.animation.stop();
          this.spriteFruit.node.setScale(0.18, 0.18);
        }

        setSpriteFruit(spriteFrame) {
          this.spriteFruit.spriteFrame = spriteFrame;
        }

        setTypeFruit(type) {
          this.type = type;
        }

        getTypeFruit() {
          return this.type;
        }

        hiddenCell() {
          this.node.off(Node.EventType.TOUCH_START);
          this.swirlNode.active = true;
          this.animation.play((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ANIMATION_NAME.FruitHidden);
        }

        resetCell() {
          this.coordinates = {
            row: 0,
            col: 0
          };
          this.isSelecting = false;
          this.setTypeFruit((_crd && FruitType === void 0 ? (_reportPossibleCrUseOfFruitType({
            error: Error()
          }), FruitType) : FruitType).Apple);
          this.setCellType((_crd && CellType === void 0 ? (_reportPossibleCrUseOfCellType({
            error: Error()
          }), CellType) : CellType).Empty);
          this.animation.stop();
          this.node.off(Node.EventType.TOUCH_START);
        }

        getCellType() {
          return this.cellType;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteFruit", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "swirlNode", [_dec4], {
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
//# sourceMappingURL=46b60fe2fb535bb6d9d491af25fde61ce1e27b2f.js.map