System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Node, Sprite, SpriteFrame, sys, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _crd, ccclass, property, NodeModal;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b59bsVjEhMPZw2FpOJOSeM", "NodeModal", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NodeModal", NodeModal = (_dec = ccclass('NodeModal'), _dec2 = property({
        type: Node,
        tooltip: 'Board background'
      }), _dec3 = property({
        type: Node,
        tooltip: 'Board fruit'
      }), _dec4 = property({
        type: Node,
        tooltip: 'List next turn'
      }), _dec5 = property({
        type: Node,
        tooltip: 'Game over board'
      }), _dec6 = property({
        type: Button,
        tooltip: 'Button restart'
      }), _dec7 = property({
        type: Node,
        tooltip: 'Footer view'
      }), _dec8 = property({
        type: Node,
        tooltip: 'Item boom'
      }), _dec9 = property({
        type: Node,
        tooltip: 'Item board'
      }), _dec10 = property({
        type: Node,
        tooltip: 'Board item hammer'
      }), _dec11 = property({
        type: Node,
        tooltip: 'Item hammer'
      }), _dec12 = property({
        type: Node,
        tooltip: 'Item undo'
      }), _dec13 = property({
        type: Node,
        tooltip: 'Setting board'
      }), _dec14 = property({
        type: Button,
        tooltip: 'Setting button'
      }), _dec15 = property({
        type: Button,
        tooltip: 'Button resume'
      }), _dec16 = property({
        type: Button,
        tooltip: 'List button home'
      }), _dec17 = property({
        type: Node,
        tooltip: 'Button undo side'
      }), _dec18 = property({
        type: Node,
        tooltip: 'Button boom side'
      }), _dec19 = property({
        type: Node,
        tooltip: 'Button hammer side'
      }), _dec20 = property({
        type: Node
      }), _dec21 = property({
        type: Node
      }), _dec22 = property({
        type: Node
      }), _dec23 = property({
        type: Node
      }), _dec24 = property(Sprite), _dec25 = property(SpriteFrame), _dec26 = property(SpriteFrame), _dec27 = property(SpriteFrame), _dec28 = property(SpriteFrame), _dec29 = property(SpriteFrame), _dec30 = property(SpriteFrame), _dec(_class = (_class2 = class NodeModal extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "boardBackground", _descriptor, this);

          _initializerDefineProperty(this, "boardFruit", _descriptor2, this);

          _initializerDefineProperty(this, "listNextCells", _descriptor3, this);

          _initializerDefineProperty(this, "gameOverBoard", _descriptor4, this);

          _initializerDefineProperty(this, "listButtonRestart", _descriptor5, this);

          _initializerDefineProperty(this, "boardView", _descriptor6, this);

          _initializerDefineProperty(this, "itemBoom", _descriptor7, this);

          _initializerDefineProperty(this, "itemBoard", _descriptor8, this);

          _initializerDefineProperty(this, "itemHammerBoard", _descriptor9, this);

          _initializerDefineProperty(this, "itemHammer", _descriptor10, this);

          _initializerDefineProperty(this, "itemUndo", _descriptor11, this);

          _initializerDefineProperty(this, "settingBoard", _descriptor12, this);

          _initializerDefineProperty(this, "buttonSetting", _descriptor13, this);

          _initializerDefineProperty(this, "buttonResume", _descriptor14, this);

          _initializerDefineProperty(this, "buttonHome", _descriptor15, this);

          _initializerDefineProperty(this, "buttonUndoSide", _descriptor16, this);

          _initializerDefineProperty(this, "buttonBoomSide", _descriptor17, this);

          _initializerDefineProperty(this, "buttonHammerSide", _descriptor18, this);

          _initializerDefineProperty(this, "gridBoom", _descriptor19, this);

          _initializerDefineProperty(this, "gridHammer", _descriptor20, this);

          _initializerDefineProperty(this, "sideBar", _descriptor21, this);

          _initializerDefineProperty(this, "footer", _descriptor22, this);

          _initializerDefineProperty(this, "spriteBg", _descriptor23, this);

          _initializerDefineProperty(this, "sprFrameBgHor", _descriptor24, this);

          _initializerDefineProperty(this, "sprFrameBgVer", _descriptor25, this);

          _initializerDefineProperty(this, "sprFrameBoom", _descriptor26, this);

          _initializerDefineProperty(this, "sprFrameHammer", _descriptor27, this);

          _initializerDefineProperty(this, "sprFrameUndo", _descriptor28, this);

          _initializerDefineProperty(this, "sprDouble", _descriptor29, this);
        }

        start() {
          this.spriteBg.spriteFrame = sys.isMobile ? this.sprFrameBgVer : this.sprFrameBgHor;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boardBackground", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "boardFruit", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listNextCells", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameOverBoard", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "listButtonRestart", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "boardView", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "itemBoom", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "itemBoard", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "itemHammerBoard", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "itemHammer", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "itemUndo", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "settingBoard", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "buttonSetting", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "buttonResume", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "buttonHome", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "buttonUndoSide", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "buttonBoomSide", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "buttonHammerSide", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "gridBoom", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "gridHammer", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "sideBar", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "footer", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "spriteBg", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameBgHor", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameBgVer", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameBoom", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameHammer", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameUndo", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "sprDouble", [_dec30], {
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
//# sourceMappingURL=75c09557d2bff30ffd2f02d9d28531b38bbe4b72.js.map