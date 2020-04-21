import moment from 'moment-timezone';

function convertHourToDifferentTimeZone(hour, timezone) {
  let offset = moment.tz.zone(timezone).utcOffset(moment()) / 60;

  /**
   * POSIX compatibility requires that the offsets are inverted.
   * Therefore, Etc/GMT-X will have an offset of +X
   * and Etc/GMT+X will have an offset of -X.
   */
  if (offset < 0) {
    for (let i = 0; i < offset * -1; i++) {
      hour++;
      hour = hour > 23 ? 0 : hour;
    }
  } else if (offset > 0) {
    for (let i = 0; i < offset; i++) {
      hour--;
      hour = hour < 0 ? 23 : hour;
    }
  }

  return hour;
}

function convertHoursToDifferentTimezone(hours, timezone) {
  return hours.map((hour) => convertHourToDifferentTimeZone(hour, timezone));
}

function getCurrentHour(timezone) {
  return moment().tz(timezone).hour();
}

export { convertHoursToDifferentTimezone, getCurrentHour };
