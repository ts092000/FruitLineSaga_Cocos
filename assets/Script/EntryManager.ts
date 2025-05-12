import { _decorator, Component, director, game, Node, Sprite } from 'cc';
import { GameCenterController } from './GameCenter/GameCenterController';
import { Constants } from './Utils/Constants';
import { DataGame } from './Utils/DataGame';
const { ccclass, property } = _decorator;

@ccclass('EntryManager')
export class EntryManager extends Component {
    @property({
        type: GameCenterController,
        tooltip: 'Game center controller node'
    })
    private gameCenter: GameCenterController;

    protected start(): void {
        director.preloadScene(Constants.SCENE_NAME.Game, () => {
            if (DataGame.isLoad) director.loadScene(Constants.SCENE_NAME.Begin);
            else DataGame.isLoad = true;
        })
        // this.gameCenter.initGameClient(() => {
        // })
    }
}

