import { DataUser } from "./DataTypes";

export class DataGame {
    public static dataGame: DataUser = {
        BestScore: 0,
        checkLog: {}
    }

    public static gameVolume: number = 1;
    public static musicStatus: boolean = true;
    public static isLoad: boolean = false; 
}