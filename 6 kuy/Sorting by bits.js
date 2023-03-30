function sortByBit(arr) {
  const bitArray = [];
  for (let i = 0; i < arr.length; i++) {
    const bits = [];
    for (let j = 31; j >= 0; j--) {
      bits.push((arr[i] >> j) & 1);
    }
    const numOnes = bits.filter(bit => bit === 1).length;
    bitArray.push({bits, numOnes, num: arr[i]});
  }
  bitArray.sort((a, b) => {
    if (a.numOnes < b.numOnes) return -1;
    if (a.numOnes > b.numOnes) return 1;
    if (a.num < b.num) return -1;
    if (a.num > b.num) return 1;
    return 0;
  });
  for (let i = 0; i < arr.length; i++) {
    arr[i] = bitArray[i].num;
  }
  return arr;
}



  const arr = [ 3, 8, 3, 6, 5, 7, 9, 1 ];


  console.log(intArrayToSortedArray(arr)); // [1, 8, 3, 3, 5, 6, 9, 7]