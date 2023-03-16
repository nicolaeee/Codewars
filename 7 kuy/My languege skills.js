let results ={"Hindi": 60, "Dutch" : 93, "Greek": 71} ,
    arr = [],
    arrMerged = [],
    arrFinal = [];
//Push in the new array key and value where value is bigger than 60
for (let key in results) {
   if(results[key] >= 60) {
    arr.push([key, results[key]]);
   }
  };
//Sort this array by the number in descending order
  arr.sort(function(a, b) {
    return b[1] - a[1]
  });

  //Here a merged 2D array in 1D array
  arrMerged = arr.flat(1);
  //Here I remove all numbers form array
  arrFinal = arrMerged.filter(x => isNaN(x))
 console.log(arrFinal);


//   let a = {b: 60, c : 93, d: 71}

//   let A = {c: 93, d: 71, b: 60}

// let result = arr.push(results);

// var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
// keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
// console.log(keysSorted);