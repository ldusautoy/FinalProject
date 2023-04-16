import React from "react";
import "./Button.css"

export const ResetButton = ({ resetGrid }) => {
    return (
        <button className="button" onClick={resetGrid}>Reset</button>
    )
}