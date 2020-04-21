import React from 'react';
import moment from 'moment-timezone';
import './Clock.css';

function Clock(props) {
  return (
    <div className="clock">
      <div>{moment().tz(props.timezone).format()}</div>
      <div>{moment().tz(props.timezone).utc().format()}</div>
    </div>
  );
}

export default Clock;
