/*
  you work as a cachier spending your day giving back change (only coins).
  yoiu need to use the fewest coins possible whenever you give change.

  i.e. given [1, 2, 5] and amount = 11 -> 5, 5, 1

  you may assume there are unlimited amount of coins of each diff denomination
  if no valid answer exists, return -1

  trying to minimize the total number of coins 
  -> minimize -> OPTIMIZATION PROBLEM

  Brute force -> iterate through denominations and follow an exhaustive search / enumeration
  strategy 
  -> too expensive (exponential time)

  Recursive intuition -> subsetSum problem
  -> each step i have N choices where N is the number of different denominations of coins i have
  -> if i have 3 diff denominations, the branching factor is 3, i will have roughly 3^h nodes
  -> worse than brute force approach

  Greedy strategy-> make a locally optimized choice (best choice at the moment)
    i.e. first pick coin of largest denomination, keep doing so until we cannot use that coin anymore
    try reaching target with smaller coins now

*/

/**
 * time-complexity:
 *  - O(a*k) where a is the target and k is the total amount of given coins
 *
 * space-complexity:
 *  - O(a) (size of table we allocated)
 *
 * @param {array} nums - array of coin values (i.e. [1, 3, 5, 7])
 * @param {number} target - targetSum
 */
function coinChange(nums, target) {
  const cache = new Array(target + 1).fill(Number.MAX_VALUE);

  // base case
  cache[0] = 0;
  if (1 in nums) {
    cache[1] = 1;
  }

  // iterate through length of cache
  for (let i = 1; i < target + 1; i++) {
    // iterate through given coins
    for (let j = 0; j < nums.length; j++) {
      // only consider valid subproblems
      if (i - nums[j] >= 0) {
        cache[i] = Math.min(cache[i], cache[i - nums[j]]);
      }
    }
    cache[i]++;
  }
  return cache[target] === Number.MAX_VALUE ? -1 : cache[target];
}

console.log(coinChange([1, 5, 7], 10));
