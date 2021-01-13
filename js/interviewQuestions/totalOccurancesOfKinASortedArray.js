/*

    given a sorted array and a value, k, return the total occurances of k in that sorted array

    i.e. 
        a = [1, 1, 1, 2, 3]
        k = 1
        result = 3

    i.e.
        a = [1, 2, 3, 4, 4, 4]
        k = 3
        result = 1

    i.e. 
        a = []
        k = 1
        result = 0

    key information is question: 
        - array is sorted
        - search problem

    - naive approach:
        - iterate through all n elements of array, maintain hashmap counting occurances,
        - return map[k]
        - time-complexity: O(n)
        - space-complexity: O(n)
    
    - better approach:
        - take advantage of the fact it is a sorted array
        - do Binary Search to find index of first occurance of k (call it x)
        - do Binary Search to find index of last occurance of k (call it y)
        - return (y - x + 1) (+1 bc of 0 index)
*/

function getOccurancesOfK(array, k) {
  const firstOccurance = binarySearch(array, k, 0, array.length - 1, 'first');
  if (firstOccurance === -1) return 0;

  const lastOccurance = binarySearch(array, k, 0, array.length - 1, 'last');
  return lastOccurance - firstOccurance + 1;
}

/**
 * time-complexity:
 *  - O(log(n)) -> halving our search space every iteration
 *
 * space-complexity:
 *  - O(log(n)) -> log(n) stack frames due to recursion
 *  - possible to bring down to O(1) with iterative approach
 *
 * @param {*} array
 * @param {*} target
 * @param {*} left
 * @param {*} right
 * @param {*} searchType
 */
function binarySearch(array, target, left, right, searchType) {
  if (array.length === 0 || left > right) {
    return -1;
  }
  // get midpoint index
  const mid = Math.floor((left + (right - left)) / 2);

  // if target is at midpoint index
  if (array[mid] === target) {
    // logic for returning index of first occurance of target
    if (searchType === 'first') {
      // if we can go to the left, and item to left is the same value as what we are searching for, keep going
      if (isInBounds(array, mid - 1) && array[mid] === array[mid - 1]) {
        return binarySearch(array, target, left, mid - 1, searchType);
      }
    }

    // logic for returning index of last occurance of target
    if (searchType === 'last') {
      if (isInBounds(array, mid + 1) && array[mid] === array[mid + 1]) {
        return binarySearch(array, target, mid + 1, right, searchType);
      }
    }

    // can no longer go left or right, return mid index
    return mid;
  }

  // if midpoint value < target
  else if (array[mid] < target) {
    // call recursively with left = mid + 1
    return binarySearch(array, target, mid + 1, right, searchType);
  }

  // else if midpoint value > taret
  else {
    // call recursively with right = mid - 1
    return binarySearch(array, target, left, mid - 1, searchType);
  }

  return -1;
}
