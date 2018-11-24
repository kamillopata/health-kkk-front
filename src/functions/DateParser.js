export default {
  parseDate(stringDate) {
    const isoString = stringDate.substring(0, 10);
    const timestamp = Date.parse(isoString);
    return new Date(timestamp);
  },
  getNumericDay(stringDate) {
    return this.getLocalDate(stringDate, {
      day: 'numeric',
    });
  },
  getShortWeekday(stringDate) {
    return this.getLocalDate(stringDate, {
      weekday: 'short',
    });
  },
  getLocalDate(stringDate, options) {
    const date = this.parseDate(stringDate);
    return date.toLocaleDateString('en-GB', options);
  },
};
