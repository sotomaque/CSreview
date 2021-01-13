/*
    given an array of sorted numbers, and a target

    return true if two numbers from the array can add up to the target

*/

/**
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(1)
 * @param {*} array
 * @param {*} target
 */
function twoSumSorted(array, target) {
  let left = 0;
  let right = array.length - 1;
  let result = [];
  // strictly less than bc we would otherwise return true if
  // any element * 2 = target
  while (left < right) {
    if (array[left] + array[right] > target) {
      right -= 1;
    } else if (array[left] + array[right] < target) {
      left += 1;
    } else {
      result.push([array[left], array[right]]);
      return result;
    }
  }
  return result;
}

let a = [1, 2, 3, 6, 7, 10, 11, 13, 15];
let target = 10;

console.log(twoSumSorted(a, target));
