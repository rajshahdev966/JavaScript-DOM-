let arr = [1,2,3,4,5,6,7,8,9];
for(let i = 0; i<arr.length-1; i++){
    let temp = arr[i+1];
    arr[i+1] = arr[i]
    arr[i] = temp;
}
console.log(arr);
