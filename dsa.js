let prompt = require("prompt-sync")();
let T = Number(prompt("Enter the Target "));
let arr = [1,2,3,4,5,0];
let sum;
let count = 0;
for(let i = 0; i< arr.length; i++){
    sum = 0;
    for(let j = i; j<arr.length; j++){
        sum = arr[j] + sum;
        if(sum === T){
            count++;
        };
    };
};
console.log(count);

  
console.log(arr);
