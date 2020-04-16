import React from 'react';
import SessionGridCell from './SessionGridCell';
import { isCurrentHour } from '../helpers/time';
import './SessionGridRow.css';

function generateCells(props) {
  let cells = [];

  for (let i = 0; i < 24; i++) {
    let classNames = ' ';

    if (props.hours.includes(i)) {
      classNames += props.theme;
    }

    if (isCurrentHour(i)) {
      classNames += ' current-hour';
    }

    cells.push(<SessionGridCell key={i} classNames={classNames} />);
  }

  return cells;
}

function SessionGridRow(props) {
  return (
    <div className={'session-grid-row'}>
      {generateCells(props)}
      <span className="session-name">{props.name}</span>
    </div>
  );
}

export default SessionGridRow;
