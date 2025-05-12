import { _decorator, Component, director, find, game, Node } from 'cc';
import { Constants } from '../Utils/Constants';
import { DataGame } from '../Utils/DataGame';
import { StoreAPI } from './StoreAPI';
// import GameClient from '@onechaintech/gamesdk';

const { ccclass, property } = _decorator;

export type LeaderBoard = {
    index: number;
    metadata: {
        avatarUrl: string,
        citizenCode: string,
        citizenName: string,
        username: string
    },
    point: number,
    userId: string
}

@ccclass('GameCenterController')
export class GameCenterController extends Component {
    private readonly gameIDDev: string = '650c283bd6ba6276fea9b9f8';
    private readonly apiKeyDev: string = '3c820aff-ecdf-4ee4-a282-4537350df1a5';
    public gameClient;
    public user;


    public initGameClient(callBack: () => void): void {
        // let parameters = new Node(Constants.NODE_NAME.GameClient);

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

    public startMatch(callBack: () => void): void {
        let parameters = find(Constants.NODE_NAME.GameClient);
        let gameClientParams = parameters.getComponent(StoreAPI);
        this.gameClient = gameClientParams.gameClient;

        this.gameClient.match.startMatch().then((data) => {
            gameClientParams.matchData = data;

            //Create array log
            if (!DataGame.dataGame.checkLog) DataGame.dataGame.checkLog = {};
            DataGame.dataGame.checkLog[data.matchId] = [];


            // Apply callback
            callBack.apply(callBack);
        }).catch((error) => console.log('Error at start match: ', error));
    }

    /** 
     * @param callBack Call when api done
     * @param data Data leader board
     */
    public completeMatch(callBack: () => void, data: Object): void {
        let parameters = find(Constants.NODE_NAME.GameClient);
        let gameClientParams = parameters.getComponent(StoreAPI);
        this.gameClient = gameClientParams.gameClient;

        this.gameClient.match.completeMatch(gameClientParams.matchData, data)
            .then(() => {
                let userID = this.gameClient.user.citizen.getCitizenId();
                this.gameClient.user.data.setGameData({ [userID]: DataGame.dataGame }, false).then(() => { })
                    .catch((e) => { console.log("Error at set game data", e); })

                //Apply callback
                callBack.apply(callBack);
            }).catch((e) => {
                console.log(e);
            })
    }

    public setGameData(logGame: { score: number, seconds: number, datetime: string }): void {
        let parameters = find(Constants.NODE_NAME.GameClient);
        let gameClientParams = parameters.getComponent(StoreAPI);

        this.gameClient = gameClientParams.gameClient;
        let matchId = gameClientParams.matchData.matchId

        DataGame.dataGame.checkLog[`${matchId}`].push(logGame);
    }

    public logMatch(data: Object): void {
        let parameters = find(Constants.NODE_NAME.GameClient);
        let gameClientParams = parameters.getComponent(StoreAPI);

        this.gameClient = gameClientParams.gameClient;
        this.gameClient.logMatch(gameClientParams.matchData.matchId, data).catch((e) => console.log(e));
    }

    public async getLeaderBoard(type: number): Promise<LeaderBoard[]> {
        let parameters = find(Constants.NODE_NAME.GameClient);
        let gameClientParams = parameters.getComponent(StoreAPI);
        this.gameClient = gameClientParams.gameClient;
        this.user = gameClientParams.userData;

        let data: LeaderBoard[] = await this.gameClient.leaderBoard.getList(type).catch((e) => {
            return [];
        });
        return data;
    }



}

