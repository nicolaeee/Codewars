var results = {"Java": 10, "Ruby": 80, "Python": 65},
    arr = [];




for (let key in results) {
   if(results[key] >= 60) {
    arr.push(key)
    console.log(arr);
   }
  };


//   let a = {b: 60, c : 93, d: 71}

//   let A = {c: 93, d: 71, b: 60}

// let result = arr.push(results);

// var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
// keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
// console.log(keysSorted);