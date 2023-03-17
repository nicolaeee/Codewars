let str = "vicccctoriaaaa",
    arr = str.split(""),
    arrSet = new Set (arr),
    arrFinal = Array.from(arrSet);

    if(arrFinal.length === str.length){
        return true
      } else {
        return false
      }
console.log(arrFinal);
