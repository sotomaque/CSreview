/**
 * recursive implementation
 *
 * time-complexity:
 *   - O(2^n)
 *
 * space-complexity:
 *   - O(2^n)
 *
 * @param {*} nums
 * @param {*} targetSum
 * @param {*} currentIndex
 */
function canFindTwoSubsetsWithEqualSums(nums, targetSum = 0, currentIndex = 0) {
  // find a subset that sums to x
  // local decision: include element at current index or not
  if (targetSum < 0) return false;
  if (targetSum === 0) return true;
  if (i === targetSum) return false;

  return (
    canFindTwoSubsetsWithEqualSums(nums, targetSum, currentIndex + 1) ||
    canFindTwoSubsetsWithEqualSums(nums, targetSum - nums[i], i + 1)
  );
}

/**
 * iterative implementation
 *
 * @param {*} nums
 * @param {*} targetSum
 * @param {*} currentIndex
 */
function canFindTwoSubsetsWithEqualSumsIterative(nums, targetSum) {
  const DP = new Array(nums.length)
    .fill('')
    .map(() => new Array(nums.length).fill(''));
  console.log(DP);
}

// console.log(canFindTwoSubsetsWithEqualSums([1, 2, 3, 4, 5, 6, 7, 8]));

canFindTwoSubsetsWithEqualSumsIterative([1, 2, 3, 4, 5, 6]);
