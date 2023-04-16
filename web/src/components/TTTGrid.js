import React from 'react'
import "./TTTGrid.css"

//const wordBank = [word1, word2, word3, word4, wor "]

export const TTTGrid = ({ value, onClick, word }) => {

    const determineStyle = (value) => {
        if (value === "X") {
            return "TTTX"
        } else if (value === "O") {
            return "TTTO"
        } else {
            return "TTTDefault"
        }

    }
    const style = determineStyle(value)

    return (<div>
        <div className={style}>
            <button className={style} onClick={onClick}></button>
            {word}
        </div>
    </div>
    )
}