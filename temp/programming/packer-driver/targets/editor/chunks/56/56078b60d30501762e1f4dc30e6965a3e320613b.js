System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd, FruitType, CellType, ItemType, AudioType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57b0famY75HWZNSbclzwP06", "DataTypes", undefined);

      __checkObsolete__(['Node']);

      _export("FruitType", FruitType = /*#__PURE__*/function (FruitType) {
        FruitType[FruitType["Apple"] = 0] = "Apple";
        FruitType[FruitType["Caramel"] = 1] = "Caramel";
        FruitType[FruitType["Peach"] = 2] = "Peach";
        FruitType[FruitType["Pear"] = 3] = "Pear";
        FruitType[FruitType["Pomegranate"] = 4] = "Pomegranate";
        FruitType[FruitType["Grapes"] = 5] = "Grapes";
        FruitType[FruitType["Watermelon"] = 6] = "Watermelon";
        return FruitType;
      }({}));

      _export("CellType", CellType = /*#__PURE__*/function (CellType) {
        CellType[CellType["Empty"] = 0] = "Empty";
        CellType[CellType["Fruit"] = 1] = "Fruit";
        CellType[CellType["Hint"] = 2] = "Hint";
        return CellType;
      }({}));

      _export("ItemType", ItemType = /*#__PURE__*/function (ItemType) {
        ItemType[ItemType["Boom"] = 0] = "Boom";
        ItemType[ItemType["Undo"] = 1] = "Undo";
        ItemType[ItemType["Hammer"] = 2] = "Hammer";
        ItemType[ItemType["None"] = 3] = "None";
        return ItemType;
      }({}));

      _export("AudioType", AudioType = /*#__PURE__*/function (AudioType) {
        AudioType[AudioType["Button"] = 0] = "Button";
        AudioType[AudioType["Click"] = 1] = "Click";
        AudioType[AudioType["Boom"] = 2] = "Boom";
        AudioType[AudioType["Hammer"] = 3] = "Hammer";
        AudioType[AudioType["Notice"] = 4] = "Notice";
        AudioType[AudioType["Slide"] = 5] = "Slide";
        AudioType[AudioType["Tick"] = 6] = "Tick";
        AudioType[AudioType["Award"] = 7] = "Award";
        AudioType[AudioType["Lose"] = 8] = "Lose";
        return AudioType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=56078b60d30501762e1f4dc30e6965a3e320613b.js.map