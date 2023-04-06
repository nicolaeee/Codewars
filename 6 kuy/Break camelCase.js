function solution(string) {
    let arr = string.split(/(?=[A-Z])/);

  if(string === string.toLowerCase()){
    return string
  }
  else if(string === ''){
    return '';
  }
  else {
    return arr.join(' ');
  }

}

console.log(solution('camelCase'))