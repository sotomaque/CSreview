/**
 *
 * time complexity: O(2^n * n)
 * // making copies of each array takes O(n) time
 * // there are 2^n subsets (each step we decide to include or exclude an element)
 * // therefore O(2^n * n)
 *
 *
 * space complexity: O(2^n) -> we need space for every subset
 * // call stack -> n (height of tree)
 * // state -> max number of elements in a subset -> n
 * // result -> 2^n
 *
 * @param {*} arr
 * @param {*} k
 * @returns
 */

function check_if_sum_possible(arr, k) {
  // enumerate all possible subsets of the array
  const result = new Array();

  subsetHelper(arr, 0, [], result);

  // check if any can be reduced to add up to k
  for (let i = 0; i < result.length; i++) {
    const subset = result[i];
    const reducedSumOfSubset = subset.reduce((acc, value) => {
      return acc + value;
    }, 0);

    if (reducedSumOfSubset === k) {
      return true;
    }
  }

  return false;
}

function subsetHelper(arr, currentIndex, partialResult, globalResult) {
  // base case
  if (currentIndex == arr.length) {
    // append partial result to global result
    // but ignore the empty set (this was defined in the problem statement)
    if (partialResult.length !== 0) {
      globalResult.push(partialResult);
    }
    return;
  }

  // include current index
  subsetHelper(
    arr,
    currentIndex + 1,
    [...partialResult, arr[currentIndex]],
    globalResult
  );

  // exclude current index
  subsetHelper(arr, currentIndex + 1, [...partialResult], globalResult);
}

const testArray = [2, 4, 8];
const testTarget = 6;

console.log(check_if_sum_possible(testArray, testTarget));
