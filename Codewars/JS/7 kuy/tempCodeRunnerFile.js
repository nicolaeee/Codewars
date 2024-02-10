function squareDigits(num){

    let sumArray = [],
        numArray = Array.from(String(num), Number)

    for(i = 0; i < numArray.length; i++){
      sumArray.push(numArray[i] ** 2)
    }
    return sumArray.join('').toString()
  }

console.log(squareDigits(345))