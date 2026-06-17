let arr = [10, 20, 69, 17, 15, 14];
function printAllSubarr(array) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      console.log(arr.slice(i, j + 1));
    }
  }
}

function countTotalSubarr(array) {
  let n = array.length;
  console.log((n * (n + 1)) / 2);
}
// countTotalSubarr(arr)
function subarrofKLength(array, k) {
  for (let i = 0; i <= arr.length - k; i++) {
    console.log(arr.slice(i, i + k));
  }
}
// subarrofKLength(arr, 5)
function sumofSubarr(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      console.log(arr.slice(i, j + 1) + " sum is " + sum);
    }
  }
}
// sumofSubarr(arr);
function printSubarrWithSumTarget(array, T) {
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        let sum = 0
        for (let j = i; j < array.length; j++) {
            sum += arr[j];
            if(sum === T){
                console.log(arr.slice(i,j+1));
                count++
            }            
        }
    }
    console.log(count)
}
// printSubarrWithSumTarget(arr, 89)
function printSubarrWithEvenSum (array) {
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        let sum = 0
        for (let j = i; j < array.length; j++) {
            sum += arr[j];
            if(sum%2 === 0){
                console.log(arr.slice(i,j+1));
                count++
            }            
        }
    }
    console.log(count)
}
// printSubarrWithEvenSum(arr);

function printSubarrWithOddSum (array) {
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        let sum = 0
        for (let j = i; j < array.length; j++) {
            sum += arr[j];
            if(sum%2 !== 0){
                console.log(arr.slice(i,j+1));
                count++
            }            
        }
    }
    console.log(count)
}
// printSubarrWithOddSum(arr);

function maxSumofSubarr(array) {
    
}