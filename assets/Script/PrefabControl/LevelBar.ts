import { _decorator, Component, Label, Node, ProgressBar } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LevelBar')
export class LevelBar extends Component {
    @property(ProgressBar)
    private progressBar: ProgressBar;

    @property(Label)
    private lbLevePrev: Label;

    @property(Label)
    private lbLevelNext: Label;

    private valueBar: number = 250;

    public setCurrentLabel(level: number): void { }

    public setToValue(value: number, callBack: Function): void {
        let percent = value / this.valueBar;
        let newProgress = this.progressBar.progress + percent;
        let interval = setInterval(() => {
            this.progressBar.progress += 0.005;
            if (this.progressBar.progress >= newProgress) {
                clearInterval(interval);
            }

            if (this.progressBar.progress >= 1) {
                callBack();
                newProgress = newProgress - 1;
                this.progressBar.progress = 0;
            }
        }, 10)
    }

    public setValueBar(value: number): void {
        this.progressBar.progress = value;
    }
}

