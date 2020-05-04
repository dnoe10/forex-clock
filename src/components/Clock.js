import React from 'react';
import moment from 'moment-timezone';
import './Clock.css';

function Clock(props) {
  return (
    <div className="clock">
      <div>
        Local time:{' '}
        {moment().tz(props.timezone).format('dddd, MMMM Do YYYY, h:mm:ss a')}
      </div>
      <div>UTC: {moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a')}</div>
    </div>
  );
}

export default Clock;
