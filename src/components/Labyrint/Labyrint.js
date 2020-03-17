import React, { useState } from 'react';

import App, { randomInteger } from '../../App';

const Labyrint = () => {
  const [initialPosition, setInitialPosition] = useState(
    [randomInteger(1, 3), randomInteger(1, 3)].join('')
  );

  return (
    <App
      initialPosition={initialPosition}
      setInitialPosition={setInitialPosition}
    />
  );
};

export default Labyrint;
