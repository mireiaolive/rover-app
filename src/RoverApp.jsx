import React from "react";
import { useRover } from "./hooks/useRover";

export const RoverApp = () => {
    const { position, moveUp, moveDown, moveLeft, moveRight } = useRover();

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

            <div className="controls">
                <button onClick={moveLeft}>◀️ L</button>
                <button onClick={moveUp}>🔼 F</button>
                <button onClick={moveDown}>🔽 F</button>
                <button onClick={moveRight}>▶️ R</button>
            </div>
        </div>
    );
};
