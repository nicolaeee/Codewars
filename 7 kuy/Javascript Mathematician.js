function calculate(num1) {
    let sum = 0;
    for(let i = 0;i < arguments.length;i++) { //going througth first set of argumens
      sum += arguments[i]; //sum of first arguments of function
    }
    return function (num2) {
      for(let j = 0;j < arguments.length;j++) {// going through second set of arguments
        sum += arguments[j] //sum of second arguments of function
      }
      return sum; //final sum of two function
    }
  }