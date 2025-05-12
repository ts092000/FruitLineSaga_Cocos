System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, Constants, DataGame, StoreAPI, _dec, _class, _crd, ccclass, property, GameCenterController;

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Utils/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataGame(extras) {
    _reporterNs.report("DataGame", "../Utils/DataGame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreAPI(extras) {
    _reporterNs.report("StoreAPI", "./StoreAPI", _context.meta, extras);
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
      find = _cc.find;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      DataGame = _unresolved_3.DataGame;
    }, function (_unresolved_4) {
      StoreAPI = _unresolved_4.StoreAPI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15b79EDi4RLVLAFqaEBAYNR", "GameCenterController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'find', 'game', 'Node']);

      // import GameClient from '@onechaintech/gamesdk';
      ({
        ccclass,
        property
      } = _decorator);

      _export("GameCenterController", GameCenterController = (_dec = ccclass('GameCenterController'), _dec(_class = class GameCenterController extends Component {
        constructor(...args) {
          super(...args);
          this.gameIDDev = '650c283bd6ba6276fea9b9f8';
          this.apiKeyDev = '3c820aff-ecdf-4ee4-a282-4537350df1a5';
          this.gameClient = void 0;
          this.user = void 0;
        }

        initGameClient(callBack) {// let parameters = new Node(Constants.NODE_NAME.GameClient);
          // this.gameClient = new GameClient(this.gameIDDev, this.apiKeyDev, window.parent, { dev: true });
          // this.gameClient.initAsync().then(async () => {
          //     //Get current user id
          //     let userID = this.gameClient.user.citizen.getCitizenId();
          //     this.user = {
          //         userID: this.gameClient.user.citizen.getCitizenId(),
          //         userName: this.gameClient.user.account.getUsername(),
          //         name: this.gameClient.user.citizen.getCitizenName()
          //     }
          //     //Get gamedata from server
          //     await this.gameClient.user.data.getGameData().then((response) => {
          //         //Save data
          //         if (response.data[`${userID}`] !== undefined) DataGame.dataGame = response.data[`${userID}`];
          //         //console.log(DataGame.dataGame);
          //     }).catch((e) => {
          //         console.log('Error at get game data: ', e);
          //     })
          //     let gameClientParams = parameters.addComponent(StoreAPI);
          //     gameClientParams.gameClient = this.gameClient;
          //     gameClientParams.userData = this.user;
          //     director.addPersistRootNode(parameters);
          //     //Run callback
          //     callBack.apply(callBack);
          // }).catch((e) => {
          //     console.log('Error at init game client: ', e);
          // })
        }

        startMatch(callBack) {
          let parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NODE_NAME.GameClient);
          let gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
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
          let parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NODE_NAME.GameClient);
          let gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
            error: Error()
          }), StoreAPI) : StoreAPI);
          this.gameClient = gameClientParams.gameClient;
          this.gameClient.match.completeMatch(gameClientParams.matchData, data).then(() => {
            let userID = this.gameClient.user.citizen.getCitizenId();
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
          let parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NODE_NAME.GameClient);
          let gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
            error: Error()
          }), StoreAPI) : StoreAPI);
          this.gameClient = gameClientParams.gameClient;
          let matchId = gameClientParams.matchData.matchId;
          (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
            error: Error()
          }), DataGame) : DataGame).dataGame.checkLog[`${matchId}`].push(logGame);
        }

        logMatch(data) {
          let parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NODE_NAME.GameClient);
          let gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
            error: Error()
          }), StoreAPI) : StoreAPI);
          this.gameClient = gameClientParams.gameClient;
          this.gameClient.logMatch(gameClientParams.matchData.matchId, data).catch(e => console.log(e));
        }

        async getLeaderBoard(type) {
          let parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NODE_NAME.GameClient);
          let gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
            error: Error()
          }), StoreAPI) : StoreAPI);
          this.gameClient = gameClientParams.gameClient;
          this.user = gameClientParams.userData;
          let data = await this.gameClient.leaderBoard.getList(type).catch(e => {
            return [];
          });
          return data;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=25bb76639ec1b4e27f440f7f6dfa0ee1d8d01a03.js.map