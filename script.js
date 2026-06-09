let prompt = require('prompt-sync')();
let random = Math.floor((Math.random()*100)+1);
let input;
do {
  input = Number(prompt("Guess the number between 1-100 "));
  if(input > random) {console.log("OH NO! Input is more than random")}
  else if (input === random) {console.log("Congrats you guessed it!");}
  else {console.log("Oh NO! Input is less than random")};
}while(input !== random);
