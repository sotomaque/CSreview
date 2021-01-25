/*
  Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
  If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
  If no two numbers sum up to the target sum, the function should return an empty array.

  Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.
  You can assume that there will be at most one pair of numbers summing up to the target sum.
*/

/**
 * Solution 1:
 *  Naive Solution
 *  Double For-Loop
 * 
 * time-complexity:
 *  - O(n^2)
 * 
 * space-complexity:
 *  - O(1)
 * 
 * @param {*} nums 
 * @param {*} targetSum 
 */
function twoSum(nums, targetSum) {
  const results = [];

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (current + array[j] === targetSum) {
        results.push(current, nums[j])
      }
    }
  }

  return results
}

/**
 * Solution 2:
 *  Map Solution
 *  Double For-Loop
 * 
 * time-complexity:
 *  - O(n)
 * 
 * space-complexity:
 *  - O(1)
 * 
 * @param {*} nums 
 * @param {*} targetSum 
 */
function twoSumAlt(nums, targetSum) {
  const myMap = {};
  // populate map with char-counts
  for (i = 0; i < nums.length; i++) {
    if (nums[i] in myMap) {
      myMap[nums[i]] += 1
    } else {
      myMap[nums[i]] = 1
    }
  }
  // iterate through array again
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    myMap[current] -= 1; // important!
    const complement = targetSum - current;
    if (complement in myMap && myMap[complement] !== 0) {
      return [complement, Number(current)]
    }
  }

  // if we did not return results above, we will return
  // an empty list
  return []
}

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;
const res = twoSumAlt(array, targetSum);
console.log(res)