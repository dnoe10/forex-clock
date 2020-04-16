function isCurrentHour(hour) {
  return hour === new Date().getHours();
}

function convertHourToLocalTimeZone(hour) {
  let hoursOffset = new Date().getTimezoneOffset() / 60;

  if (hoursOffset < 0) {
    for (let i = 0; i < hoursOffset; i++) {
      hour++;
      hour = hour > 23 ? 0 : hour;
    }
  } else if (hoursOffset > 0) {
    for (let i = 0; i < hoursOffset; i++) {
      hour--;
      hour = hour < 0 ? 23 : hour;
    }
  }

  return hour;
}

function convertHoursToLocalTimezone(hours) {
  return hours.map((hour) => convertHourToLocalTimeZone(hour));
}

export { isCurrentHour, convertHoursToLocalTimezone };
