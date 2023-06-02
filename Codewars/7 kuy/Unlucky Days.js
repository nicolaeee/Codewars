function unluckyDays(year){
  let result = 0; //Here we put final resultat 1 || 2 || 3
  for (let month = 0; month < 12; month++) {
    let d = new Date(year, month, 13);//Will get the date object for the 13th day of that month and year. That is one of the ways to create a date object
    if (d.getDay() == 5) {//So, we have a date object for the 13th day of that month. Now we see what day of the week that is. In a 0 indexed week that starts on Sunday, the number for Friday is 5
      result ++
    }
  }
  console.log(result)
  return result
}