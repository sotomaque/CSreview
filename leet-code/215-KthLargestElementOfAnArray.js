/*
Find the kth largest element in an unsorted array.
Note that it is the kth largest element in the sorted order,
not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4

*/

/**
 * time-complexity:
 *   - .sort() => O(nLog(n)) (Tim Sort)
 *   - .reverse() => O(n)
 *   - index lookup => O(1)
 *   - therefore O(nLogn)
 * @param {*} nums 
 * @param {*} k 
 */
function kthLargest(nums, k) {
    if (k < 1 || !nums || !nums.length || k > nums.length) return
    return nums.sort((a, b) => a - b).reverse()[k - 1]
}

/**
 * intuition for an improvement
 * 
 * sort only to the point where the 
 * kth largest element fall into index
 * n - k
 * 
 * i.e. im looking for the 4th largest (k = 4)
 * sort only first 4 nums
 * 
 * modify quicksort
 * -when you find a pivot and place it in its correct place
 * - we then can only recurse on the subarray which holds
 * index (n - k)
 */


/**
 * time-complexity:
 *  - on average O(n)
 * 
 * 
 * @param {} someArray 
 * @param {*} startIndex 
 * @param {*} endIndex 
 * @param {*} index 
 */

function helper(someArray, startIndex, endIndex, index) {
  // base case
  if (startIndex === endIndex) return;

  // get random pivot index
  const pivot_index = getRandomInt(startIndex, endIndex);

  // swap that element with first element of array
  someArray = swap(someArray, startIndex, pivot_index);

  // initialize pointers to begin iterating array
  let slow_pointer = startIndex;

  for (
    let fast_pointer = startIndex;
    fast_pointer <= endIndex;
    fast_pointer++
  ) {
    // advance fast pointer every iteration,
    // if fast pointer points at something smaller than what the slow pointer points at
    // incremement slow poitner and swap
    if (someArray[fast_pointer] < someArray[startIndex]) {
      slow_pointer = slow_pointer + 1;
      someArray = swap(someArray, slow_pointer, fast_pointer);
    }
  }
  // slow pointer now points at last element < pivot value
  // fast pointer now points at end of array

  // take pivot and insert it into its right place (where the slow pointer is pointing)
  someArray = swap(someArray, startIndex, slow_pointer);

  // conditionally recurse on left / right partitions
  if (index === slow_pointer) {
    return
  } else if (index < slow_pointer) {
    helper(someArray, startIndex, slow_pointer - 1, index); // left partition
  } else {
    helper(someArray, slow_pointer + 1, endIndex, index); // right partition
  }

  return;
}

function swap(list, i, j) {
  [list[i], list[j]] = [list[j], list[i]];
  return list;
}

function getRandomInt(a, b) {
  let min = Math.ceil(a);
  let max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min + 1;
}

function QuickSelect(nums, k) {
  helper(nums, 0, nums.length - 1, k);
  // returning nums.length - k returns
  // kth largest number if nums is sorted

  // returning k - 1 returns kth smallest
  // number if nums is sorted
  return nums[nums.length - k]
}


const nums = [3,2,1,5,6,4]
const k = 2

const kthLargestNumber = QuickSelect(nums, k);
console.log(kthLargestNumber)
// console.log(`Kth (k = ${k}) largest number of `, nums, ` = ${kthLargestNumber}`)