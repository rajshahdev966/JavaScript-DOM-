let prompt = require("prompt-sync")();
let n = Number(prompt("Number "));
let copy = n;
let sumdigi = 0;
while (n > 0) {
  let rem = n % 10;
  sumdigi = sumdigi + rem;
  n = Math.floor(n / 10);
}
if (copy % sumdigi === 0) console.log(true);
else console.log(false);
