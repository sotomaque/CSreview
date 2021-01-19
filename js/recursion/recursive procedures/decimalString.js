/**
 * function takes an integer, n,
 * and returns all integers such that
 * each integer is of length <= n
 *
 * time-complexity:
 *   - each iteration, break problem into 10 subproblems
 *   - each subproblem has constant amount of work (print prefix if base case)
 *   - O(10^n)
 *
 * space-complexity:
 *   - O(n) (max depth of recursion)
 *
 * @param {*} n
 */
function decimalString(remainingLength, prefix = '') {
  if (remainingLength === 0) {
    return console.log(prefix);
  } else {
    // enumerate all values [0-9]
    // recursively
    for (let i = 0; i < 10; i++) {
      decimalString(remainingLength - 1, `${prefix}${i}`);
    }
  }
}

decimalString(2);
