let prompt = require("prompt-sync")();
let n = Number(prompt("Number "));
let copy = n;
let sumfact = 0

while(n>0){
    let rem = n%10;
    let fact = 1;
    for(let i = 1; i<=n; i++){
        fact = fact * i;
    }
    sumfact = sumfact + fact;
    n = Math.floor(n/10)
}
if(sumfact === copy) console.log(true)
else console.log(false);


