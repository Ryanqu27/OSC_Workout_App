import { useState, useEffect } from "react";

export default function Timer() {
    const [secondsLeft, setSecondsLeft] = useState(60);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning || secondsLeft <= 0) {
            return;
        }
        const id = setInterval(() => {
            setSecondsLeft((seconds) => seconds - 1);
        }, 1000);

        return () => clearInterval(id);
    }, [isRunning, secondsLeft]);

    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Rest Timer</h2>

            <p style={{ fontSize: "3rem", fontWeight: "bold" }}>
            {minutes}:{String(seconds).padStart(2, "0")}
            </p>

            <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? "Pause" : "Start"}
            </button>

            <button onClick={() => { setIsRunning(false); setSecondsLeft(60); }}>
            Reset
            </button>

            {secondsLeft === 0 && <p><b>Rest complete!</b></p>}
        </div>
    );
}
