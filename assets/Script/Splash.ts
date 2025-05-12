import { _decorator, Component, director, Node, sp } from 'cc';
import { Constants } from './Utils/Constants';
import { DataGame } from './Utils/DataGame';
const { ccclass, property } = _decorator;

@ccclass('Splash')
export class Splash extends Component {
    @property(sp.Skeleton)
    private ske: sp.Skeleton;

    protected start(): void {
        this.ske.setCompleteListener(() => {
            if (DataGame.isLoad) director.loadScene(Constants.SCENE_NAME.Begin);
            else DataGame.isLoad = true;
        })
    }
}

