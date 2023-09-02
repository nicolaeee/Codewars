function XO(str) {
    let counterX = 0,
        counterO = 0;
    for(let i = 0; i < str.length; i++){
       if(str[i] === 'x'){
         counterX++;
       }
      else if(str[i] === 'o'){
        counterO++
      }
    }
  if(counterX === counterO){
    return true
  }
  else{
    return false
  }
}

let string = 'ooxx'

XO(string)