import React from 'react';
import Clock from './Clock';
import DarkModeButton from './DarkModeButton';
import TimezoneSelect from './TimezoneSelect';
import './SessionGridFooter.css';

function SessionGridFooter(props) {
  return (
    <div className="session-grid-footer">
      <Clock timezone={props.timezone}></Clock>
      <TimezoneSelect
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
