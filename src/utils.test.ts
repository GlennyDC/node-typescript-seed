import { sum, difference } from "./utils";

describe("Sum function", () => {
  test("the addition of 0 and 5 is 5", () => {
    expect(sum(0, 5)).toBe(5);
  });

  test("the addition of 0 is 0", () => {
    expect(sum(0)).toBe(0);
  });

  test("the addition of 5, 5 and 5 is 15", () => {
    expect(sum(5, 5, 5)).toBe(15);
  });

  test("the addition of -1 and -4 is -5", () => {
    expect(sum(-1, -4)).toBe(-5);
  });

  test("the addition of 0 and -5 is -5", () => {
    expect(sum(0, -5)).toBe(-5);
  });

  test("no arguments to add results in 0", () => {
    expect(sum()).toBe(0);
  });
});

describe("Difference function", () => {
  test("the difference of 0 and 5 is -5", () => {
    expect(difference(0, 5)).toBe(-5);
  });

  test("the difference of 0 is 0", () => {
    expect(difference(0)).toBe(0);
  });

  test("the difference of 5, 5 and 5 is -10", () => {
    expect(difference(5, 5, 5)).toBe(-15);
  });

  test("the difference of -1 and -4 is 4", () => {
    expect(difference(-1, -4)).toBe(5);
  });

  test("the difference of 0 and -5 is 5", () => {
    expect(difference(0, -5)).toBe(5);
  });

  test("no arguments to difference results in 0", () => {
    expect(difference()).toBe(0);
  });
});
