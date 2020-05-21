import React from 'react';
import SessionGridHeaderCell from './SessionGridHeaderCell';
import './SessionGridHeader.scss';

function generateCells(currentHour) {
  let cells = [];

  for (let i = 0; i < 24; i++) {
    cells.push(
      <SessionGridHeaderCell key={i} hour={i} currentHour={i === currentHour} />
    );
  }

  return cells;
}

function SessionGridHeader(props) {
  return (
    <div className="session-grid-header">
      {generateCells(props.currentHour)}
    </div>
  );
}

export default SessionGridHeader;
