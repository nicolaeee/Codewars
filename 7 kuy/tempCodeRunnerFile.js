var results = {"Java": 10, "Ruby": 80, "Python": 65},
    arr = [];




for (let key in results) {
   if(results[key] >= 60) {
    arr.push(key)
    console.log(arr);
   }
  };