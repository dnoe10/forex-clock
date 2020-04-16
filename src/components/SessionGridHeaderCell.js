import React from 'react';
import { isCurrentHour } from '../helpers/time';
import './SessionGridHeaderCell.css';

function SessionGridHeaderCell(props) {
  if (isCurrentHour(props.hour)) {
    return (
      <div className="session-grid-header-cell current-hour">{props.hour}</div>
    );
  }

  return <div className="session-grid-header-cell">{props.hour}</div>;
}

export default SessionGridHeaderCell;
