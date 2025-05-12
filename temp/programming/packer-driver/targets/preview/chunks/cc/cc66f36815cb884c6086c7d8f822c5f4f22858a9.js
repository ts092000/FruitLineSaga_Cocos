System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec2, Constants, _dec, _class, _crd, ccclass, property, MatrixManager;

  function _reportPossibleCrUseOfCoordinates(extras) {
    _reporterNs.report("Coordinates", "./../Utils/DataTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Utils/Constants", _context.meta, extras);
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
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9cd10H2bBtI3KCnPo0PUvAt", "MatrixManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Contact2DType', 'Node', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MatrixManager", MatrixManager = (_dec = ccclass('MatrixManager'), _dec(_class = class MatrixManager extends Component {
        constructor() {
          super(...arguments);
          this.dataMatrix = new Array();
          this.arrayIndex = new Array();
          this.count = 0;
        }

        onLoad() {
          this.initData();
        }

        initData() {
          while (this.dataMatrix.length < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE) {
            var row = new Array((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_SIZE);
            row.fill(-1, 0, row.length);
            this.dataMatrix.push(row);
          }

          for (var i = 0; i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE * (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE; i++) this.arrayIndex.push(i);
        }

        fillCell(index, type) {
          var coor = {
            row: Math.floor(index / (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_SIZE),
            col: index % (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_SIZE
          };
          if (isNaN(coor.row) || isNaN(coor.col)) return;
          this.dataMatrix[coor.row][coor.col] = type;
        }

        fillIndex(index) {
          this.arrayIndex = this.arrayIndex.filter(item => item !== index);
        }

        emptyCell(index) {
          var coor = {
            row: Math.floor(index / (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_SIZE),
            col: index % (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOARD_SIZE
          };
          this.dataMatrix[coor.row][coor.col] = -1;
          if (!this.isHasInArray(this.arrayIndex, index)) this.arrayIndex.push(index);
        }
        /**
         * Get path move 
         * @param start Start coor
         * @param end End coor
         * @returns Path of move
         */


        getPath(start, end) {
          var path = new Array();
          var prev = new Array();

          while (prev.length < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE) prev.push(this.initDefaultArray((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE, {
            row: -1,
            col: -1
          }));

          if (this.getBestPath(prev, start, end)) {
            var temp = prev[end.row][end.col];

            while (temp.row != start.row || temp.col != start.col) {
              path.push(temp);
              temp = prev[temp.row][temp.col];
            }

            path.push(start);
          }

          path.unshift(end);
          return path;
        }
        /**
         * Find path by BFS
         * @param prev The previous array
         * @param start Start coor
         * @param end End coor
         * @returns True if path is exists
         */


        getBestPath(prev, start, end) {
          var queue = new Array();
          var delta = [new Vec2(-1, 0), new Vec2(1, 0), new Vec2(0, -1), new Vec2(0, 1)];
          var visited = new Array();

          while (visited.length < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE) visited.push(this.initDefaultArray((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE, false));

          queue.push(start);
          visited[start.row][start.col] = true;

          while (queue.length > 0) {
            var coor = queue.shift();
            if (coor.row === end.row && coor.col === end.col) return true;

            for (var i = 0; i < 4; i++) {
              var newCoor = {
                row: 0,
                col: 0
              };
              newCoor.row = coor.row + delta[i].x;
              newCoor.col = coor.col + delta[i].y;
              if (newCoor.row >= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_SIZE || newCoor.row < 0) continue;
              if (newCoor.col >= (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BOARD_SIZE || newCoor.col < 0) continue;
              if (this.dataMatrix[newCoor.row][newCoor.col] !== -1 && !(newCoor.row === end.row && newCoor.col === end.col)) continue;

              if (!visited[newCoor.row][newCoor.col]) {
                queue.push(newCoor);
                visited[newCoor.row][newCoor.col] = true;
                prev[newCoor.row][newCoor.col] = coor;
              }
            }
          }

          return false;
        }
        /**
         * Init default value of array by type
         * @param number Length of array
         * @param value Default value
         * @returns 
         */


        initDefaultArray(number, value) {
          var row = new Array(number);
          row.fill(value, 0, row.length);
          return row;
        }

        getListDelete(coor, type) {
          var listDelete = new Array();
          var tempList = new Array(); //Check Vertical

          var i = coor.row;

          while (i >= 0 && this.dataMatrix[i][coor.col] === type) {
            var newCoor = {
              row: i,
              col: coor.col
            };
            tempList.push(newCoor);
            i--;
          }

          i = coor.row + 1;

          while (i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE && this.dataMatrix[i][coor.col] === type) {
            tempList.push({
              row: i,
              col: coor.col
            });
            i++;
          }

          if (tempList.length >= 5) {
            listDelete.push(...tempList);
            this.count++;
          }

          tempList = []; //Check Horizontal

          var j = coor.col;

          while (j >= 0 && this.dataMatrix[coor.row][j] === type) {
            tempList.push({
              row: coor.row,
              col: j
            });
            j--;
          }

          j = coor.col + 1;

          while (j < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE && this.dataMatrix[coor.row][j] === type) {
            tempList.push({
              row: coor.row,
              col: j
            });
            j++;
          }

          if (tempList.length >= 5) {
            listDelete.push(...tempList);
            this.count++;
          }

          tempList = []; //Check left cross

          i = coor.row;
          j = coor.col;

          while (j >= 0 && i >= 0 && this.dataMatrix[i][j] === type) {
            tempList.push({
              row: i,
              col: j
            });
            i--;
            j--;
          }

          i = coor.row + 1;
          j = coor.col + 1;

          while (j < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE && i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE && this.dataMatrix[i][j] === type) {
            tempList.push({
              row: i,
              col: j
            });
            i++;
            j++;
          }

          if (tempList.length >= 5) {
            listDelete.push(...tempList);
            this.count++;
          }

          tempList = []; //Check right cross

          i = coor.row;
          j = coor.col;

          while (i >= 0 && j < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE && this.dataMatrix[i][j] === type) {
            tempList.push({
              row: i,
              col: j
            });
            i--;
            j++;
          }

          i = coor.row + 1;
          j = coor.col - 1;

          while (i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOARD_SIZE && j >= 0 && this.dataMatrix[i][j] === type) {
            tempList.push({
              row: i,
              col: j
            });
            i++;
            j--;
          }

          if (tempList.length >= 5) {
            listDelete.push(...tempList);
            this.count++;
          }

          tempList = [];
          return listDelete;
        }

        isElementOfArray(coor, list) {
          var index = list.findIndex(item => item.row === coor.row && item.col === coor.col);
          return index !== -1;
        }

        isHasInArray(array, element) {
          var index = array.findIndex(item => item === element);
          return index > -1;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cc66f36815cb884c6086c7d8f822c5f4f22858a9.js.map