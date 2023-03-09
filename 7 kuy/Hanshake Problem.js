function getParticipants(handshakes){
    let answer = 0,
        sum = 0
   if(!handshakes) {
     return 0;
   }

   while(handshakes > sum) {
     sum = answer * (answer + 1) / 2;
     answer++;
   }
   return answer;
 }