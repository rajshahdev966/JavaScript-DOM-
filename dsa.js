let arr = [10, 20, 69, 5, 12, 68, 48];
for(let i = 0; i< arr.length; i++){
    for(let j = i; j<arr.length; j++){
        console.log(arr.slice(i, j + 1));
    }
}