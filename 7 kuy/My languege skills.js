let results ={"C++": 50, "ASM": 10, "Haskell": 20} ,
    arr = [],
    arrMerged = [],
    arrFinal = [];

for (let key in results) {
   if(results[key] >= 60) {
    arr.push([key, results[key]]);
   }
  };

  arr.sort(function(a, b) {
    return b[1] - a[1]
  });

  arrMerged = arr.flat(1);
  arrFinal = arrMerged.filter(x => isNaN(x))
 console.log(arrFinal);


//   let a = {b: 60, c : 93, d: 71}

//   let A = {c: 93, d: 71, b: 60}

// let result = arr.push(results);

// var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
// keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
// console.log(keysSorted);