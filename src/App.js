import React, {useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';


import { Grid } from "./components/Grid/Grid";
import {ArrowList} from "./components/ArrowList/Arrolist";

export function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

const arrowDirectionName = {
    1: 'up',
    2: 'down',
    3: 'left',
    4: 'right',
};

function App({ initialPosition, setInitialPosition }) {
    const arrowsDirectionFiled = [];
    let currentPosition = [...initialPosition].map(item => Number(item));

    const [arrowsDirection, setArrowsDirection] = useState([]);
    const [curentPositionsState, SetCurentPositionsState] = useState([]);
    const [startGame, setStartGame] = useState(null);


    const hadleStart = () => {
        if(startGame !== false) {
            setStartGame(true);

            while(arrowsDirectionFiled.length < 10) {
                const newArrow = randomInteger(1,4);

                if(arrowDirectionName[newArrow] === 'up') {
                    if ((currentPosition[0] - 1) >= 1 ) {
                        currentPosition[0] -=1;
                        arrowsDirectionFiled.push({
                            id: uuidv4(),
                            direction: 'up',
                        });
                    }
                }

                if (arrowDirectionName[newArrow] === 'down') {
                    if ((currentPosition[0] + 1) <= 3 ) {
                        currentPosition[0] += 1;
                        arrowsDirectionFiled.push({
                            id: uuidv4(),
                            direction: 'down',
                        });
                    }
                }

                if(arrowDirectionName[newArrow] === 'left') {
                    if ((currentPosition[1] - 1) >= 1) {
                        currentPosition[1] -= 1;
                        arrowsDirectionFiled.push({
                            id: uuidv4(),
                            direction: 'left',
                        });
                    }
                }

                if(arrowDirectionName[newArrow] === 'right') {
                    if ((currentPosition[1] + 1) <= 3 ) {
                        currentPosition[1] += 1;
                        arrowsDirectionFiled.push({
                            id: uuidv4(),
                            direction: 'right',
                        });
                    }
                }
            }
            setArrowsDirection(arrowsDirectionFiled);
            SetCurentPositionsState(currentPosition);
        }
        setStartGame(false);
    };

  return (
    <div className="app">
      <div className="grid-button-container">
          <button
              type="button"
              onClick={hadleStart}
              className="start-game-btn"
              disabled={(startGame === null) || startGame ? false : true}
          >
              Start
          </button>

          <div>
              <Grid
                  initialPosition={initialPosition}
                  setInitialPosition={setInitialPosition}
                  curentPositionsState={curentPositionsState}
                  startGame={startGame}
                  setStartGame={setStartGame}
                  setArrowsDirection={setArrowsDirection}
              />
              <ArrowList arrowsDirection={arrowsDirection} />
          </div>
      </div>

    </div>
  );
}

export default App;
