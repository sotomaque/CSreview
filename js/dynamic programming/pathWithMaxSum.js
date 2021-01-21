/*

    Problem Statement:
        - given an (n, m) matrix, where n, m are the dimensions of a matrix, where each cell contains an integer value
            - assume you can only move right or down
        - find the path that maximizes the sum of the values contained in the cell
        - return that sum

        - i.e. (n, m) = (4, 5) => (row, column)
            ---------------------
            | 1 | 2 | 3 | 4 | 5 |
            ---------------------
            |31 | 10| 10| 10| 10|
            ---------------------
            | 1 | 51| 10| 10| 1 |
            ---------------------
            | 1 | 49| 11| 11| x |
            ---------------------

        - should return (1 + 31 + 10 + 51 + 49 + 11 + 11) = 164
*/

/**
 * time-complexity:
 *   - O(2^(m + n))
 *
 * space-complexity:
 *   - max length of recursive stack
 *   - O(n + m)
 *
 * @param {*} grid
 * @param {*} row
 * @param {*} col
 */
function pathWithMaxSumRecursive(grid, row = 0, col = 0) {
  // base case
  if (row === grid.length - 1 && col === grid[0].length - 1)
    return grid[row][col];

  // last row (can only go right)
  if (row === grid.length - 1) {
    return grid[row][col] + pathWithMaxSumRecursive(grid, row, col + 1);
  }
  // last column (can only go down)
  if (col === grid[0].length - 1) {
    return grid[row][col] + pathWithMaxSumRecursive(grid, row + 1, col);
  }

  return (
    grid[row][col] +
    Math.max(
      pathWithMaxSumRecursive(grid, row + 1, col),
      pathWithMaxSumRecursive(grid, row, col + 1)
    )
  );
}

/**
 * time-complexity:
 *  - only compute every subproblem once
 *  - each subproblem requires a constant amount of computation
 *  - total (n * m) subproblems
 *  - O(n * m)
 *
 * space-complexity:
 *  - length of recursive stack + memo size -> (n+m) + (n*m) ~ (n * m)
 *  - O(n * m)
 *
 * NEED FOR DP:
 *  - we are computing an entire subtree twice
 *  - need to cache previously computed results to avoid wasting
 *  - time and resources
 *
 * @param {*} grid
 * @param {*} row
 * @param {*} column
 */
function pathWithMaxSumDP(grid, memo, row = 0, column = 0) {
  // dp guard
  if (memo[row][column] !== 0) {
    return memo[row][column];
  }

  // guards
  if (row >= grid.length) return 0;
  if (column >= grid[0].length) return 0;

  // base case
  if (row === grid.length - 1 && column === grid[0].length - 1)
    return grid[row][column];

  // if we are on the last row, we can only go right
  if (row === grid.length - 1) {
    return grid[row][column] + pathWithMaxSumDP(grid, memo, row, column + 1);
  }
  // if we are on the last column, we can only go down
  if (column === grid[0].length - 1) {
    return grid[row][column] + pathWithMaxSumDP(grid, memo, row + 1, column);
  }

  let maxDown = pathWithMaxSumDP(grid, memo, row + 1, column);
  let maxRight = pathWithMaxSumDP(grid, memo, row, column + 1);

  memo[row][column] = Math.max(maxDown, maxRight) + grid[row][column];

  return memo[row][column];
}

// ITERATIVE SOLUTION
// approach:
//  - we know for any given spot on the grid it is dependant on the element to its right and below it
//  - so if we have those two, we can compute the value of the given element in constant time,
//
//  - in general the iterative approach will 'flip' the recursive approach;
//    - what was at the bottom of the recursive approach will be the begining of the iterative approach;
//    - what was at the top of the recursion will be the bottom of the iterative approach
//  - the base case will now be the begining of the iterative approach

/*
    STEP 1:
        - identify variants 
            - row / column
            - row can take on the values: 0 -> (M - 1)
            - column can take on the values: 0 -> (N - 1)
        - create a two dimensional array of size (M x N) of type int (same type as the function itself)
    STEP 2:
        - now we want to fill out data structure
            - first we can fill the spot at [M - 1][N - 1]

    time-complexity:
        - O(m * n)

    space-complexity:
        - O(m * n)

*/

function pathWithMaxSumIterative(grid) {
  let m = grid.length;
  let n = grid[0].length;

  // initalize a 2d array (with everything being 0 (m x n array)
  const DP = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // this implementation fills in the DP table from the bottom right corner to the top left corner
  // and stores the final result at DP[0][0];
  // this could also be achieved by doing the inverse, and starting from [0][0] and working down / right
  DP[m - 1][n - 1] = grid[m - 1][n - 1];

  // special case for last row
  // each element is equal to the sum of its value and
  // its neighbor to its right
  for (let col = grid[0].length - 2; col >= 0; col--) {
    DP[m - 1][col] = grid[m - 1][col] + DP[m - 1][col + 1];
  }
  // special case for last column
  // each element is equal to the sum of its value and
  // its neighbor beneath it
  for (let row = grid.length - 2; row >= 0; row--) {
    DP[row][n - 1] = grid[row][n - 1] + DP[row + 1][n - 1];
    // now we can loop over column
    for (let col = n - 2; col >= 0; col--) {
      // current value is sum of value at current index + max of (position above us, position to the left of us)
      DP[row][col] =
        grid[row][col] + Math.max(DP[row + 1][col], DP[row][col + 1]);
    }
  }
  // final answer is now at DP[0][0]
  return DP[0][0];
}

/**
 * test solution(s)
 */
let matrix = [
  [1, 2, 3, 4, 5],
  [31, 10, 10, 10, 10],
  [1, 51, 10, 10, 1],
  [1, 49, 11, 11, 1],
]; // should be 164

let memo = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

// console.log(`matrix has ${matrix.length} rows and ${matrix[0].length} column`);

// let result = pathWithMaxSumDP(matrix, memo);
// console.log(result);

console.log(pathWithMaxSumIterative(matrix));

console.log(pathWithMaxSumRecursive(matrix));
