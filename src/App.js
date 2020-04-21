import React from 'react';
import moment from 'moment-timezone';
import SessionGrid from './components/SessionGrid';
import { getCurrentHour } from './helpers/time';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      darkModeEnabled: false,
      timezone: moment.tz.guess(),
    };
  }

  onChangeDarkMode = () => {
    this.setState((state) => ({
      darkModeEnabled: !state.darkModeEnabled,
    }));
  };

  onChangeTimezone = (e) => {
    this.setState({ timezone: e.target.value });
  };

  render() {
    return (
      <div className={'app ' + (this.state.darkModeEnabled ? 'dark-mode' : '')}>
        <SessionGrid
          currentHour={getCurrentHour(this.state.timezone)}
          darkModeEnabled={this.state.darkModeEnabled}
          onChangeDarkMode={this.onChangeDarkMode}
          onChangeTimezone={this.onChangeTimezone}
          timezone={this.state.timezone}
        />
      </div>
    );
  }
}

export default App;
