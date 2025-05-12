System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, NodePool, Prefab, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, PoolManager;

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
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f66ebDTu5lACaf3gK2Rne/7", "PoolManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'NodePool', 'Prefab', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PoolManager", PoolManager = (_dec = ccclass('PoolManager'), _dec2 = property({
        type: Prefab,
        tooltip: 'Prefab cell'
      }), _dec3 = property({
        type: Prefab,
        tooltip: 'Prefab explosion'
      }), _dec4 = property(Prefab), _dec(_class = (_class2 = class PoolManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "prefabCell", _descriptor, this);

          _initializerDefineProperty(this, "prefabExplosion", _descriptor2, this);

          _initializerDefineProperty(this, "prefabAnimationScore", _descriptor3, this);

          this.poolCell = new NodePool();
          this.poolExplosion = new NodePool();
          this.poolScore = new NodePool();
        }

        onLoad() {
          this.initPoolCell();
        }

        initPoolCell() {
          while (this.poolCell.size() < 100) {
            var cell = instantiate(this.prefabCell);
            this.poolCell.put(cell);
          }
        }

        getCell() {
          var element = this.poolCell.size() > 0 ? this.poolCell.get() : instantiate(this.prefabCell);
          return element;
        }

        putCell(node) {
          this.poolCell.put(node);
        }

        getExplosion() {
          return this.poolExplosion.size() > 0 ? this.poolExplosion.get() : instantiate(this.prefabExplosion);
        }

        putExplosion(node) {
          this.poolExplosion.put(node);
        }

        getAnimationScore() {
          return this.poolScore.size() > 0 ? this.poolScore.get() : instantiate(this.prefabAnimationScore);
        }

        putAnimationScore(node) {
          this.poolScore.put(node);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabCell", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefabExplosion", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefabAnimationScore", [_dec4], {
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
//# sourceMappingURL=91e3bd59635152903970b5f0d0721f710083a584.js.map