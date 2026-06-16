let prompt = require("prompt-sync")();
let n = Number(prompt("Number "));
let copy = n;
let copy2 = n;
let count = 0;
while (n > 0) {
  count++;
  n = Math.floor(n/10);
}
let sumpow = 0;
while (copy > 0) {
  let rem = copy % 10;
  sumpow = rem ** count + sumpow;
  copy = Math.floor(copy/10);
}
if (sumpow === copy2) console.log(true);
else console.log(false);
