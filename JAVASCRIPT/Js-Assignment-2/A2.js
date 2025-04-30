//Failing

const example = {
  name: "Charan",
  exampleFunction: function() {
    setTimeout(function() {
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  }
};
example.exampleFunction();

//correct

const correctUser = {
  name: "Bob",
  correctFunction: function() {
    setTimeout(() => { 
      console.log(`Hello, ${this.name}!`);
  
    }, 1000);
  }
};
correctUser.correctFunction();