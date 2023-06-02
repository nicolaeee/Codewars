function sumTwoSmallestNumbers(numbers) {
    const sorted = numbers.sort((a, b) => {
      return a - b;
    });
    return sorted[0] + sorted[1];
}