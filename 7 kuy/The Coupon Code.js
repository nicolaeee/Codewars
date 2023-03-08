function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
    //enteredCode === correctCode - here we compare the arrays
    //Date.parse(currentDate) is is representation of a current date(month - year - day) and if it is less than expirationDate it should return true otherwise false
  }