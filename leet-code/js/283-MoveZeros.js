/**
 * Given an array nums, write a function to move all 0's to the
 * end of it while maintaining the relative order of the non-zero elements.
 */

/**
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 */

/**
 * time-complexity:
 *  - O(n)
 * 
 * space-complexity:
 *  - O(1)
 * 
 * @param {*} nums 
 */
function moveZeros(nums) {
  // index of where we should set the next 0
  let currentIndex = 0;
  // scan through array
  for (let i = 0; i < nums.length; i++) {
    // if we run into a non 0
    if (nums[i] !== 0) {
      // put that # at our variable index
      nums[currentIndex] = nums[i];
      // and increment index
      currentIndex++;
    }
  }
  // now weve scanned through array,
  // non zeros are in same relative order, just in front
  // of the array
  // currentIndex points at index of first 0 entry in array
  for (let i = currentIndex; i < nums.length; i++) {
    // set remaining entries to 0
    nums[i] = 0;
  }
  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
