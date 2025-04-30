//question-3
function sumAll(...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(sumAll(2,4,5));


//question-4


function processArguments(myFunction, ...args) {
  return myFunction(...args);
}

function multiply(x, y) {
  return x * y;
}
console.log(processArguments(multiply, 3, 4));
