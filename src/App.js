import React from 'react';
import moment from 'moment-timezone';
import SessionGrid from './components/SessionGrid';
import { getCurrentHour } from './helpers/time';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      darkModeEnabled:
        window.localStorage.getItem('darkModeEnabled') === 'true',
      timezone: moment.tz.guess(),
    };
    this.state.currentHour = getCurrentHour(this.state.timezone);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () =>
        this.setState((state) => ({
          currentHour: getCurrentHour(state.timezone),
        })),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  onChangeDarkMode = () => {
    this.setState((state) => {
      window.localStorage.setItem('darkModeEnabled', !state.darkModeEnabled);
      return { darkModeEnabled: !state.darkModeEnabled };
    });
  };

  onChangeTimezone = (e) => {
    let timezone = e.target.value;
    this.setState({ currentHour: getCurrentHour(timezone), timezone });
  };

  render() {
    return (
      <div className={'app ' + (this.state.darkModeEnabled ? 'dark-mode' : '')}>
        <SessionGrid
          currentHour={this.state.currentHour}
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
