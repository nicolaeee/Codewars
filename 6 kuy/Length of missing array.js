function getLengthOfMissingArray(arr) {
    // If the argument is null or any of its sub-arrays is null or empty, return 0
    if (!arr || arr.some(subArr => subArr === null || subArr.length === 0)) {
      return 0;
    }

    // Get the lengths of all sub-arrays and sort them in ascending order
    const lengths = arr.map(subArr => subArr.length);
    lengths.sort((a, b) => a - b);

    // Find the missing length
    for (let i = 1; i < lengths.length; i++) {
      // If the difference between two consecutive lengths is greater than 1, the missing length is between them
      const diff = lengths[i] - lengths[i - 1];
      if (diff > 1) {
        return lengths[i - 1] + 1;
      }
    }

    // If no missing length is found, return 0
    return 0;
  }
