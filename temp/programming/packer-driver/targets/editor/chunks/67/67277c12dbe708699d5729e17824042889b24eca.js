System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Node, tween, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Tutorial;

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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cea36pVLxZNvpDLsbTv7jbV", "Tutorial", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'tween', 'Vec3', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Tutorial", Tutorial = (_dec = ccclass('Tutorial'), _dec2 = property({
        type: Button,
        tooltip: 'Button next'
      }), _dec3 = property({
        type: Button,
        tooltip: 'Button back'
      }), _dec4 = property({
        type: Node,
        tooltip: 'Content tutorial'
      }), _dec5 = property({
        type: Button,
        tooltip: 'Button close'
      }), _dec(_class = (_class2 = class Tutorial extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "buttonNext", _descriptor, this);

          _initializerDefineProperty(this, "buttonBack", _descriptor2, this);

          _initializerDefineProperty(this, "content", _descriptor3, this);

          _initializerDefineProperty(this, "buttonClose", _descriptor4, this);
        }

        onLoad() {
          this.buttonBack.node.on(Button.EventType.CLICK, () => {
            if (this.content.position.x + 350 >= 0) this.buttonBack.node.active = false;else this.buttonNext.node.active = true;
            this.buttonBack.interactable = false;
            this.buttonNext.interactable = false;
            tween(this.content).to(0.2, {
              position: new Vec3(this.content.position.x + 350, this.content.position.y)
            }, {
              easing: 'smooth'
            }).call(() => {
              this.buttonBack.interactable = true;
              this.buttonNext.interactable = true;
            }).start();
          });
          this.buttonNext.node.on(Button.EventType.CLICK, () => {
            if (this.content.position.x - 350 <= -1400) this.buttonNext.node.active = false;else this.buttonBack.node.active = true;
            this.buttonBack.interactable = false;
            this.buttonNext.interactable = false;
            tween(this.content).to(0.2, {
              position: new Vec3(this.content.position.x - 350, this.content.position.y)
            }, {
              easing: 'smooth'
            }).call(() => {
              this.buttonBack.interactable = true;
              this.buttonNext.interactable = true;
            }).start();
          });
          this.buttonClose.node.on(Button.EventType.CLICK, () => {
            this.content.setPosition(0, this.content.position.y);
            this.buttonBack.node.active = false;
            this.buttonNext.node.active = true;
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonNext", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buttonBack", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buttonClose", [_dec5], {
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
//# sourceMappingURL=67277c12dbe708699d5729e17824042889b24eca.js.map