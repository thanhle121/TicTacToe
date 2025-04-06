import { Player } from "../types/gameTypes"
import Square from "./Square";

type BoardProps = {
    board: Player[];
    onSquareClick: (index: number) => void;
}

export default function Board({ board, onSquareClick }: BoardProps) {
    return(
        <div className="board w-fit ">
            {board.map((cell, index) => (
                <Square key={index} value={cell} onClick={()=>onSquareClick(index)} />
            ))}
        </div>
    )
}