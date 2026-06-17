let arr = [
  10, 20, -100, 69, 17, 15, 2, 5, 6, 80, 60, 20, 10, 15, 14, 16, 13, 12, 14, 17,
  18, 19, 23,
];
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
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += arr[j];
      if (sum === T) {
        console.log(arr.slice(i, j + 1));
        count++;
      }
    }
  }
  console.log(count);
}
// printSubarrWithSumTarget(arr, 89)
function printSubarrWithEvenSum(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += arr[j];
      if (sum % 2 === 0) {
        console.log(arr.slice(i, j + 1));
        count++;
      }
    }
  }
  console.log(count);
}
// printSubarrWithEvenSum(arr);

function printSubarrWithOddSum(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += arr[j];
      if (sum % 2 !== 0) {
        console.log(arr.slice(i, j + 1));
        count++;
      }
    }
  }
  console.log(count);
}
// printSubarrWithOddSum(arr);

function maxSumofSubarr(array) {
  let maxsum = -Infinity;
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += array[j];
      if (sum > maxsum) {
        maxsum = sum;
      }
    }
  }
  console.log(maxsum);
}

// maxSumofSubarr(arr);

function minSumofSubarray(array) {
  let minsum = Infinity;
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += array[j];
      if (minsum > sum) {
        minsum = sum;
      }
    }
  }
  console.log(minsum);
}
// minSumofSubarray(arr)

function maxsumofKLengthSubarray(array, k) {
  let maxsum = -Infinity;
  for (let i = 0; i < array.length - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += array[j];
    }
    // Because here we have to consider only subarray that has K element not in whole process
    if (sum > maxsum) {
      maxsum = sum;
    }
  }
  console.log(maxsum);
}
// maxsumofKLengthSubarray(arr, 3);

// Seecond Approach for Maximum Sum of K Length Subarray by Sliding Window

function maxsumofKLengthSubarrayapp2(array, k) {
  for (let i = 0; i < k; i++) {
    sum += array[i];
  }
  for (let j = 0; j < array.length; j++) {
    sum = sum + array[j];
  }
}

function longestarraywithtargetsum(array, T) {
  let maxlength = -Infinity;
  let maxlengtharr = [];
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += array[j];
      if (sum === T) {
        let length = j - i + 1
        if (length > maxlength) {
          maxlength = length;
          maxlengtharr = array.slice(i, j+1);
        }
      }
    }
  }
  console.log(maxlengtharr);
  console.log(maxlength);
}

longestarraywithtargetsum(arr, 20);
