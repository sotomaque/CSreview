/*
given a set of distinct integers, nums, return all possible
subsets (aka the power set).

note the solution must not contain any duplicate subsets

i.e.
  input = [1, 2, 3]
  output = [
    [3],
    [1],
    [2],
    [1, 2, 3],
    [1, 3],
    [2, 3],
    [1, 2], 
    []
  ]

for each item, decide wheter to include it in current result or not
once we have iterated through entire input array, we are out of choices
then we append the partial solution to the global solution set
*/

/**
 * time-complexity:
 *  - combination -> C(n, k) = n!/ (n-k)!*k!
 *  - O(2^n)
 *
 * space-complexity:
 *  max depth of recursion
 *  + auxilary data structures
 * ---------------------------
 * O(log n) + O(2^n)
 *
 * @param {*} nums
 */
function enumeratePowerSet(nums) {
  const result = new Array();
  subsetHelper(nums, 0, [], result);
  return result;
}

function subsetHelper(nums, currentIndex, partialResult, globalResult) {
  // base case
  if (currentIndex === nums.length) {
    // append partial result to gloal result
    globalResult.push(partialResult);
    return;
  }
  // include
  subsetHelper(
    nums,
    currentIndex + 1,
    [...partialResult, nums[currentIndex]],
    globalResult
  );
  // exclude
  subsetHelper(nums, currentIndex + 1, [...partialResult], globalResult);
}

const array = [1, 2, 3];
const powerSet = enumeratePowerSet(array);

console.log(powerSet);
