let input = [4, 3, 1, 2, 5, 10, 6, 7, 9, 8];//

function sumEvenNumbers(seq) {
    let sum = 0;
    for (let i = 0; i < seq.length; i++) {
      let num = seq[i];
      if (Number.isInteger(num) && num % 2 === 0) {
        sum += num;
      }
    }
    return sum;
  }


console.log(sumEvenNumbers(input))

let num2 = 4312510678;
function sumEvenNumbers(num) {
    let sum = 0,
        str = num.toString(),
        arr = str.split(''),
        seq = arr.map(Number);
    for (let i = 0; i < seq.length; i++) {
      let num1 = seq[i];
      if (Number.isInteger(num1) && num1 % 2 === 0) {
        sum += num1;
      }
    }
    return sum;
  }

  console.log(sumEvenNumbers(num2))
