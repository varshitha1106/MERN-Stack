/*var mysteryVariable;
console.log(mysteryVariable);
mysteryVariable = 10;
console.log(mysteryVariable);
function revealMystery() {
  console.log("Inside revealMystery:", mysteryVariable);
  var mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable);

}
revealMystery();
console.log("After revealMystery:", mysteryVariable);*/

let mysteryVariable;
console.log(mysteryVariable);
mysteryVariable = 10;
console.log(mysteryVariable);
function revealMystery() {
  console.log("Inside revealMystery:", mysteryVariable);
  let mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable);
}
revealMystery();
console.log("After revealMystery:", mysteryVariable);