export const makeNumberStringComplete = (number: number, maxAmountOfDigits: number = 3): string => {
  let result = '';
  for (let digit = 0; digit <= maxAmountOfDigits - number.toString().length - 1; digit++) {
    result += '0';
  }
  return result + number;
}