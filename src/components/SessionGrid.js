import React from 'react';
import SessionGridHeader from './SessionGridHeader';
import SessionGridRow from './SessionGridRow';
import SessionGridFooter from './SessionGridFooter';
import { convertHoursToLocalTimezone } from '../helpers/time';
import './SessionGrid.css';

const LONDON = 'London';
const NEW_YORK = 'New York';
const SYDNEY = 'Sydney';
const TOKYO = 'Tokyo';
const GMT_SESSION_HOURS = {
  [LONDON]: [7, 8, 9, 10, 11, 12, 13, 14, 15],
  [NEW_YORK]: [12, 13, 14, 15, 16, 17, 18, 19, 20],
  [SYDNEY]: [21, 22, 23, 0, 1, 2, 3, 4, 5],
  [TOKYO]: [23, 0, 1, 2, 3, 4, 5, 6, 7],
};

function getSessionHours(session) {
  let sessionHours = GMT_SESSION_HOURS[session];
  return convertHoursToLocalTimezone(sessionHours);
}

function SessionGrid(props) {
  return (
    <div className="session-grid">
      <SessionGridHeader />
      <SessionGridRow
        name={LONDON}
        hours={getSessionHours(LONDON)}
        theme="green"
      />
      <SessionGridRow
        name={NEW_YORK}
        hours={getSessionHours(NEW_YORK)}
        theme="orange"
      />
      <SessionGridRow
        name={SYDNEY}
        hours={getSessionHours(SYDNEY)}
        theme="blue"
      />
      <SessionGridRow
        name={TOKYO}
        hours={getSessionHours(TOKYO)}
        theme="yellow"
      />
      <SessionGridFooter
        darkModeEnabled={props.darkModeEnabled}
        onChangeDarkMode={props.onChangeDarkMode}
      />
    </div>
  );
}

export default SessionGrid;
