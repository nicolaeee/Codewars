let str = "vicccctoriaAaa",
//Used split to turn string into array
    arr = str.split(""),
    arrLow = [];
    //Here I pushed to a new array each index with .toLowerCase()
    for (let index = 0; index < arr.length; index++) {
        arrLow.push(arr[index].toLowerCase());
      }

    //Here I created new set from an array where same characters will be deleted
    let  arrSet = new Set (arrLow),

    //Here I turn Set which is an object into array
        arrFinal = Array.from(arrSet);

      console.log(arrFinal)

