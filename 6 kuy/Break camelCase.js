function solution(string) {
    let arr = string.split(/(?=[A-Z])/);//here I do split string into arr and separate by the caps letter

  if(string === string.toLowerCase()){
    return string //here I do return string if it is all alredy on lowerCase
  }
  else if(string === ''){
    return ''; //here I return an empty string if it is empty
  }
  else {
    return arr.join(' ');//here I do return an array and join it to string with separate each index with space as I should
  }
}

console.log(solution('camelCase'))