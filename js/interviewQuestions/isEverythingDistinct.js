/*
    given an array, return true if every element of that array is distinct, 
    false otherwise
*/

/**
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(n)
 *
 * @param {*} array
 */
function isEverythingDistinct(array) {
  let mySet = new Set();

  array.forEach((element) => {
    mySet.add(element);
  });

  return Array(...mySet).length === array.length;
}

const array = [1, 2, 3];
const res = isEverythingDistinct(array);
console.log(res);
