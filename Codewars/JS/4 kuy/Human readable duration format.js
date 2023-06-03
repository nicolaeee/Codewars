let totalSeconds = 62,
    arr = [],
    arrFinal = [],
    totalMinutes = Math.floor(totalSeconds / 60),
    seconds = totalSeconds % 60,
    hours = Math.floor(totalMinutes / 60),
    minutes = totalMinutes % 60;

    if(totalSeconds === 1 ){
        arr.push(totalSeconds + " second");
        arrFinal = arr.join(" ")
        console.log(arrFinal);
    } else if(totalSeconds >= 5 && totalSeconds <60){
        arr.push(totalSeconds + " seconds");
        arrFinal = arr.join(" ")
        console.log(arrFinal);
    } else if(totalSeconds === 60 ){
        arr.push(minutes + " minute");
        arrFinal = arr.join(" ")
        console.log(arrFinal);
    } else if(totalSeconds > 60 && totalSeconds < 3600){
        arr.push(minutes + " minutes and " + seconds + " seconds");
        arrFinal = arr.join(" ")
        console.log(arrFinal);
    }
  let object = { h: hours, m: minutes, s: seconds };
  console.log(object)


  function formatDuration (seconds) {
    let arr = [],
     arrFinal = [],
     totalMinutes = Math.floor(seconds / 60),
     second = seconds % 60,
     hours = Math.floor(totalMinutes / 60),
     minutes = totalMinutes % 60;

     if(seconds === 1 ){
         arr.push(seconds + " second");
          return arrFinal = arr.join(" ")
     } else if(seconds >= 5 && seconds <60){
         arr.push(seconds + " seconds");
        return  arrFinal = arr.join(" ");
     } else if(seconds === 60 ){
         arr.push(minutes + " minute");
         return arrFinal = arr.join(" ");
     } else if(seconds === 60 && second === 1){
       arr.push(minutes + " minute and "+ second + " second")
       return arrFinal = arr.join(" ");
     } else if(seconds === 60 && second > 1 && second < 60){
       arr.push(minutes + " minute and "+ second + " seconds")
       return arrFinal = arr.join(" ");
     }
 };
 console.log(formatDuration(62));