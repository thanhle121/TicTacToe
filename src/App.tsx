import { useState } from "react";
import { GameHistory, Player, Score } from "./types/gameTypes";
import ScoreBoard from "./components/ScoreBoard";
import Board from "./components/Board";
import RestartButton from "./components/RestartButton";
import History from "./components/History";
import './styles.css'

export default function App() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | 'draw' | null>(null);
  const [history, setHistory] = useState<GameHistory[]>([]);
  const [score, setScore] = useState<Score>({ X: 0, O: 0 });

  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //ngang
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //cột
    [0, 4, 8], [2, 4, 6] //chéo
  ]
  
  const checkWinner = (board: Player[]) => {
    for (let [a, b, c] of winConditions){
      if (board[a] && board[a] === board[b] && board[a] === board[c]){
        return board[a];
      }
    }
    return board.every(cell => cell!== null) ? 'draw' : null;
  }

  const updateScore = (result: Player | 'draw') => {
    if (result === 'X' || result === 'O') {
      setScore({...score, [result]: score[result] + 1 });
    }
  }

  const handleClick = (index: number) => {
    if(board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result){
      setWinner(result)
      updateScore(result)
      setHistory([...history, {winner: result, board: newBoard}]);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  }

  const handleClearHistory = () => {
    setHistory([])
    setScore({ X: 0, O: 0 });
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  }

  return (
    <div className="game w-screen min-h-screen bg-gradient-to-b from-[#9ff8da] to-[#6496d3]">
      <h2 className="text-4xl font-bold text-black-700 mb-4">TIC TAC TOE</h2>
      <div className="w-full flex justify-center mb-4">
        <ScoreBoard score={score} />
      </div>
      <Board board={board} onSquareClick={handleClick} />
      {winner && <h3 className="text-xl mt-4 text-green-600 font-semibold">{winner === 'draw' ? `It's a draw!`: `Winner: ${winner}`}</h3>}
      <div>
        <RestartButton onRestart={resetGame} />
        <button onClick={handleClearHistory} className="ml-2">Clear History</button>
      </div>
      <History history={history} />

    </div>
  )

}