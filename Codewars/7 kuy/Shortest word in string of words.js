function findShort(s) {
    let arr = s.split(' ');//here I created an array word split by ' '
    let minLen = Infinity; // initialize with a very large value

    for (let i = 0; i < arr.length; i++) {//going through arr length
        console.log(minLen)
      if (arr[i].length < minLen) { // if nested element length is smaller than minLen, minLen gets the length of that element and so on
        minLen = arr[i].length;
      }
    }

    return minLen;//return the value
  }

let s = 'bitcoin take over the world maybe who knows perhaps';

console.log(findShort(s))