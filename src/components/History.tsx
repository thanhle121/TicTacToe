import { GameHistory } from "../types/gameTypes"

type HistoryProps = {
    history: GameHistory[];
}

export default function History({ history }: HistoryProps) {
    return (
        <div className="history">
            <h2 className="text-xl font-bold">Game History</h2>
            <ul>
                {history.map((game, index) => (
                    <li key={index} className="font-semibold">
                        Game {index + 1}: {game.winner === 'draw' ? 'Draw' : `Winner: ${game.winner}`}
                    </li>
                ))}
            </ul>
        </div>
    );
}