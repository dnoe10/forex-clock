import React from 'react';
import './SessionGridCell.css';

function SessionGridCell(props) {
  return (
    <div
      className={
        'session-grid-cell ' +
        (props.currentHour ? 'current-hour ' : '') +
        (props.marketOpen ? 'market-open ' : '')
      }
    >
      &nbsp; &nbsp;
    </div>
  );
}

export default SessionGridCell;
