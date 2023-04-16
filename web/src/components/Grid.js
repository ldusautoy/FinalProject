import React from 'react';
import {TTTGrid} from './TTTGrid';

export const Grid = ({grid, wordBank, onClick}) => {
    return (
<>
{grid.map((value, atIndex) => {
    const word = wordBank[atIndex]
    return(<TTTGrid value={value} onClick={() => value === null && onClick(atIndex)} word={word} />)
})}
</>)
}
