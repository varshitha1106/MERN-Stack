//question-2

function createGreeting(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}
const sayHello = createGreeting("Hello");
console.log(sayHello("World"));

//question-3

function createSecretHolder(secret) {
  return {
    getSecret: function() {
      return secret;
    },
    setSecret: function(newSecret) {
      secret = newSecret;
    }
  };
}

//question-4
const holder = createSecretHolder("Secret");

console.log(holder.getSecret()); 
holder.setSecret("newSecret");
console.log(holder.getSecret());  
