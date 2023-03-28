
//I should impliment a function that takes a n value and set it to in an object
function createSecretHolder(secret) {
  return{
    setSecret: function(){
      return secret;
    },
    getSecret: function(newSecret){
      secret = newSecret;
    }
  }
  }
  let obj = {};

obj = createSecretHolder(8);
obj.getSecret();
