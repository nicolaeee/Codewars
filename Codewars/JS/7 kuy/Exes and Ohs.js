function XO(str) {
    let counterX = 0,
        counterO = 0;
    for(let i = 0; i < str.length; i++){
       if(str[i] === 'x' || str[i] === 'X'){
         counterX++;
       }
      else if(str[i] === 'o' ||  str[i] === 'O'){
        counterO++
      }
    }
  if(counterX === counterO){
    return console.log(true)
  }
  else if(counterX < 0 && counterO < 0){
    return console.log(true)
  }
  else{
    return console.log(false)
  }
}

let string = 'oOxxm'

XO("ooxx") //=> true
XO("xooxx") //=> false
XO("ooxXm") //=> true
XO("zpzpzpp") //=> true // when no 'x' and 'o' is present should return true
XO("zzoo") //=> false