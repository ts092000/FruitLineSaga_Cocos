import { _decorator, Animation, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AnimationScore')
export class AnimationScore extends Component {
    @property(Label)
    private lbScore: Label;

    @property(Label)
    private lbCombo: Label;

    @property(Animation)
    private animation: Animation

    public setText(textScore: string, textCombo: string): void {
        this.lbScore.string = textScore;
        this.lbCombo.string = textCombo;
    }

    public playAnimation(): void {
        this.animation.play();
    }
}

