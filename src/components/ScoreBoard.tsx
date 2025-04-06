import { Score } from "../types/gameTypes"

type ScoreBoardProps = {
    score: Score;
}

export default function ScoreBoard({ score }: ScoreBoardProps) {
    return(
        <div className="score flex gap-8 mb-4 w-fit text-lg font-medium">
            <p className="text-black-400">Player X: {score.X}</p>
            <p className="text-black-400">Player O: {score.O}</p>
        </div>
    )
}    