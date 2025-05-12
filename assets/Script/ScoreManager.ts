import { _decorator, Component, Label, Node } from 'cc';
import { DataGame } from './Utils/DataGame';
const { ccclass, property } = _decorator;

@ccclass('ScoreManager')
export class ScoreManager extends Component {
    @property({
        type: Label,
        tooltip: 'List label score'
    })
    private listLabelScore: Array<Label> = [];

    @property({
        type: Label,
        tooltip: 'Label score game over'
    })
    private labelScoreGameOver: Label;

    @property({
        type: Label,
        tooltip: 'Label best game over'
    })
    private labelBestGameOver: Label;

    private score: number = 0;

    protected start(): void {
        this.setLabelBestScore();
        this.setLabelScoreGameOver();
    }

    public addScore(value: number): void {
        this.score += value;
        this.setLabelScore();
        this.setLabelScoreGameOver();

        if (this.score > DataGame.dataGame.BestScore) {
            DataGame.dataGame.BestScore = this.score;
            this.setLabelBestScore();
        }
    }

    public getScore(): number {
        return this.score;
    }

    private setLabelScore(): void {
        let convert: string = this.score.toString();
        while (convert.length < 4) convert = `0${convert}`;

        for (let i = 0; i < convert.length; i++) this.listLabelScore[i].string = convert[i];
    }

    private setLabelScoreGameOver(): void {
        this.labelScoreGameOver.string = `${this.score}`;
    }

    private setLabelBestScore(): void {
        this.labelBestGameOver.string = `${DataGame.dataGame.BestScore}`
    }
}

