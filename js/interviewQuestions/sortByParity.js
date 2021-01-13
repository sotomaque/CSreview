/*
    given an array, return another array with the even numbers at the begining
    and the odd numbers at the end
*/

/**
 * time-complexity:
 *  - O(2n) -> O(n)
 *
 * space-complexity:
 *  - O(n)
 * @param {*} array
 */
function sortByParity(array) {
  let result = [];
  let j = 0;
  array.forEach((element) => {
    // evens go at front of array
    if (element % 2 === 0) {
      result[j] = element;
      j += 1;
    }
  });

  array.forEach((element) => {
    if (element % 2 === 1) {
      result[j] = element;
      j += 1;
    }
  });

  return result;
}

/**
 * time-complexity:
 *  - O(2n) -> O(n)
 *
 * space-complexity:
 *  - O(1)
 * @param {*} array
 */
function sortByParityInPlace(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] % 2 === 0) {
      left += 1;
    } else {
      [array[left], array[right]] = [array[right], array[left]];
      left += 1;
      right -= 1;
    }
  }

  return array;
}

let a = [3, 1, 2, 4];
// [4, 1, 2, 3]
// [4, 2, 1, 3]
let b = sortByParityInPlace(a);
console.log(b);
