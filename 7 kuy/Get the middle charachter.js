function getMiddle(s)
{
  let arr = s.split(''),
      len = arr.length,
      midIndex = Math.floor(len/2);
  if(len % 2 === 0){
   return arr[midIndex - 1] + arr[midIndex];
  }
  else {
    return arr[midIndex]
  }
}
console.log(getMiddle("atel"))