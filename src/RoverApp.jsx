import React, { useState } from "react";

export const RoverApp = () => {
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const moveStep = 5;

    const moveUp = () =>
        setPosition((prev) => ({ ...prev, top: prev.top - moveStep }));
    const moveDown = () =>
        setPosition((prev) => ({ ...prev, top: prev.top + moveStep }));
    const moveLeft = () =>
        setPosition((prev) => ({ ...prev, left: prev.left - moveStep }));
    const moveRight = () =>
        setPosition((prev) => ({ ...prev, left: prev.left + moveStep }));

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
