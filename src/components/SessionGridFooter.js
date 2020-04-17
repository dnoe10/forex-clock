import React from 'react';
import DarkModeButton from './DarkModeButton';

function SessionGridFooter(props) {
  return (
    <div className="session-grid-footer">
      <DarkModeButton
        darkModeEnabled={props.darkModeEnabled}
        onChangeDarkMode={props.onChangeDarkMode}
      />
    </div>
  );
}

export default SessionGridFooter;
