const utils = {
  array: {
    cusum: params => require("./utils/array/cusum")(params)
  },
  image: {
    saveDiv: (divId, filename) =>
      require("./utils/image/saveDiv")(divId, filename)
  },
  math: {
    commas: value => require("./utils/math/commas")(value)
  }
};

module.exports = utils;
