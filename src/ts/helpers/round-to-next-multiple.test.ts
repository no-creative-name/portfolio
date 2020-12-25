import { roundToNextMultiple } from "./round-to-next-multiple";

describe('roundToNextMultiple', () => {
  test('returns rounded up value when number to round is not multiple of denominator', () => {
    expect(roundToNextMultiple(60, 25, 100)).toBe(75);
  });
  test('returns rounded up value when number to round is multiple of denominator', () => {
    expect(roundToNextMultiple(75, 25, 100)).toBe(75);
  });
  test('returns max number when rounded number is over max number', () => {
    expect(roundToNextMultiple(95, 30, 100)).toBe(100);
  });
});