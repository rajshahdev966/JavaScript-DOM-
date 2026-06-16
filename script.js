let arr = [-5, 6, 7, -8, -11, -50, 50, 60, 40, -25, 1, -1, 0];
for(let i = 0, j = 0; i<arr.length && j<arr.length;i++){
    if(arr[i] < 0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++
    }
}
console.log(arr)
