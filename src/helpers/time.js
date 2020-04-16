function isCurrentHour(hour) {
  return hour === new Date().getHours();
}

export { isCurrentHour };
