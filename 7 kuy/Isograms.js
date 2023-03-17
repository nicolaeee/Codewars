let str = "vicccctoriaAaa",
    arr = str.split(""),
    arrLow = [];
    for (let index = 0; index < arr.length; index++) {
        arrLow.push(arr[index].toLowerCase());
      }

    let  arrSet = new Set (arrLow),
        arrFinal = Array.from(arrSet);

      console.log(arrFinal)

