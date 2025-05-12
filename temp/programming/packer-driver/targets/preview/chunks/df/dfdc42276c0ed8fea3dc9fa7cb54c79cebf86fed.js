System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, StoreAPI;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "484a6RSzddC94ohWZmXCHlx", "StoreAPI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StoreAPI", StoreAPI = (_dec = ccclass('StoreAPI'), _dec(_class = class StoreAPI extends Component {
        constructor() {
          super(...arguments);
          this.gameClient = void 0;
          this.matchData = void 0;
          this.userData = void 0;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dfdc42276c0ed8fea3dc9fa7cb54c79cebf86fed.js.map