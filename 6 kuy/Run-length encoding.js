const str = 'hello world!';
let count = 1;
let result = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) {
    count++;
  } else {
    result.push([count, str[i]]);
    count = 1;
  }
}

console.log(result); // Output: [[2,'a'][1, 'b']]

var runLengthEncoding = function(str){
    let count = 1;
    let result = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        result.push([count, str[i]]);
        count = 1;
      }
    }
      return result
    }