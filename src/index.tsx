import React from "react";
import ReactDOM from "react-dom/client";
import { RoverApp } from "./RoverApp";
import "./index.css";
import "./styles.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <RoverApp />
    </React.StrictMode>
);
