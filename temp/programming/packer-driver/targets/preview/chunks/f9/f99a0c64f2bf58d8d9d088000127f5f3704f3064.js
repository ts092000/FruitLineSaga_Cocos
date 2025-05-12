System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, AudioSource, Button, Component, Sprite, SpriteFrame, DataGame, AudioType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, AudioController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDataGame(extras) {
    _reporterNs.report("DataGame", "./Utils/DataGame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioType(extras) {
    _reporterNs.report("AudioType", "./Utils/DataTypes", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Button = _cc.Button;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      DataGame = _unresolved_2.DataGame;
    }, function (_unresolved_3) {
      AudioType = _unresolved_3.AudioType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0398ekShw5EVp/JqlmF8fgN", "AudioController", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'Button', 'Component', 'Node', 'sp', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioController", AudioController = (_dec = ccclass('AudioController'), _dec2 = property({
        type: AudioClip,
        tooltip: 'List audio clip'
      }), _dec3 = property({
        type: AudioSource,
        tooltip: 'Audio source'
      }), _dec4 = property({
        type: Sprite,
        tooltip: 'Sprite background music'
      }), _dec5 = property({
        type: Sprite,
        tooltip: 'Sprite sfx'
      }), _dec6 = property({
        type: SpriteFrame,
        tooltip: 'Sprite frame on'
      }), _dec7 = property({
        type: SpriteFrame,
        tooltip: 'Sprite frame off'
      }), _dec8 = property({
        type: Button,
        tooltip: 'Button BGM'
      }), _dec9 = property({
        type: Button,
        tooltip: 'Button SFX'
      }), _dec10 = property({
        type: Button,
        tooltip: 'List button'
      }), _dec(_class = (_class2 = class AudioController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "listAudioClip", _descriptor, this);

          _initializerDefineProperty(this, "audioSource", _descriptor2, this);

          _initializerDefineProperty(this, "spriteBGM", _descriptor3, this);

          _initializerDefineProperty(this, "spriteSFX", _descriptor4, this);

          _initializerDefineProperty(this, "spriteFrameOn", _descriptor5, this);

          _initializerDefineProperty(this, "spriteFrameOff", _descriptor6, this);

          _initializerDefineProperty(this, "buttonBGM", _descriptor7, this);

          _initializerDefineProperty(this, "buttonSFX", _descriptor8, this);

          _initializerDefineProperty(this, "listButton", _descriptor9, this);
        }

        start() {
          this.updateAudio();
          this.updateSpriteButtonSound(this.spriteBGM, (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
            error: Error()
          }), DataGame) : DataGame).musicStatus);
          this.updateSpriteButtonSound(this.spriteSFX, (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
            error: Error()
          }), DataGame) : DataGame).gameVolume === 1);
          this.buttonBGM.node.on(Button.EventType.CLICK, () => {
            (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
              error: Error()
            }), DataGame) : DataGame).musicStatus = !(_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
              error: Error()
            }), DataGame) : DataGame).musicStatus;
            this.updateSpriteButtonSound(this.spriteBGM, (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
              error: Error()
            }), DataGame) : DataGame).musicStatus);
            this.updateAudio();
            this.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
              error: Error()
            }), AudioType) : AudioType).Tick);
          });
          this.buttonSFX.node.on(Button.EventType.CLICK, () => {
            (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
              error: Error()
            }), DataGame) : DataGame).gameVolume = (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
              error: Error()
            }), DataGame) : DataGame).gameVolume ? 0 : 1;
            this.updateSpriteButtonSound(this.spriteSFX, (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
              error: Error()
            }), DataGame) : DataGame).gameVolume === 1);
            this.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
              error: Error()
            }), AudioType) : AudioType).Tick);
          });
          this.listButton.map(button => {
            button.node.on(Button.EventType.CLICK, () => {
              this.playAudio((_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
                error: Error()
              }), AudioType) : AudioType).Button);
            });
          });
        }

        updateAudio() {
          if ((_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
            error: Error()
          }), DataGame) : DataGame).musicStatus) this.audioSource.play();else this.audioSource.stop();
        }

        playAudio(type) {
          this.audioSource.playOneShot(this.listAudioClip[type], (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
            error: Error()
          }), DataGame) : DataGame).gameVolume);
        }

        updateSpriteButtonSound(spr, isOn) {
          spr.spriteFrame = isOn ? this.spriteFrameOn : this.spriteFrameOff;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listAudioClip", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spriteBGM", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spriteSFX", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameOn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameOff", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "buttonBGM", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "buttonSFX", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "listButton", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f99a0c64f2bf58d8d9d088000127f5f3704f3064.js.map