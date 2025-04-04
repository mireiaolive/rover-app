import React, { useState } from "react";

export const useRover = (moveStep = 5, gridSize = 400) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [obstacle, setObstacle] = useState(false);

    const obstacles = [
        { top: 50, left: 50 },
        { top: 100, left: 100 },
        { top: 200, left: 150 },
    ];

    const isObstacle = (newPosition) => {
        obstacles.some((obstacle) => {
            obstacle.top === newPosition.top &&
                obstacle.left === newPosition.left;
        });
    };

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

    return { position, moveUp, moveDown, moveLeft, moveRight };
};
