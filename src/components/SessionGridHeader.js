import React from 'react';
import SessionGridHeaderCell from './SessionGridHeaderCell';
import './SessionGridHeader.css';

function generateCells() {
  let cells = [];

  for (let i = 0; i < 24; i++) {
    cells.push(<SessionGridHeaderCell hour={i} />);
  }

  return cells;
}

function SessionGridHeader() {
  return <div className="session-grid-header">{generateCells()}</div>;
}

export default SessionGridHeader;
