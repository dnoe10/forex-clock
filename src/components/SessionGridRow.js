import React from 'react';
import SessionGridCell from './SessionGridCell';
import './SessionGridRow.css';

function generateCells() {
  let cells = [];

  for (let i = 0; i < 24; i++) {
    cells.push(<SessionGridCell />);
  }

  return cells;
}

function SessionGridRow() {
  return <div className="session-grid-row">{generateCells()}</div>;
}

export default SessionGridRow;
