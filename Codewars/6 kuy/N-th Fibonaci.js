//In this function I used recursion, here is a Fibonaci senquence
//0,1,1,2,3,5,8
//Each next number is the sum of two last, only in the first 3 caseses it returns a number

function nthFibo(n) {
    if(n <= 1){
      return 0;
    }
      else if(n === 2){
        return 1;
      }
      else if( n === 3){
        return 1;
      }
      else{
        return nthFibo(n - 1) + nthFibo(n - 2)//and here is the recursion formula
      }
    }