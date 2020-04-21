import React from 'react';
import './SessionGridCell.css';

function SessionGridCell(props) {
  return (
    <div
      className={
        'session-grid-cell ' + (props.currentHour ? 'current-hour ' : '')
      }
    >
      &nbsp;&nbsp;
      <div
        className={
          'session-grid-cell-inner ' +
          (props.marketOpen ? 'market-open ' : '') +
          (props.firstHour ? 'first-hour ' : '') +
          (props.lastHour ? 'last-hour ' : '')
        }
      ></div>
    </div>
  );
}

export default SessionGridCell;
