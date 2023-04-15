import React from 'react';
import { useState } from 'react';
import "./Grid.css";
import {Grid} from './Grid'
import  { ScoreBoardDisp} from './ScoreBoardDisp';
import {ResetButton} from './ResetButton';
 
const NoughtsAndCrosses = () => {

   const winCombo = [
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6]
    ]
    const [grid, setGrid] = useState(Array(9).fill(null));
    const [crabPlaying, setCrabPlaying] = useState(true);
    const [scoreBoard, setscoreBoard] = useState({crabScore: 0, hookScore:0})
    const [gameEnd, setgameEnd] = useState(false);
  
    const handleGridClick = (gridIndex) => {
      const updatedGrid = grid.map((value, atIndex) => {
        if(atIndex === gridIndex) {
          return crabPlaying === true ? "X" : "O";}
          else {
            return value;
          }})
        const winner = winCheck(updatedGrid);
  
        if(winner) {
          if(winner ==="O"){
              let{hookScore} = scoreBoard;
              hookScore += 1
              setscoreBoard({...scoreBoard, hookScore})
  
          } else {
            let{crabScore} = scoreBoard;
            crabScore += 1
            setscoreBoard({...scoreBoard, crabScore})
  
          }
        }
  
        setGrid(updatedGrid);
        setCrabPlaying(!crabPlaying);
      }
  
      const winCheck = (grid) =>{
        for(let index = 0; index < winCombo.length; index++){
          const [x,y,z] = winCombo[index];
  
          if (grid[x] && grid[x] === grid[y] && grid[y] === grid[z])
            {
            setgameEnd(true)         
            return grid[x];
          }
        }
      }
    
  
    const resetGrid = () => {
      setgameEnd(false);
      setGrid(Array(9).fill(null));
    }
    return (<div>
         <ScoreBoardDisp scoreBoard={scoreBoard} crabPlaying={crabPlaying}></ScoreBoardDisp>
         <ResetButton resetGrid={resetGrid}></ResetButton>

         <div className='grid'>
         <Grid grid={grid} onClick={gameEnd ? resetGrid : handleGridClick}></Grid></div>
    </div>
      
        

    );
}
 
export default NoughtsAndCrosses;