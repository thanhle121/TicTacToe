export type Player = 'X' | 'O' | null;

export type GameHistory = {
    winner: Player | 'draw';
    board: Player[];
}

export type Score = {
    X: number;
    O: number;
}