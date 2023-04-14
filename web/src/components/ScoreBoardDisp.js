import React from "react";
import "./scoreBoardDisp.css"

export const ScoreBoardDisp = ({scoreBoard, crabPlaying}) => {
    const {crabScore, hookScore} = scoreBoard;
    return (
        <div className="scoreBoardDisp">
            <span className={`score crabscore ${!crabPlaying && "crabnotplaying"}`}>Crab : {crabScore}</span>
            <span> </span>
            <span className={`score hookscore ${crabPlaying && "hooknotplaying"}`}>Hook : {hookScore}</span>
        </div>
    )
}