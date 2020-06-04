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

        approach: 
            - exhaustivley take every path, keeping count of path sum
            - retain 'global' variable for max
            - if a path > global, update global
            - after all recursive calls in helper, return global

*/


function helper(grid, row, column) {
    // guards
    if (row >= grid.length) return 0 // return -infitiy if we are allowing negative values in our grid
    if (column >= grid[0].length) return 0

    // base case
    if (row === grid.length - 1 && column === grid[0].length - 1) return grid[row][column]

    let maxDown = helper(grid, row + 1, column);
    let maxRight = helper(grid, row, column + 1);

    return (Math.max(maxDown, maxRight) + grid[row][column])
}


function pathWithMaxSum(grid) {
    return helper(grid, 0, 0)
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

console.log(`matrix has ${matrix.length} rows and ${matrix[0].length} column`)
let result = pathWithMaxSum(matrix)

console.log(result)
