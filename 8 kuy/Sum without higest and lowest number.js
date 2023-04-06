function sumArray(array) {
    if (!array) {
      return 0;
    }

    let sum = 0,
      sortedArray = array.sort((a, b) => a - b);
    for (let i = 0; i < sortedArray.length; i++) {
      sum += sortedArray[i];
    }
    if (array.length === 0 || array.length === 1 || array.length === 2) {
      return 0;
    } else {
      return sum - (sortedArray[0] + sortedArray[sortedArray.length - 1]);
    }
  }


  let arr = [-6, -20, -1, -10, -12];
  console.log(sumArray(arr))