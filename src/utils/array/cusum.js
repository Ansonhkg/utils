const sum = require("../math/sum");

/**
 * Turn an array of numbers to cumulative sum array
 * @param { Array } [1,2,3,4,5]
 * @return { Array } [1,3,6,10,15]
 * @example https://jsfiddle.net/Ansonhkg/ur8kbmvh
 */
module.exports = arr =>
  arr.map((v, i, data) => {
    return data.slice(0, i + 1).reduce(sum);
  });
