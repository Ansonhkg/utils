const utils = {
  /**
   *  ===== Array =====
   */
  array: {
    cusum: params => require("./utils/array/cusum")(params)
  },

  /**
   *  ===== image =====
   */
  image: {
    saveDiv: (divId, filename) =>
      require("./utils/image/saveDiv")(divId, filename)
  },

  /**
   *  ===== Math =====
   */
  math: {
    commas: value => require("./utils/math/commas")(value)
  },

  /**
   * Anything solves UI problems
   */
  ui: {
    html: html => require("./utils/ui/html")(html),
    dynamicDiv: (headerId, targetId, footerId, debug) =>
      require("./utils/ui/dynamicDiv")(headerId, targetId, footerId, debug)
  }
};

module.exports = utils;
