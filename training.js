const subArr = (arr) => {
    let sbArr = [];
    let currentSubArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] === arr[i - 1] + 1) {
            // If current number is consecutive with previous one, add to currentSubArray
            currentSubArray.push(arr[i]);
        } else {
            // If current number is not consecutive with previous one, push currentSubArray to sbArr and start a new subarray
            sbArr.push(currentSubArray);
            currentSubArray = [arr[i]]; // Start new subarray with current number
        }
    }
    
    sbArr.push(currentSubArray); // Push the last subarray
    
    return sbArr;
}

console.log(subArr([3, 2, 6, 2, 3, 1]));

