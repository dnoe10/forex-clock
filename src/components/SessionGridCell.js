import React from 'react';
import './SessionGridCell.scss';

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
          (props.marketClosed ? 'market-closed ' : '') +
          (props.sessionOpen ? 'session-open ' : '') +
          (props.firstHour ? 'first-hour ' : '') +
          (props.lastHour ? 'last-hour ' : '')
        }
      ></div>
    </div>
  );
}

export default SessionGridCell;
