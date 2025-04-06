type SquareProps = {
    value: string | null;
    onClick: () => void;
}

export default function Square({ value, onClick }: SquareProps) {
    return (
        <button className="cell text-3xl font-bold" onClick={onClick}>
            {value}
        </button>
    );
}