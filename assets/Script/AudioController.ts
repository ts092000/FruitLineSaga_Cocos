import { _decorator, AudioClip, AudioSource, Button, Component, Node, sp, Sprite, SpriteFrame } from 'cc';
import { DataGame } from './Utils/DataGame';
import { AudioType } from './Utils/DataTypes';
const { ccclass, property } = _decorator;

@ccclass('AudioController')
export class AudioController extends Component {
    @property({
        type: AudioClip,
        tooltip: 'List audio clip'
    })
    private listAudioClip: AudioClip[] = [];

    @property({
        type: AudioSource,
        tooltip: 'Audio source'
    })
    private audioSource: AudioSource;

    @property({
        type: Sprite,
        tooltip: 'Sprite background music'
    })
    private spriteBGM: Sprite;

    @property({
        type: Sprite,
        tooltip: 'Sprite sfx'
    })
    private spriteSFX: Sprite;

    @property({
        type: SpriteFrame,
        tooltip: 'Sprite frame on'
    })
    private spriteFrameOn: SpriteFrame;

    @property({
        type: SpriteFrame,
        tooltip: 'Sprite frame off'
    })
    private spriteFrameOff: SpriteFrame;

    @property({
        type: Button,
        tooltip: 'Button BGM'
    })
    private buttonBGM: Button;

    @property({
        type: Button,
        tooltip: 'Button SFX'
    })
    private buttonSFX: Button;

    @property({
        type: Button,
        tooltip: 'List button'
    })
    private listButton: Button[] = [];

    protected start(): void {
        this.updateAudio();
        this.updateSpriteButtonSound(this.spriteBGM, DataGame.musicStatus);
        this.updateSpriteButtonSound(this.spriteSFX, DataGame.gameVolume === 1);

        this.buttonBGM.node.on(Button.EventType.CLICK, () => {
            DataGame.musicStatus = !DataGame.musicStatus;
            this.updateSpriteButtonSound(this.spriteBGM, DataGame.musicStatus);
            this.updateAudio();
            this.playAudio(AudioType.Tick);
        });

        this.buttonSFX.node.on(Button.EventType.CLICK, () => {
            DataGame.gameVolume = DataGame.gameVolume ? 0 : 1;
            this.updateSpriteButtonSound(this.spriteSFX, DataGame.gameVolume === 1);
            this.playAudio(AudioType.Tick);
        });

        this.listButton.map((button) => {
            button.node.on(Button.EventType.CLICK, () => { this.playAudio(AudioType.Button) });
        })
    }

    public updateAudio(): void {
        if (DataGame.musicStatus) this.audioSource.play();
        else this.audioSource.stop();
    }

    public playAudio(type: AudioType): void {
        this.audioSource.playOneShot(this.listAudioClip[type], DataGame.gameVolume);
    }

    private updateSpriteButtonSound(spr: Sprite, isOn: boolean): void {
        spr.spriteFrame = isOn ? this.spriteFrameOn : this.spriteFrameOff;
    }
}

