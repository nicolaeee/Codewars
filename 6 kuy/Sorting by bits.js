function intArrayToBitSum(arr) {
    const bitSum = [];
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = 31; j >= 0; j--) {
        sum += (arr[i] >> j) & 1;
      }
      bitSum.push(sum);
    }
    return bitSum;
  }
  const arr = [9,4,5,3,5,7,2,56,8,2,6,8,0];


  console.log(intArrayToBitSum(arr)); // [1, 8, 3, 3, 5, 6, 9, 7]