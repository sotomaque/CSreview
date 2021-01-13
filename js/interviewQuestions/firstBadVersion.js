/*
    You are a PM. Your latest build is broken. Each version is developed based on the previous version.
    if  something is broken, all the versions after it are broken as well.

    find the first bad version

    i.e.
        input array is binary array, true means broken, false means woring
        a = [false, true, true, true, true]
*/

/**
 * time-complexity:
 *  - O(log(n)) -> BINARY SEARCH!!
 *
 * space-complexity:
 *  - O(1)
 */
function firstBadVersion(array) {
  let left = 1;
  let right = array.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

let a = [false, true, true, true, true]; //1
let firstBadIndex = firstBadVersion(a);

console.log(firstBadIndex);
