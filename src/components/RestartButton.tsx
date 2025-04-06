type RestartButtonProps = {
    onRestart: () => void;
}

export default function RestartButton({ onRestart }: RestartButtonProps) {
    return (
        <button className="restart-btn mb-4" onClick={onRestart}>
            Restart Game
        </button>
    );
}