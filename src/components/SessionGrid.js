import React from 'react';
import SessionGridHeader from './SessionGridHeader';
import SessionGridRow from './SessionGridRow';
import './SessionGrid.css';

function SessionGrid() {
  return (
    <div className="session-grid">
      <SessionGridHeader />
      <SessionGridRow name="London" theme="Green" />
      <SessionGridRow name="New York" theme="Orange" />
      <SessionGridRow name="Sydney" theme="Blue" />
      <SessionGridRow name="Tokyo" theme="Yellow" />
    </div>
  )
}

export default SessionGrid;