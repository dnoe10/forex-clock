import React from 'react';
import SessionGridCell from './SessionGridCell';
import './SessionGridRow.css';

function generateCells(props) {
  let cells = [];

  for (let i = 0; i < 24; i++) {
    cells.push(
      <SessionGridCell
        key={i}
        currentHour={props.currentHour === i}
        firstHour={props.hours[0] === i}
        lastHour={props.hours[props.hours.length - 1] === i}
        marketOpen={props.hours.includes(i)}
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
