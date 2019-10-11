const utils = {
  array: {
    cusum: params => require("./utils/array/cusum")(params)
  },
  image: {
    saveDiv: (divId, filename) =>
      require("./utils/image/saveDiv")(divId, filename)
  }
};

console.log(utils.array.cusum([1, 2, 3, 4, 5]));

module.exports = {
  utils
};
