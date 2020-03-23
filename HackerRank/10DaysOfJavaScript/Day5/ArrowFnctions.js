// Objective

// In this challenge, we practice using arrow functions. Check the attached tutorial for more details.

// Task

// Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:

// If the element is even, multiply the element by 2.
// If the element is odd, multiply the element by 3.
// The function must then return the modified array.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const modifyArray=(nums)=> {
  
  let arr = []
  
    for (let i in nums)
        if(nums.length <= 10 && nums[i] < 100 && nums[i] >= 1)
        if(nums[i] % 2 == 0)
            arr.push(nums[i]*2)
        else if(nums[i] % 2 !== 0)
            arr.push(nums[i]*3)
  
    return arr; 
}
console.log(modifyArray(nums))