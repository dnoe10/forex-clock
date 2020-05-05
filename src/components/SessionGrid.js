import React from 'react';
import SessionGridHeader from './SessionGridHeader';
import SessionGridRow from './SessionGridRow';
import SessionGridFooter from './SessionGridFooter';
import { convertHoursToDifferentTimezone } from '../helpers/time';
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

function getSessionHours(session, timezone) {
  let sessionHours = GMT_SESSION_HOURS[session];
  return convertHoursToDifferentTimezone(sessionHours, timezone);
}

function SessionGrid(props) {
  return (
    <div className="session-grid">
      <SessionGridHeader currentHour={props.currentHour} />
      <SessionGridRow
        currentHour={props.currentHour}
        name={LONDON}
        hours={getSessionHours(LONDON, props.timezone)}
        theme="green"
        timezone={props.timezone}
      />
      <SessionGridRow
        currentHour={props.currentHour}
        name={NEW_YORK}
        hours={getSessionHours(NEW_YORK, props.timezone)}
        theme="orange"
        timezone={props.timezone}
      />
      <SessionGridRow
        currentHour={props.currentHour}
        name={SYDNEY}
        hours={getSessionHours(SYDNEY, props.timezone)}
        theme="blue"
        timezone={props.timezone}
      />
      <SessionGridRow
        currentHour={props.currentHour}
        name={TOKYO}
        hours={getSessionHours(TOKYO, props.timezone)}
        theme="yellow"
        timezone={props.timezone}
      />
      <SessionGridFooter
        darkModeEnabled={props.darkModeEnabled}
        onChangeDarkMode={props.onChangeDarkMode}
        onChangeTimezone={props.onChangeTimezone}
        timezone={props.timezone}
      />
    </div>
  );
}

export default SessionGrid;
