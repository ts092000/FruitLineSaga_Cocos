System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DataGame, _crd;

  function _reportPossibleCrUseOfDataUser(extras) {
    _reporterNs.report("DataUser", "./DataTypes", _context.meta, extras);
  }

  _export("DataGame", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bbe0a42Gh9EBa6auEp/6Iuc", "DataGame", undefined);

      _export("DataGame", DataGame = class DataGame {});

      DataGame.dataGame = {
        BestScore: 0,
        checkLog: {}
      };
      DataGame.gameVolume = 1;
      DataGame.musicStatus = true;
      DataGame.isLoad = false;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b11f9e5630cd1c220d67b5b4997992f939b51080.js.map