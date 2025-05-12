System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "@onechaintech/gamesdk"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, find, Node, Constants, DataGame, StoreAPI, GameClient, _dec, _class, _crd, ccclass, property, GameCenterController;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Utils/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataGame(extras) {
    _reporterNs.report("DataGame", "../Utils/DataGame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreAPI(extras) {
    _reporterNs.report("StoreAPI", "./StoreAPI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameClient(extras) {
    _reporterNs.report("GameClient", "@onechaintech/gamesdk", _context.meta, extras);
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
      find = _cc.find;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      DataGame = _unresolved_3.DataGame;
    }, function (_unresolved_4) {
      StoreAPI = _unresolved_4.StoreAPI;
    }, function (_onechaintechGamesdk) {
      GameClient = _onechaintechGamesdk.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15b79EDi4RLVLAFqaEBAYNR", "GameCenterController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'find', 'game', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameCenterController", GameCenterController = (_dec = ccclass('GameCenterController'), _dec(_class = class GameCenterController extends Component {
        constructor() {
          super(...arguments);
          this.gameIDDev = '650c283bd6ba6276fea9b9f8';
          this.apiKeyDev = '3c820aff-ecdf-4ee4-a282-4537350df1a5';
          this.gameClient = void 0;
          this.user = void 0;
        }

        initGameClient(callBack) {
          var _this = this;

          var parameters = new Node((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NODE_NAME.GameClient);
          this.gameClient = new (_crd && GameClient === void 0 ? (_reportPossibleCrUseOfGameClient({
            error: Error()
          }), GameClient) : GameClient)(this.gameIDDev, this.apiKeyDev, window.parent, {
            dev: true
          });
          this.gameClient.initAsync().then( /*#__PURE__*/_asyncToGenerator(function* () {
            //Get current user id
            var userID = _this.gameClient.user.citizen.getCitizenId();

            _this.user = {
              userID: _this.gameClient.user.citizen.getCitizenId(),
              userName: _this.gameClient.user.account.getUsername(),
              name: _this.gameClient.user.citizen.getCitizenName()
            }; //Get gamedata from server

            yield _this.gameClient.user.data.getGameData().then(response => {
              //Save data
              if (response.data["" + userID] !== undefined) (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
                error: Error()
              }), DataGame) : DataGame).dataGame = response.data["" + userID]; //console.log(DataGame.dataGame);
            }).catch(e => {
              console.log('Error at get game data: ', e);
            });
            var gameClientParams = parameters.addComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
              error: Error()
            }), StoreAPI) : StoreAPI);
            gameClientParams.gameClient = _this.gameClient;
            gameClientParams.userData = _this.user;
            director.addPersistRootNode(parameters); //Run callback

            callBack.apply(callBack);
          })).catch(e => {
            console.log('Error at init game client: ', e);
          });
        }

        startMatch(callBack) {
          var parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NODE_NAME.GameClient);
          var gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
            error: Error()
          }), StoreAPI) : StoreAPI);
          this.gameClient = gameClientParams.gameClient;
          this.gameClient.match.startMatch().then(data => {
            gameClientParams.matchData = data; //Create array log

            if (!(_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
              error: Error()
            }), DataGame) : DataGame).dataGame.checkLog) (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
              error: Error()
            }), DataGame) : DataGame).dataGame.checkLog = {};
            (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
              error: Error()
            }), DataGame) : DataGame).dataGame.checkLog[data.matchId] = []; // Apply callback

            callBack.apply(callBack);
          }).catch(error => console.log('Error at start match: ', error));
        }
        /** 
         * @param callBack Call when api done
         * @param data Data leader board
         */


        completeMatch(callBack, data) {
          var parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NODE_NAME.GameClient);
          var gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
            error: Error()
          }), StoreAPI) : StoreAPI);
          this.gameClient = gameClientParams.gameClient;
          this.gameClient.match.completeMatch(gameClientParams.matchData, data).then(() => {
            var userID = this.gameClient.user.citizen.getCitizenId();
            this.gameClient.user.data.setGameData({
              [userID]: (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
                error: Error()
              }), DataGame) : DataGame).dataGame
            }, false).then(() => {}).catch(e => {
              console.log("Error at set game data", e);
            }); //Apply callback

            callBack.apply(callBack);
          }).catch(e => {
            console.log(e);
          });
        }

        setGameData(logGame) {
          var parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NODE_NAME.GameClient);
          var gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
            error: Error()
          }), StoreAPI) : StoreAPI);
          this.gameClient = gameClientParams.gameClient;
          var matchId = gameClientParams.matchData.matchId;
          (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
            error: Error()
          }), DataGame) : DataGame).dataGame.checkLog["" + matchId].push(logGame);
        }

        logMatch(data) {
          var parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NODE_NAME.GameClient);
          var gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
            error: Error()
          }), StoreAPI) : StoreAPI);
          this.gameClient = gameClientParams.gameClient;
          this.gameClient.logMatch(gameClientParams.matchData.matchId, data).catch(e => console.log(e));
        }

        getLeaderBoard(type) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).NODE_NAME.GameClient);
            var gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
              error: Error()
            }), StoreAPI) : StoreAPI);
            _this2.gameClient = gameClientParams.gameClient;
            _this2.user = gameClientParams.userData;
            var data = yield _this2.gameClient.leaderBoard.getList(type).catch(e => {
              return [];
            });
            return data;
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a56836b3d9f500b376cc36a9fae754b438666ff8.js.map