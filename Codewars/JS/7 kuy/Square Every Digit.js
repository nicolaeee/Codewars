function squareDigits(num){

  let sumArray = [],
      numArray = Array.from(String(num), Number),
      numString = ''

  for(i = 0; i < numArray.length; i++){
    sumArray.push(numArray[i] ** 2)
  }

  numString = sumArray.join('').toString()
  return parseInt(numString)
}