export const roundToNextMultiple = (toRound: number, denominator: number, maxNumber: number): number => {
  for (let i = 0; i <= maxNumber / denominator - 1; i++) {
    if (toRound > denominator * (i - 1) && toRound <= denominator * i) {
      return denominator * i;
    }
  }
  return maxNumber;
}