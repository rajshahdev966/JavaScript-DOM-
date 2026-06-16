let prompt = require("prompt-sync")();
let n = Number(prompt("Number "));
let sumfact = 1;
for(let i = 2; i<= Math.floor(n/2); i++){
    if(n%i === 0){
        sumfact = i + sumfact;
    }
}
if(sumfact > n) console.log(true)
else console.log(false);
