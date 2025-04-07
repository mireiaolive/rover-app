import { useState } from "react";
import { useRover } from "./hooks/useRover";

export const RoverApp: React.FC = () => {
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [moveSequence, setMoveSequence] = useState<string[]>([]);
    const { position, moveUp, moveDown, moveLeft, moveRight } = useRover();

    const handleMove = (direction: string) => {
        const dangerSequence = ["down", "right", "down"];
        const newSequence = [...moveSequence, direction];
        if (newSequence.length > 3) newSequence.shift();

        const isDanger = dangerSequence.every(
            (move, i) => move === newSequence[i]
        );

        if (isDanger) {
            setAlertMessage("Danger! You have encountered an obstacle.");
            return;
        }

        switch (direction) {
            case "up":
                moveUp();
                break;
            case "down":
                moveDown();
                break;
            case "left":
                moveLeft();
                break;
            case "right":
                moveRight();
                break;
            default:
                break;
        }

        setMoveSequence(newSequence);
    };

    return (
        <div className="rover-container">
            <h1>Mars Rover Mission</h1>
            <div
                className="grid"
                style={{ backgroundImage: `url("/espacio.jpg")` }}
            >
                <img
                    src="/rover.png"
                    alt="Rover"
                    className="rover"
                    style={{
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                    }}
                />
            </div>

            {alertMessage && <div className="alert">{alertMessage}</div>}

            <div className="controls">
                <button onClick={() => handleMove("left")}>◀️ L</button>
                <button onClick={() => handleMove("up")}>🔼 F</button>
                <button onClick={() => handleMove("down")}>🔽 F</button>
                <button onClick={() => handleMove("right")}>▶️ R</button>
            </div>
        </div>
    );
};
