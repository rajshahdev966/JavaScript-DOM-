let arr = [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1];
for(let i = 0, j = 0; i<arr.length && j<arr.length;i++){
    if(arr[i] === 0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++
    }
}
console.log(arr)
