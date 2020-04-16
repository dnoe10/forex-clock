import React from 'react';
import './SessionGridCell.css';

function SessionGridCell(props) {
  return (
    <div className={'session-grid-cell ' + props.classNames}>&nbsp; &nbsp;</div>
  );
}

export default SessionGridCell;
