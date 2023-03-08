function unluckyDays(year){
  let result = 0;
  for (let month = 0; month < 12; month++) {
    let d = new Date(year, month, 13);
    if (d.getDay() == 5) {
      result ++
    }
  }
  console.log(result)
  return result
}