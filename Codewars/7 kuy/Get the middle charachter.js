function getMiddle(s)
{
  let arr = s.split(''),//create array form string
      len = arr.length,//put the length of arr in separate varbiabile
      midIndex = Math.floor(len/2);//get the mid index of arr
  if(len % 2 === 0){//if the length is even
   return arr[midIndex - 1] + arr[midIndex];//return the middle two characters of even length of array
  }
  else {
    return arr[midIndex]//return the middle of an array
  }
}
console.log(getMiddle("atel"))