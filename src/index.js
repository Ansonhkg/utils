// Array
const { cusum } = require("./utils/array/cusum");

// Image
const { saveDiv } = require("./utils/image/saveDiv");

const utils = {
  array: {
    cusum
  },
  image: {
    saveDiv
  }
};
module.exports = {
  utils
};
