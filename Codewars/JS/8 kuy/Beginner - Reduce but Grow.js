function grow(x){
    let result = 1,
        arraySort = x.sort((a, b) => a - b)

    for( let i = 0; i < arraySort.length; i++){
      result *= arraySort[i]
    }
    return console.log(result);
  }

  grow([4, 1, 1, 1, 4])