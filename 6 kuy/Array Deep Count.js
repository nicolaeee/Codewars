let array = [1, 2, [3, 4, [5]]]
let count = a.length;
for(let i = 0; i < a.length; i++){
  if(Array.isArray(a[i])){
    count = count + deepCount(a[i])
  }
  return count;
}



  console.log(countElements(array))