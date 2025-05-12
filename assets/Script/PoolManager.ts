import { _decorator, Component, instantiate, Node, NodePool, Prefab, Vec3 } from 'cc';
import { Constants } from './Utils/Constants';
import { Cell } from './PrefabControl/Cell';
const { ccclass, property } = _decorator;

@ccclass('PoolManager')
export class PoolManager extends Component {
    @property({
        type: Prefab,
        tooltip: 'Prefab cell'
    })
    private prefabCell: Prefab;

    @property({
        type: Prefab,
        tooltip: 'Prefab explosion'
    })
    private prefabExplosion: Prefab;

    @property(Prefab)
    private prefabAnimationScore: Prefab;

    private poolCell: NodePool = new NodePool();
    private poolExplosion: NodePool = new NodePool();
    private poolScore: NodePool = new NodePool();

    protected onLoad(): void {
        this.initPoolCell();
    }

    private initPoolCell(): void {
        while (this.poolCell.size() < 100) {
            let cell = instantiate(this.prefabCell);
            this.poolCell.put(cell);
        }
    }

    public getCell(): Node {
        let element = this.poolCell.size() > 0 ? this.poolCell.get() : instantiate(this.prefabCell);
        return element;
    }

    public putCell(node: Node): void {
        this.poolCell.put(node);
    }

    public getExplosion(): Node {
        return this.poolExplosion.size() > 0 ? this.poolExplosion.get() : instantiate(this.prefabExplosion);
    }

    public putExplosion(node: Node): void {
        this.poolExplosion.put(node);
    }

    public getAnimationScore(): Node {
        return this.poolScore.size() > 0 ? this.poolScore.get() : instantiate(this.prefabAnimationScore);
    }

    public putAnimationScore(node: Node) {
        this.poolScore.put(node);
    }


}

