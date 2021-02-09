/*
  This question is asked by Google. Given two integer arrays, return their intersection.
  Note: the intersection is the set of elements that are common to both arrays.

  Ex: Given the following arrays...

  nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
  nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
  nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []
*/
/**
 * time-complexity:
 *  - O(n) where n is the total number of elemn in both arrays
 *
 * space-complexity:
 *  - O(M) where m is the total num of elemn is arr1
 *
 * @param {*} arr1
 * @param {*} arr2
 */
function intersectinoOfNumbers(arr1, arr2) {
  let mySet = new Set();

  arr1.forEach((elem) => {
    mySet.add(elem);
  });

  const intersection = [];

  arr2.forEach((elem) => {
    if (mySet.has(elem)) {
      intersection.push(elem);
      mySet.delete(elem);
    }
  });

  return intersection;
}

let nums1 = [2, 4, 4, 2];
let nums2 = [2, 4];

let res = intersectinoOfNumbers(nums1, nums2);
console.log(res);
