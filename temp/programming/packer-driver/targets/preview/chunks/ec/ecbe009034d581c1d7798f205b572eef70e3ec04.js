System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, ProgressBar, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, LevelBar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c028fbI8r1NdY6u5bftJrvC", "LevelBar", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LevelBar", LevelBar = (_dec = ccclass('LevelBar'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = class LevelBar extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "progressBar", _descriptor, this);

          _initializerDefineProperty(this, "lbLevePrev", _descriptor2, this);

          _initializerDefineProperty(this, "lbLevelNext", _descriptor3, this);

          this.valueBar = 250;
        }

        setCurrentLabel(level) {}

        setToValue(value, callBack) {
          var percent = value / this.valueBar;
          var newProgress = this.progressBar.progress + percent;
          var interval = setInterval(() => {
            this.progressBar.progress += 0.005;

            if (this.progressBar.progress >= newProgress) {
              clearInterval(interval);
            }

            if (this.progressBar.progress >= 1) {
              callBack();
              newProgress = newProgress - 1;
              this.progressBar.progress = 0;
            }
          }, 10);
        }

        setValueBar(value) {
          this.progressBar.progress = value;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbLevePrev", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbLevelNext", [_dec4], {
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
//# sourceMappingURL=ecbe009034d581c1d7798f205b572eef70e3ec04.js.map