System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, DataGame, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ScoreManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      DataGame = _unresolved_2.DataGame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a93fe9TDFByYkYW+fpAvS5", "ScoreManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScoreManager", ScoreManager = (_dec = ccclass('ScoreManager'), _dec2 = property({
        type: Label,
        tooltip: 'List label score'
      }), _dec3 = property({
        type: Label,
        tooltip: 'Label score game over'
      }), _dec4 = property({
        type: Label,
        tooltip: 'Label best game over'
      }), _dec(_class = (_class2 = class ScoreManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "listLabelScore", _descriptor, this);

          _initializerDefineProperty(this, "labelScoreGameOver", _descriptor2, this);

          _initializerDefineProperty(this, "labelBestGameOver", _descriptor3, this);

          this.score = 0;
        }

        start() {
          this.setLabelBestScore();
          this.setLabelScoreGameOver();
        }

        addScore(value) {
          this.score += value;
          this.setLabelScore();
          this.setLabelScoreGameOver();

          if (this.score > (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
            error: Error()
          }), DataGame) : DataGame).dataGame.BestScore) {
            (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
              error: Error()
            }), DataGame) : DataGame).dataGame.BestScore = this.score;
            this.setLabelBestScore();
          }
        }

        getScore() {
          return this.score;
        }

        setLabelScore() {
          let convert = this.score.toString();

          while (convert.length < 4) convert = `0${convert}`;

          for (let i = 0; i < convert.length; i++) this.listLabelScore[i].string = convert[i];
        }

        setLabelScoreGameOver() {
          this.labelScoreGameOver.string = `${this.score}`;
        }

        setLabelBestScore() {
          this.labelBestGameOver.string = `${(_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
            error: Error()
          }), DataGame) : DataGame).dataGame.BestScore}`;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listLabelScore", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelScoreGameOver", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelBestGameOver", [_dec4], {
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
//# sourceMappingURL=b84819931488578bc2b542db788dca88eea061ef.js.map