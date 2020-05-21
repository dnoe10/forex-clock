import React from 'react';
import { ReactComponent as MoonLogo } from '../images/moon.svg';
import { ReactComponent as SunLogo } from '../images/sun.svg';
import './DarkModeButton.scss';

function DarkModeButton(props) {
  let button;

  if (props.darkModeEnabled) {
    button = <SunLogo title="Disable dark mode" />;
  } else {
    button = <MoonLogo title="Enable dark mode" />;
  }

  return (
    <button
      type="button"
      className="dark-mode-button"
      onClick={props.onChangeDarkMode}
    >
      {button}
    </button>
  );
}

export default DarkModeButton;
