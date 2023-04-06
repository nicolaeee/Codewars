function findShort(s) {
    let arr = s.split(' ');
    let minLen = Infinity; // initialize with a very large value

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length < minLen) {
        minLen = arr[i].length;
      }
    }

    return minLen;
  }

let s = 'bitcoin take over the world maybe who knows perhaps';

console.log(findShort(s))