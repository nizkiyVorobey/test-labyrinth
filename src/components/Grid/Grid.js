import React, {useEffect, useState} from 'react';
import {randomInteger} from "../../App";

import {v4 as uuidv4} from "uuid";


const gridSizeRow = [];
const gridSizeColums = [];

function createStartGrid(rows, column) {
    gridSizeRow.length = 0;
    gridSizeColums.length = 0;

    for(let i = 0; i < rows; i++) {
        gridSizeRow.push({id:uuidv4()})
    }
    for(let i = 0; i < column; i++) {
        gridSizeColums.push({id:uuidv4()})
    }
}

export const Grid = (props) => {
    const { initialPosition, curentPositionsState, startGame, setStartGame, setInitialPosition, setArrowsDirection } = props;
    const [answer, setAnswer] = useState(false);
    const [reload, setReload] = useState(null);
    const [id, setId] = useState(null);
    createStartGrid(3,3);


    useEffect(() => {
        if(reload === true) {
            setInitialPosition([randomInteger(1,3), randomInteger(1,3)].join(''));
            setArrowsDirection([]);
            setStartGame(true);
            setReload(null)
        } else if(reload === false) {
            setStartGame(false);
        }

    }, [reload])

    useEffect(() => {
        let newReload = null;
        if(id !== null){
            if(id === curentPositionsState.join('')) {
                // eslint-disable-next-line no-restricted-globals
                newReload = confirm('Yuo won, want play again?');
            } else {
                // eslint-disable-next-line no-restricted-globals
                newReload = confirm('Yuo loose, want play again?');
            }
            setReload(newReload);
            setAnswer(false);
        }
    }, [id])


    const handleClick = (event) => {
        const {target} = event;
        if(startGame === false && reload === null) {
            setAnswer(true);
            setTimeout(() => {
                setId(target.id);
            }, 100)
        }
    };

    return (
        <div>
            {
                gridSizeRow.map((row, indexRow) => (
                   <div className="grid-row" key={row.id}>
                       {
                           gridSizeColums.map((column, indexColumn) => (
                               <div
                                   key={column.id}
                                   onClick={handleClick}
                                   className={
                                       `grid-column
                                       ${initialPosition ===  `${indexRow + 1}${indexColumn + 1}`? 'active': ''}
                                       ${(curentPositionsState.join('') ===  `${indexRow + 1}${indexColumn + 1}`) && answer ? 'right-answer': ''}
                                       }`
                                   }
                                   id={`${indexRow + 1}${indexColumn + 1}`}
                               >
                               </div>
                           ))
                       }
                   </div>
               ))
            }
        </div>
    )
}
