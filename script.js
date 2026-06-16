let prompt = require('prompt-sync')();
let n = prompt("Number");
let nsq = n**2;
if(String(nsq).endsWith(n)) console.log(true)
else console.log(false);