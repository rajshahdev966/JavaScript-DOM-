let prompt = require("prompt-sync")();
let arr = [1, 2, 3, 4, 5,  6];
let max = arr[0]
for(let i = 1; i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
let maxremovearr = arr.filter((val) => {
    if(val == max) return false;
    return true;
})
let secmax = maxremovearr[0]
for(let i = 1; i<arr.length -1;i++){
    if(arr[i]>secmax){
        secmax = maxremovearr[i];
    }
}
console.log(secmax)