let prompt = require('prompt-sync')();
let n = prompt("Number")
let count = 10;
let isbnsum = 0;
while(n>0){
    let rem = n%10;
    isbnsum = (rem*count) + isbnsum
    count--
    n = Math.floor(n/10)
}
if(isbnsum % 11 === 0) return true;
return false;