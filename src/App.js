import React from 'react';
import SessionGrid from './components/SessionGrid';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { darkModeEnabled: false };
  }

  onChangeDarkMode = () => {
    this.setState((state) => ({
      darkModeEnabled: !state.darkModeEnabled,
    }));
  };

  render() {
    return (
      <div className={'app ' + (this.state.darkModeEnabled ? 'dark-mode' : '')}>
        <SessionGrid
          darkModeEnabled={this.state.darkModeEnabled}
          onChangeDarkMode={this.onChangeDarkMode}
        />
      </div>
    );
  }
}

export default App;
