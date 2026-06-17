let arr = [10, 20, 69, 5, 12, 68, 48];
function printAllSubarr(array) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      console.log(arr.slice(i, j + 1));
    }
  }
}

function countTotalSubarr(array) {
    let n = array.length;
    console.log((n * (n+1))/2)
}
countTotalSubarr(arr)
function subarrofKLength(array, k) {
    for(let i = 0; i<= arr.length -  k; i++){
        for(let j = i; j<arr.length;  j++){
            
        }
    }
}