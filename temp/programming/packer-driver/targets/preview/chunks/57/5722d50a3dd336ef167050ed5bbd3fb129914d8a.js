System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Constants, _crd;

  _export("Constants", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "47d00pFnbhHhrAVAlRT19ps", "Constants", undefined);

      _export("Constants", Constants = class Constants {});

      Constants.SCENE_NAME = {
        Entry: 'Entry',
        Begin: 'Begin',
        Game: 'Game'
      };
      Constants.ANIMATION_NAME = {
        FruitHidden: 'AnimationHidden'
      };
      Constants.NODE_NAME = {
        GameClient: 'GameClient'
      };
      Constants.CELL_SIZE = 40;
      Constants.BOARD_SIZE = 9;
      Constants.DEFAULT_NUMBER_ITEM = 2;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5722d50a3dd336ef167050ed5bbd3fb129914d8a.js.map