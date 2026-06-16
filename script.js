let prompt = require("prompt-sync")();
let arr = [1, 2, 3, 4, 5,  6];
let maxindex = 0;
let max = arr[0]
for(let i = 1; i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
        maxindex = i;
    }
}
console.log([max, maxindex]);
