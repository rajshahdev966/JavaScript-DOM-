let prompt = require('prompt-sync')();
let n  = Number(prompt("Number "))
let copy = n;
let nsq = n**2;
let rem;
let count = 0;
while(n>0){
    let rem = n%10;
    count++;
    n = Math.floor(n/10);
}
if(nsq %  (10**(count)) === copy) console.log(true)
else console.log(false);