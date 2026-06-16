let prompt = require('prompt-sync')()
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = Number(prompt("Left Rotoation by how many times? "));
k = k % arr.length;
for (let j = 1; j <= k; j++) {
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i + 1];
    arr[i + 1] = arr[i];
    arr[i] = temp;
  }
}
console.log(arr);
