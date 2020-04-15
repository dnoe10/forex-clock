import React from 'react';
import './SessionGridHeaderCell.css';

function isCurrentHour(props) {
  return props.hour === new Date().getHours() ? 'current-hour' : '';
}

function SessionGridHeaderCell(props) {
  return (
    <div className={'session-grid-header-cell ' + isCurrentHour(props)}>
      {props.hour}
    </div>
  );
}

export default SessionGridHeaderCell;
