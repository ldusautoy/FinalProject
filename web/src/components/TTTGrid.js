import React from 'react'
import "./TTTGrid.css"

export const TTTGrid = ({value, onClick}) => {
    
    const determineStyle = (value)=>{
        if(value ==="X"){
            return "TTTX"
        } else if(value === "O"){
            return "TTTO"
        } else{
            return "TTTDefault"
        }

    }
    const style = determineStyle(value)
    
    return(
        <div className={style}>
        <button className={style} onClick={onClick}></button>
        </div>
    )
}