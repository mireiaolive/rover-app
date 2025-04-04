import React, { useState } from "react";

export const RoverApp = () => {
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const moveStep = 5;
    const gridSize = 400;

    const moveUp = () =>
        setPosition((prev) => ({
            ...prev,
            top: Math.max(prev.top - moveStep, 0),
        }));
    const moveDown = () =>
        setPosition((prev) => ({
            ...prev,
            top: Math.min(prev.top + moveStep, gridSize - 50),
        }));
    const moveLeft = () =>
        setPosition((prev) => ({
            ...prev,
            left: Math.max(prev.left - moveStep, 0),
        }));
    const moveRight = () =>
        setPosition((prev) => ({
            ...prev,
            left: Math.min(prev.left + moveStep, gridSize - 50),
        }));

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
