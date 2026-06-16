let arr = [65, 25, 5, 6, 55, 56, 75, 87];
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - i - 1];
  arr[arr.length - i - 1] = temp;
}
console.log(arr);
