import { Node } from "cc";

export type Coordinates = {
    row: number,
    col: number,
}

export enum FruitType {
    Apple,
    Caramel,
    Peach,
    Pear,
    Pomegranate,
    Grapes,
    Watermelon
}

export enum CellType {
    Empty,
    Fruit,
    Hint
}

export enum ItemType {
    Boom,
    Undo,
    Hammer,
    None
}

export type DataUser = {
    BestScore: number,
    checkLog: Object
}

export type Turn = {
    cell: Node,
    coor: Coordinates,
    listNewCell: Node[],
    listNextCell: Node[],
    path: Coordinates[],
    prev: Turn;
}

export enum AudioType {
    Button,
    Click,
    Boom,
    Hammer,
    Notice,
    Slide,
    Tick,
    Award,
    Lose
}
