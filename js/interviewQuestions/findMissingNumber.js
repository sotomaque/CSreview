/*
  Given a sorted array with values ranging from 1 - 100 (inclusive)
  Find the one mising element
*/

/**
 * time-complexity:
 *  - O(n) (reduce)
 *
 * space-complexity:
 *  - O(1)
 *
 * @param {*} nums
 */
function findMissingElement(nums) {
  // get sum of array
  const arraySum = nums.reduce((a, b) => a + b);
  const expectedValue = 5050; // sum of all numbers 1 - 100 (inclusive)
  return expectedValue - arraySum !== 0 ? expectedValue - arraySum : -1;
}

const nums = [];
for (let i = 1; i <= 100; i++) {
  nums.push(i);
}

const res = findMissingElement(nums);

console.log(res); // 82
