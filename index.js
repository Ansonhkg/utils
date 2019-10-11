/**
 * Turn an array of numbers to cumulative sum array
 * @param { Array } [1,2,3,4,5]
 * @return { Array } [1,3,6,10,15]
 * @example https://jsfiddle.net/Ansonhkg/ur8kbmvh
 */
const accumulate = (a, c) => a + c;

const cusum = arr =>
  arr.map((v, i, data) => {
    return data.slice(0, i + 1).reduce(accumulate);
  });

module.exports = {
  cusum
};
