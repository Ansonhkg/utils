// Array
const { cusum } = require("./utils/array/cusum");

// Image
const {
  saveDivAsImage,
  run_saveDivAsImage
} = require("./utils/image/saveDivAsImage");

run_saveDivAsImage();

module.exports = {
  cusum,
  saveDivAsImage
};
