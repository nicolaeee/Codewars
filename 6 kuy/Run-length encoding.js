const str = 'hello world!';
let count = 1;//curent and default number of a character in str it can be less than 1
let result = [];//create new array for final result

for (let i = 0; i < str.length; i++) {//iterete through each element of string
  if (str[i] === str[i + 1]) {//check if the current element is the same as next
    count++;//true, and the count as like the total number of str characters rises as many times as it is true
  } else {//when come to false it push each character in a new array and the amount of it in str
    result.push([count, str[i]]);//push the amount and character itself
    count = 1;//put it back to default state and going back at i++ to itterate over and over again
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