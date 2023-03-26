let array = [1, 2, [3, 4, [5]]]
console.log(array.flat(Infinity).length)
function countElements(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      count++;
      if (Array.isArray(arr[i])) {
        count += countElements(arr[i]);
      }
    }
    return count;
  }

  console.log(countElements(array))