import React from 'react';
import SessionGridHeader from './SessionGridHeader';
import SessionGridRow from './SessionGridRow';
import './SessionGrid.css';

const LONDON = 'London';
const NEW_YORK = 'New York';
const SYDNEY = 'Sydney';
const TOKYO = 'Tokyo';

function getSessionHours() {
  return {
    [LONDON]: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [NEW_YORK]: [5, 6, 7, 8, 9, 10, 11, 12, 13],
    [SYDNEY]: [14, 15, 16, 17, 18, 19, 20, 21, 22],
    [TOKYO]: [16, 17, 18, 19, 20, 21, 22, 23, 0],
  };
}

function SessionGrid() {
  return (
    <div className="session-grid">
      <SessionGridHeader />
      <SessionGridRow
        name={LONDON}
        hours={getSessionHours()[LONDON]}
        theme="green"
      />
      <SessionGridRow
        name={NEW_YORK}
        hours={getSessionHours()[NEW_YORK]}
        theme="orange"
      />
      <SessionGridRow
        name={SYDNEY}
        hours={getSessionHours()[SYDNEY]}
        theme="blue"
      />
      <SessionGridRow
        name={TOKYO}
        hours={getSessionHours()[TOKYO]}
        theme="yellow"
      />
    </div>
  );
}

export default SessionGrid;
