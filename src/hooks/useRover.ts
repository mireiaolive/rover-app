import { useState } from "react";

type Position = {
    top: number;
    left: number;
};

export const useRover = (moveStep = 5, gridSize = 400) => {
    const [position, setPosition] = useState<Position>({ top: 0, left: 0 });

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

    return {
        position,
        moveUp,
        moveDown,
        moveLeft,
        moveRight,
    };
};
