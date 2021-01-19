/**
 * time-complexity:
 *   - O(2^n)
 *
 * space-complexity:
 *   - O(n)
 *
 * @param {*} n
 */
function climbNStairs(n) {
  if (n === 1 || n === 2) return n;

  return climbNStairs(n - 1) + climbNStairs(n - 2);
}

/**
 * TOP DOWN DP APPROACH
 *
 * time-complexity:
 *   - O(n)
 *
 * space-complexity:
 *   - O(n)
 *
 * @param {*} n
 */
function climbNStairsDP(n, cache = { 1: 1, 2: 2 }) {
  if (n < 1) return -1;

  if (n in cache) {
    return cache[n];
  }

  cache[n] = climbNStairsDP(n - 1, cache) + climbNStairsDP(n - 2, cache);
  return cache[n];
}

/**
 * BOTTOM UP DP APPROACH
 *
 * time-complexity:
 *   - O(n)
 *
 * space-complexity:
 *   - O(1)
 *
 * @param {*} n
 */
function climbNStairsBottomUp(n) {
  const lastTwo = [1, 2];
  let counter = 3;

  while (counter <= n) {
    const temp = lastTwo.reduce((a, b) => a + b);
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = temp;
    counter++;
  }

  if (n > 1) {
    return lastTwo[1];
  }

  return lastTwo[0];
}

console.log(climbNStairsBottomUp(4));
