import React, {useState} from 'react';

import App from '../../App';
import { randomInteger } from "../../App";
import {v4 as uuidv4} from "uuid";



const Labyrint = () => {
    const [initialPosition, setInitialPosition] = useState([randomInteger(1,3), randomInteger(1,3)].join(''));
    return (
        <App
            initialPosition={initialPosition}
            setInitialPosition={setInitialPosition}
        />
    )
};

export default Labyrint;
