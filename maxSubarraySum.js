/** 
Sliding Window - maxSubarray Sum

Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxsubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
maxSubarraySum([-3,4,0,-2,6, -1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,31] ,3) // null

Constraints:
Time Complexity - O(N)
Space Complexity - 0(1)
**/

const  maxSubarraySum = (array,lengthOfSum) => {
    let maxSum =0;
    let tempSum=0;

    if(array.length<lengthOfSum) return "The length of your some is more than the array length";

    for(let i=0;i<lengthOfSum;i++){
        maxSum+=array[i];
    }
    tempSum = maxSum;

    for (let i=lengthOfSum;i<array.length;i++){
        tempSum = tempSum - array[i-lengthOfSum] + array[i];
        maxSum = Math.max(maxSum,tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([2,31] ,3));
console.log(maxSubarraySum([100,200,300,400] ,2));
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));
console.log(maxSubarraySum([-3,4,0,-2,6, -1], 2));
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2));
console.log(maxSubarraySum([1,2,5,2,8,1,5],2));
console.log(maxSubarraySum([1,2,5,2,8,1,5],4));
console.log(maxSubarraySum([4,2,1,6],1));
console.log(maxSubarraySum([4,2,1,6],4));
console.log(maxSubarraySum([],4));