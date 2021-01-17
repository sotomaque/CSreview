/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.
*/

/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.
*/

/**
 * time-complexity: O(n^2)
 * space-complexity: O(1)
 *
 * @param {*} array
 * @param {*} target
 */
function bruteForce(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
  return -1;
}

/**
 * time-complexity: O(n)
 * space-complexity: O(n)
 *
 * @param {*} array
 * @param {*} target
 */
function twoSum(array, target) {
  const myMap = new Map();

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (myMap.has(complement)) {
      return [myMap.get(complement), i];
    } else {
      myMap.set(array[i], i);
    }
  }

  return -1;
}

console.log(twoSum([3, 2, 4], 7));
