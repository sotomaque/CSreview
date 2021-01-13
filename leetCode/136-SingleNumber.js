/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
 */

/**
 * i.e.
 * Input: nums = [2,2,1]
 * Output: 1
 *
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 *
 * Input: nums = [1]
 * Output: 1
 */

/**
 * time-complexity:
 *  - 1 linear scan
 *  - O(n)
 *
 * space-complexity:
 *  - 1 extra data structure (of max length 2)
 *  - O(1)
 *
 */
function singleNumber(nums) {
  if (nums?.length === 1) return nums[0];

  const hashSet = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hashSet.has(nums[i])) {
      hashSet.delete(nums[i]);
    } else {
      hashSet.set(nums[i], 1);
    }
  }

  const iterator = hashSet.keys();
  return iterator.next().value;
}

console.log(singleNumber([2, 2, 1]));
