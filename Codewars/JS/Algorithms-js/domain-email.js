function getEmailDomain(email) {
    let arr = email.split('@');
    let arrResult = arr[arr.length - 1];
    return arrResult;
  }