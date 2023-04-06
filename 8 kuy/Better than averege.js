let classPoints = [2,3],
    yourPoints = 5;

    function betterThanAverage(classPoints, yourPoints) {
        let sumClass = 0;

        for(let i = 0; i < classPoints.length; i++){
          sumClass += classPoints[i];
        }
        if(sumClass <= yourPoints){
          return true;
        }
        else if(sumClass / classPoints.length < yourPoints){
          return true
        }
        else {
          return false
        }
      }
  console.log(betterThanAverage(classPoints, yourPoints))