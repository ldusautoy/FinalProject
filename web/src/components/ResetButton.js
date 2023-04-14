import React from "react";
import "./ResetButton.css"

export const ResetButton = ({resetGrid}) => {
    return (
        <button className="resetbttn" onClick={resetGrid}>Reset</button>
    )
}