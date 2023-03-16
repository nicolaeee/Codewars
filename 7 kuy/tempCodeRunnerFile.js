let results ={"Hindi": 60, "Dutch" : 93, "Greek": 71},
    arr = [];


for (let key in results) {
   if(results[key] >= 60) {
    arr.push([key, results[key]]);
   }
  };

  arr.sort(function(a, b) {
    return b[1] - a[1]
  });

 console.log(arr.joined());

