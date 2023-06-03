let array = [1, 2, [3, 4, [5]]]

//Solved this problem with recursion(function which called itself)
function deepCount(a){
    let count = a.length; //Here I created a counter which includes length of current array
    for(let i = 0; i < a.length; i++){
      if(Array.isArray(a[i])){ //Here I check if every element is an array or not if not it is return count which is the lenght on current array
        count = count + deepCount(a[i]) //Here with this for loop I did what's called recursion and the result added to cound
      }
    }
    return count;
  }



  console.log(deepCount(array))