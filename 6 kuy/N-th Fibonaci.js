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
        return nthFibo(n - 1) + nthFibo(n - 2)
      }
    }