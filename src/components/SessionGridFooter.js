import React from 'react';
import DarkModeButton from './DarkModeButton';
import TimezoneSelect from './TimezoneSelect';
import './SessionGridFooter.css';

function SessionGridFooter(props) {
  return (
    <div className="session-grid-footer">
      <TimezoneSelect
        currentTimezone={props.currentTimezone}
        onChangeTimezone={props.onChangeTimezone}
        timezone={props.timezone}
      />

      <DarkModeButton
        darkModeEnabled={props.darkModeEnabled}
        onChangeDarkMode={props.onChangeDarkMode}
      />
    </div>
  );
}

export default SessionGridFooter;
