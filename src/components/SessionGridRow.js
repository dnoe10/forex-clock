import React from 'react';
import moment from 'moment-timezone';
import { SUNDAY, FRIDAY, SATURDAY } from '../helpers/time';
import SessionGridCell from './SessionGridCell';
import './SessionGridRow.css';

function isMarketClosed(timezone, hour) {
  let utcMoment = moment().tz(timezone).hour(hour).tz('UTC');

  if (utcMoment.day() === SATURDAY) {
    return true;
  } else if (utcMoment.day() === FRIDAY && utcMoment.hour() >= 21) {
    return true;
  } else if (utcMoment.day() === SUNDAY && utcMoment.hour() < 21) {
    return true;
  }

  return false;
}

function generateCells(props) {
  let cells = [];

  for (let i = 0; i < 24; i++) {
    cells.push(
      <SessionGridCell
        key={i}
        currentHour={props.currentHour === i}
        firstHour={props.hours[0] === i}
        lastHour={props.hours[props.hours.length - 1] === i}
        marketClosed={isMarketClosed(props.timezone, i)}
        sessionOpen={props.hours.includes(i)}
      />
    );
  }

  return cells;
}

function SessionGridRow(props) {
  return (
    <div className={'session-grid-row ' + props.theme}>
      {generateCells(props)}
      <span className="session-name">{props.name}</span>
    </div>
  );
}

export default SessionGridRow;
