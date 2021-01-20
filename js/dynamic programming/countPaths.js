function uniquePaths(grid) {
  return helper(grid, 0, 0);
}

/**
 * Recursive Implentation
 *
 * time-complexity:
 *  - O(2^(n+m-1)) => O(2^(n+m))
 *
 * space-complexity:
 *  - variables -> O(1)
 *  - recursive depth in stack -> O(n + m - 1) -> O(n+m)
 *  - O(1) * O(n + m) => O(n + m)
 *
 * @param {*} grid
 * @param {*} row
 * @param {*} col
 */
function helper(grid, row, col) {
  // guards
  if (row === grid.length) return 0;
  if (col === grid[0].length) return 0;

  // base case
  if (row === grid.length - 1 && col === grid[0].length - 1) return 1;

  // recursion case
  const downSum = helper(grid, row + 1, col);
  const rightSum = helper(grid, row, col + 1);

  // return sum of recurive values
  return downSum + rightSum;
}

// Improvement (bottom up DP)

/**
 * time-complexity:
 *  - O(m x n) -> have to traverse entire dependancy array
 *
 * space-complexity:
 *  - O(m x n) (we can optimize space much like we did in the Fib DP implementation)
 *  - we could work with only two rows at the time, using th values of one row to fill in the values of the next row,
 * when we are trying to fill in the values of row i + 1, we reuse the space allocated to row i - 1;
 *  - can bring down space complexity to O(n)
 *
 * @param {*} rows
 * @param {*} cols
 */
function countPaths(rows, cols) {
  const table = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
  // base case(s)
  // all elements of first row = 1
  for (let i = 0; i < table[0].length; i++) {
    table[0][i] = 1;
  }
  // all elements of first col = 1
  for (let i = 0; i < table.length; i++) {
    table[i][0] = 1;
  }

  // iterate bottom up and compute next value, storing it in table
  for (let j = 1; j < table.length; j++) {
    for (let k = 1; k < table[j].length; k++) {
      table[j][k] = table[j - 1][k] + table[j][k - 1];
    }
  }

  // return the value stored at the "bottom right" cell
  return table[rows - 1][cols - 1];
}

const grid = [
  [1, 1, 1],
  [1, 1, 1],
];
let rows = grid.length; // number of rows
let cols = grid[0].length; // number of columns
const res = countPaths(rows, cols);

console.log(res);
