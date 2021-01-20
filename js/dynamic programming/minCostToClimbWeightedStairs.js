/*
given a series of N steps and the cost of landing at each of those steps

assume you can either move to the next step, or skip it and jump to the following one
however you cannot skip more than one step.

input [x, x, x, x, x] <- n + 2 elements (first and last elements === 0)
*/

// Brute force -> enumerate all paths, find min, return it
// enumerating total number of paths is exponential in size of input (n)
// brute force wont work in polynomial time
// this is due to the repetitive work (same subproblems repeatedly solved)

// to improve the brute force approach, we can use a decrease and conquer method
//

/**
 * time-complexity:
 *   - O(n) (size of the table thats allocated and we spend a constant amount of time at each vertex computing)
 *
 * space-complexity:
 *   - O(n) (size of the memoized cache)
 *
 * @param {array} nums
 */
function minCostStairs(nums) {
  // DP will store min-cost value of going from position 0 to position i at the ith index
  const DP = [0, nums[0]];
  //  nums = [10, 15, 20, 10, 12]
  // DP = [0, 10, 15 + Math.main(10, 0)]
  // DP = [0, 10, 15, 30, 25, 37]
  for (let i = 2; i < nums.length + 1; i++) {
    DP[i] = nums[i - 1] + Math.min(DP[i - 1], DP[i - 2]);
  }
  return DP[DP.length - 1];
}

const nums = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostStairs(nums));
