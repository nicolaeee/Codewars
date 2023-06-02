
//I should impliment a function that takes a n value and set it to in an object
function createSecretHolder(secret) {
  return{
    getSecret: function(){ //Here I create a function(method) which returns the value which we just set
      return secret;
    },
    setSecret: function(newSecret){//Here I create a function(method) which puts another value in a secret variabile
      secret = newSecret;
    }
  }
  }
  let obj = {};

obj = createSecretHolder(8);
obj.getSecret();
