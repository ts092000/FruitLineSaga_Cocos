System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, GameCenterController, Constants, DataGame, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, EntryManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameCenterController(extras) {
    _reporterNs.report("GameCenterController", "./GameCenter/GameCenterController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./Utils/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataGame(extras) {
    _reporterNs.report("DataGame", "./Utils/DataGame", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }, function (_unresolved_2) {
      GameCenterController = _unresolved_2.GameCenterController;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      DataGame = _unresolved_4.DataGame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "09a9fdcAuNBEaKXKSVMnLaW", "EntryManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'game', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EntryManager", EntryManager = (_dec = ccclass('EntryManager'), _dec2 = property({
        type: _crd && GameCenterController === void 0 ? (_reportPossibleCrUseOfGameCenterController({
          error: Error()
        }), GameCenterController) : GameCenterController,
        tooltip: 'Game center controller node'
      }), _dec(_class = (_class2 = class EntryManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gameCenter", _descriptor, this);
        }

        start() {
          director.preloadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SCENE_NAME.Game, () => {
            if ((_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
              error: Error()
            }), DataGame) : DataGame).isLoad) director.loadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SCENE_NAME.Begin);else (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
              error: Error()
            }), DataGame) : DataGame).isLoad = true;
          }); // this.gameCenter.initGameClient(() => {
          // })
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameCenter", [_dec2], {
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
//# sourceMappingURL=fb123dd1e9ce99e3573c27d811c4c5495afe2f87.js.map