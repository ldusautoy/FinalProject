import React from 'react';
import {TTTGrid} from './TTTGrid';

export const Grid = ({grid, onClick}) => {
    return (
    <div>
        {grid.map((value, atIndex) => 
             <TTTGrid value={value} onClick={() => value === null && onClick(atIndex)} Hello />
            )}
    </div>
      
            
            )
}
