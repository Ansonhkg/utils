const commas = require("./commas");

test("100 should be 100", () => {
  expect(commas(100)).toBe("100");
});

test("1000 should be 1,000", () => {
  expect(commas(1000)).toBe("1,000");
});

test("10000 should be 10,000", () => {
  expect(commas(10000)).toBe("10,000");
});

test("100000 should be 100,000", () => {
  expect(commas(100000)).toBe("100,000");
});

test("1000000 should be 1,000,000", () => {
  expect(commas(1000000)).toBe("1,000,000");
});

test("10000000 should be 10,000,000", () => {
  expect(commas(10000000)).toBe("10,000,000");
});
