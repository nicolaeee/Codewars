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
 formatDuration(62);