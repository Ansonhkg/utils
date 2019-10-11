const cusum = require("./cusum");

test("cusum of [1,2] should be [1,3]", () => {
  var result = cusum([1, 2]);
  expect(result).toStrictEqual([1, 3]);
});

test("cusum of [1,2,3,4,5] should be [1,3,6,10,15]", () => {
  var result = cusum([1, 2, 3, 4, 5]);
  expect(result).toStrictEqual([1, 3, 6, 10, 15]);
});

test("cusum of [2,4,6,8,10] should be [2,6,12,20,30]", () => {
  var result = cusum([2, 4, 6, 8, 10]);
  expect(result).toStrictEqual([2, 6, 12, 20, 30]);
});
