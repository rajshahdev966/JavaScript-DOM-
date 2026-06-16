let prompt = require("prompt-sync")();
let n = prompt("Enter the number");

for (let i = 1; i <= n; i++) {
  for (let j = n - i + 1; j >= 1; j--) {
    process.stdout.write("* ");
  }
  console.log();
}
