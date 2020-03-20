// Objective

// In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

// Task

// Complete the getSecondLargest function in the editor below. It has one parameter: an array, nums, of n numbers. 
// The function must find and return the second largest number in nums.

// Input Format

// Locked stub code in the editor reads the following input from stdin and passes it to the function:
// The first line contains an integer, n, denoting the size of the nums array.
// The second line contains n space-separated numbers describing the elements in nums.
let nums = [2, 3, 6, 6, 5]
function getSecondLargest(nums) {
    // nums.shift();
  let maxNum = Math.max(...nums)
  let result = 0;
  nums = nums.sort((a, b) => b - a);
  
  for (let i =0; i<nums.length; i++){
    if(nums[i]<maxNum){
      result += nums[i]
      break;
    }
  }
  return result 
}
console.log(getSecondLargest(nums));
