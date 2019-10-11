/**
 * Adding commas to a number for better readability
 * @param { Number } 1000000
 * @return { Number } 1,000,000
 * @Link https://jsfiddle.net/Ansonhkg/15Lnpvha/
 */
module.exports = value =>
  new String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
