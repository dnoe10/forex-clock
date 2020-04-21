import React from 'react';
import './SessionGridHeaderCell.css';

function SessionGridHeaderCell(props) {
  return (
    <div
      className={
        'session-grid-header-cell ' + (props.currentHour ? 'current-hour' : '')
      }
    >
      {props.hour}
    </div>
  );
}

export default SessionGridHeaderCell;
