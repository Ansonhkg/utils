const sum = require("./sum");

test("sum of 1 and 2 is 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sum of 2 and 4 is 6", () => {
  expect(sum(2, 4)).toBe(6);
});

test("sum of 100 and 200 is 300", () => {
  expect(sum(100, 200)).toBe(300);
});
