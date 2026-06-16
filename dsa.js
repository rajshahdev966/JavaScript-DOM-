let arr = [10, 20, 69, 5, 12, 68, 48];
let T = 70;
let index = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === T) {
    index = i;
  }
}
index == -1 ? console.log("Not Found") : console.log(index);
