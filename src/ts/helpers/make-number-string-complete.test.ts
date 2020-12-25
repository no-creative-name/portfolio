import { makeNumberStringComplete } from "./make-number-string-complete";

describe('makeNumberStringComplete', () => {
  test('returns complete number string for single digit', () => {
    expect(makeNumberStringComplete(1)).toBe('001');
  });
  test('returns complete number string for double digit', () => {
    expect(makeNumberStringComplete(10)).toBe('010');
  });
  test('returns complete number string for three digit', () => {
    expect(makeNumberStringComplete(100)).toBe('100');
  });
  test('returns complete number string for three digit with different max amount', () => {
    expect(makeNumberStringComplete(100, 4)).toBe('0100');
  });
});