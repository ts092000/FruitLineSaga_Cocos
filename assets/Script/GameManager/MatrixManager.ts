import { Coordinates } from './../Utils/DataTypes';
import { _decorator, Component, Contact2DType, Node, Vec2 } from 'cc';
import { Constants } from '../Utils/Constants';
const { ccclass, property } = _decorator;

@ccclass('MatrixManager')
export class MatrixManager extends Component {
    public dataMatrix: Array<Array<number>> = new Array();
    public arrayIndex: Array<number> = new Array();
    public count: number = 0;

    protected onLoad(): void {
        this.initData();
    }

    private initData(): void {
        while (this.dataMatrix.length < Constants.BOARD_SIZE) {
            let row: Array<number> = new Array(Constants.BOARD_SIZE);
            row.fill(-1, 0, row.length);
            this.dataMatrix.push(row);
        }

        for (let i = 0; i < Constants.BOARD_SIZE * Constants.BOARD_SIZE; i++)
            this.arrayIndex.push(i);
    }

    public fillCell(index: number, type: number): void {
        let coor: Coordinates = {
            row: Math.floor(index / Constants.BOARD_SIZE),
            col: index % Constants.BOARD_SIZE
        };
        if (isNaN(coor.row) || isNaN(coor.col)) return;
        this.dataMatrix[coor.row][coor.col] = type;
    }

    public fillIndex(index: number): void {
        this.arrayIndex = this.arrayIndex.filter((item) => item !== index)
    }

    public emptyCell(index: number): void {
        let coor: Coordinates = {
            row: Math.floor(index / Constants.BOARD_SIZE),
            col: index % Constants.BOARD_SIZE
        };
        this.dataMatrix[coor.row][coor.col] = -1;
        if (!this.isHasInArray(this.arrayIndex, index)) this.arrayIndex.push(index);
    }
    /**
     * Get path move 
     * @param start Start coor
     * @param end End coor
     * @returns Path of move
     */
    public getPath(start: Coordinates, end: Coordinates): Array<Coordinates> {
        let path: Array<Coordinates> = new Array();
        let prev: Array<Array<Coordinates>> = new Array();

        while (prev.length < Constants.BOARD_SIZE)
            prev.push(this.initDefaultArray(Constants.BOARD_SIZE, { row: -1, col: -1 }));

        if (this.getBestPath(prev, start, end)) {
            let temp = prev[end.row][end.col];
            while (temp.row != start.row || temp.col != start.col) {
                path.push(temp);
                temp = prev[temp.row][temp.col];
            }
            path.push(start);
        }
        path.unshift(end);
        return path;
    }

    /**
     * Find path by BFS
     * @param prev The previous array
     * @param start Start coor
     * @param end End coor
     * @returns True if path is exists
     */
    private getBestPath(prev: Array<Array<Coordinates>>, start: Coordinates, end: Coordinates): boolean {
        let queue: Array<Coordinates> = new Array();
        let delta: Array<Vec2> = [new Vec2(-1, 0), new Vec2(1, 0), new Vec2(0, -1), new Vec2(0, 1)];

        let visited: Array<Array<boolean>> = new Array();
        while (visited.length < Constants.BOARD_SIZE)
            visited.push(this.initDefaultArray(Constants.BOARD_SIZE, false));

        queue.push(start);
        visited[start.row][start.col] = true;

        while (queue.length > 0) {
            let coor = queue.shift();
            if (coor.row === end.row && coor.col === end.col) return true;

            for (let i = 0; i < 4; i++) {
                let newCoor: Coordinates = { row: 0, col: 0 };
                newCoor.row = coor.row + delta[i].x;
                newCoor.col = coor.col + delta[i].y;

                if (newCoor.row >= Constants.BOARD_SIZE || newCoor.row < 0) continue;
                if (newCoor.col >= Constants.BOARD_SIZE || newCoor.col < 0) continue;
                if (this.dataMatrix[newCoor.row][newCoor.col] !== -1
                    && !(newCoor.row === end.row && newCoor.col === end.col)) continue;

                if (!visited[newCoor.row][newCoor.col]) {
                    queue.push(newCoor);
                    visited[newCoor.row][newCoor.col] = true;
                    prev[newCoor.row][newCoor.col] = coor;
                }
            }
        }
        return false;
    }

    /**
     * Init default value of array by type
     * @param number Length of array
     * @param value Default value
     * @returns 
     */
    private initDefaultArray<Type>(number, value: Type): Array<Type> {
        let row: Array<Type> = new Array(number);
        row.fill(value, 0, row.length);
        return row;
    }

    public getListDelete(coor: Coordinates, type: number): Array<Coordinates> {
        let listDelete: Array<Coordinates> = new Array();
        let tempList: Array<Coordinates> = new Array();

        //Check Vertical
        let i = coor.row;
        while (i >= 0 && this.dataMatrix[i][coor.col] === type) {
            let newCoor: Coordinates = { row: i, col: coor.col }
            tempList.push(newCoor);
            i--;
        }

        i = coor.row + 1;
        while (i < Constants.BOARD_SIZE && this.dataMatrix[i][coor.col] === type) {
            tempList.push({ row: i, col: coor.col });
            i++;
        }
        if (tempList.length >= 5) {
            listDelete.push(...tempList);
            this.count++;
        }

        tempList = [];

        //Check Horizontal
        let j = coor.col;
        while (j >= 0 && this.dataMatrix[coor.row][j] === type) {
            tempList.push({ row: coor.row, col: j });
            j--;
        }

        j = coor.col + 1;
        while (j < Constants.BOARD_SIZE && this.dataMatrix[coor.row][j] === type) {
            tempList.push({ row: coor.row, col: j });
            j++;
        }
        if (tempList.length >= 5) {
            listDelete.push(...tempList);
            this.count++;
        }
        tempList = [];

        //Check left cross
        i = coor.row; j = coor.col;
        while (j >= 0 && i >= 0 && this.dataMatrix[i][j] === type) {
            tempList.push({ row: i, col: j });
            i--;
            j--;
        }

        i = coor.row + 1; j = coor.col + 1;
        while (j < Constants.BOARD_SIZE && i < Constants.BOARD_SIZE && this.dataMatrix[i][j] === type) {
            tempList.push({ row: i, col: j });
            i++;
            j++;
        }
        if (tempList.length >= 5) {
            listDelete.push(...tempList);
            this.count++;
        }
        tempList = [];

        //Check right cross
        i = coor.row; j = coor.col;
        while (i >= 0 && j < Constants.BOARD_SIZE && this.dataMatrix[i][j] === type) {
            tempList.push({ row: i, col: j });
            i--;
            j++;
        }

        i = coor.row + 1; j = coor.col - 1;
        while (i < Constants.BOARD_SIZE && j >= 0 && this.dataMatrix[i][j] === type) {
            tempList.push({ row: i, col: j });
            i++;
            j--;
        }
        if (tempList.length >= 5) {
            listDelete.push(...tempList);
            this.count++;
        }
        tempList = [];

        return listDelete;
    }

    public isElementOfArray(coor: Coordinates, list: Array<Coordinates>): boolean {
        let index = list.findIndex((item) => item.row === coor.row && item.col === coor.col);
        return index !== -1;
    }

    private isHasInArray(array: Array<number>, element: number): boolean {
        let index = array.findIndex((item) => item === element);
        return index > -1;
    }
}

