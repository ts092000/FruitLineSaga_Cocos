System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, Node, Constants, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, MenuManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./Utils/Constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      director = _cc.director;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a9b9jcXQpJP7Z+rfVJHPL9", "MenuManager", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuManager", MenuManager = (_dec = ccclass('MenuManager'), _dec2 = property({
        type: Button,
        tooltip: 'Button play'
      }), _dec3 = property({
        type: Button,
        tooltip: 'Button setting'
      }), _dec4 = property({
        type: Node,
        tooltip: 'Setting board'
      }), _dec5 = property({
        type: Button,
        tooltip: 'Button home'
      }), _dec6 = property({
        type: Node,
        tooltip: 'Main node'
      }), _dec7 = property({
        type: Node,
        tooltip: 'Tutorial node'
      }), _dec8 = property({
        type: Button,
        tooltip: 'Button tutorial'
      }), _dec9 = property({
        type: Button,
        tooltip: 'Button close'
      }), _dec(_class = (_class2 = class MenuManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "buttonPlay", _descriptor, this);

          _initializerDefineProperty(this, "buttonSetting", _descriptor2, this);

          _initializerDefineProperty(this, "settingBoard", _descriptor3, this);

          _initializerDefineProperty(this, "buttonHome", _descriptor4, this);

          _initializerDefineProperty(this, "mainNode", _descriptor5, this);

          _initializerDefineProperty(this, "tutorialNode", _descriptor6, this);

          _initializerDefineProperty(this, "buttonTutorial", _descriptor7, this);

          _initializerDefineProperty(this, "buttonClose", _descriptor8, this);
        }

        onLoad() {
          this.buttonPlay.node.on(Button.EventType.CLICK, () => director.loadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SCENE_NAME.Game));
          this.buttonSetting.node.on(Button.EventType.CLICK, () => {
            this.buttonTutorial.interactable = false;
            this.buttonSetting.interactable = false;
            this.buttonPlay.interactable = false;
            this.settingBoard.active = true;
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
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonPlay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buttonSetting", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "settingBoard", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buttonHome", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mainNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tutorialNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "buttonTutorial", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "buttonClose", [_dec9], {
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
//# sourceMappingURL=7f31f3c8a153e418ae32ad0cd5fa8c7512523dc2.js.map