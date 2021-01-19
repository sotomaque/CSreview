/**
 * time-complexity:
 *   - O(n) <- one single linear pass throught the array
 *
 * space-complexity:
 *   - O(1)
 *
 * @param {*} nums
 */
function dutchNationalFlag(nums) {
  let endOfOnes = 0;
  let startOfThrees = nums.length - 1;
  let i = 0;

  while (i <= startOfThrees) {
    if (nums[i] === 1) {
      swap(nums, i, endOfOnes);
      endOfOnes++;
      i++;
    } else if (nums[i] === 2) {
      i++;
    } else {
      // nums[i] === 3
      swap(nums, i, startOfThrees);
      startOfThrees--;
    }
  }

  return nums;
}

function swap(nums, indexA, indexB) {
  return ([nums[indexA], nums[indexB]] = [nums[indexB], nums[indexA]]);
}

//
//
//               i
//                 V
// end of ones                                     startOfThrees
//          V                                          v
let array = [2, 2, 3, 1, 1, 2, 3, 1, 2, 3, 3, 3, 2, 1, 1, 3];
//          [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3];

let sortedArray = dutchNationalFlag(array);
console.log(sortedArray);
