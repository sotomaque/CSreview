/*
  given an unsorted array indexed at 1
  and given an int, k

  return the kth smallest element in the array
  assume there are not repeats
*/

function kThSmallest(arr, k) {
  // checks
  // asset k is not null
  // asset (1 <= k <= arr.length)
  return helper(arr, k - 1, 0, arr.length - 1);
}

/**
 * time-complexity:
 *  - O(n) avg - bound by quicksort partition complexity
 *  - O(n^2) worst case (extreemly unlikely) - bound by quicksort partition complexity
 *
 * space-complexity:
 *  - O(log n) (everything is done in place, but we are using recursion, which at max will have
 * a depth ~ log n)
 *
 * @param {*} arr
 * @param {*} kthPos
 * @param {*} low
 * @param {*} high
 */
function helper(arr, kthPos, low, high) {
  // use quicksort partitioning
  let p = partition(arr, low, high);
  // after partitioning we know [ ...elemn < pivot, pivot, ...elem > pivot ]
  // first smallest element should be at index 1 if array is indexed at 1 not 0
  // this means if k < pivot, we only care about left subarray,
  // if k > pivot we only care about right subarray
  // if k === pivot, re found our answer -> return arr[p]
  if (kthPos < p) {
    return helper(arr, kthPos, low, p - 1);
  }
  if (kPos > p) {
    return helper(arr, kPos, p + 1);
  } else {
    return arr[p];
  }
}
