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
 *  - only compute every subproblem once
 *  - therefore we spend only constant time on every subproblem
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
        return memo[row][column]
    }

    // guards
    if (row >= grid.length) return 0 
    if (column >= grid[0].length) return 0

    // base case
    if (row === grid.length - 1 && column === grid[0].length - 1) return grid[row][column]

    // if we are on the last row, we can only go right
    if (row === grid.length - 1) {
        return grid[row][column] + pathWithMaxSumDP(grid, memo, row, column + 1)
    } 
    // if we are on the last column, we can only go down
    if (column === grid[0].length - 1) {
        return grid[row][column] + pathWithMaxSumDP(grid, memo, row + 1, column)
    }
   
    let maxDown = pathWithMaxSumDP(grid, memo, row + 1, column);
    let maxRight = pathWithMaxSumDP(grid, memo, row, column + 1);
    
    memo[row][column] = (Math.max(maxDown, maxRight) + grid[row][column])

    return memo[row][column]
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

function pathWithMaxSumIterative(grid, row, column) {

    let n = column.length;
    let m = row.length;

    let DP = [m][n]

    DP[m - 1][n - 1] = grid[m - 1][b - 1]

    // special case for last row
    // each element is equal to the sum of its value and 
    // its neighbor to its right
    for (let c = n - 2; c >= 0; c--) {
        DP[m-1][c] = grid[m-1][c] + DP[m-1][c + 1]
    }

    for (let r = m - 2; r >= 0; r--) {
        // special case for last column
        // each element is equal to the sum of its value and
        // its neighbor beneath it
        DP[r][n-1] = grid[r][n-1] + DP[r+1][n-1]
        // now we can loop over column
        for (let c = n-2; c >= 0; c--) {
            DP[r][c] = grid[r][c] + Math.max(DP[r+1][c], DP[r][c+1])
        }
    }

    return DP[0][0]
}


/**
 * test solution(s)
 */
let matrix = [
    [1, 2, 3, 4, 5],
    [31, 10, 10, 10, 10],
    [1, 51, 10, 10, 1],
    [1, 49, 11, 11, 0]
] // should be 164

let memo = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

console.log(`matrix has ${matrix.length} rows and ${matrix[0].length} column`)

let result = pathWithMaxSumDP(matrix, memo)

console.log(result)
