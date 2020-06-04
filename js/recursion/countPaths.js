/*

    Problem Statement:
        - given an (n, m) matrix, where n, m are the dimensions of a matrix, count all the distinct paths
        you could take to get from the top left element to the bottom right element
        - assume you can only move right or down

        - i.e. (n, m) = (4, 5) => (row, column)
            ---------------------
            | x |   |   |   |   |
            ---------------------
            |   |   |   |   |   |
            ---------------------
            |   |   |   |   |   |
            ---------------------
            |   |   |   |   | x |
            ---------------------
        
        - at each position, so long as we are not at the far right column or bottom row, we can make 
        a decision, either go right or down

*/


/**
 * 
 * @param {*} grid - 2D array
 * @param {*} row - current row we are looking at
 * @param {*} column - current column we are looking at
 * @returns total number of ways to get from current cell to bottom right
 * cell of grid
 */
function helper(grid, row, column) {
    // guards
    if (row >= grid.length) return 0
    if (column >= grid[0].length) return 0

    // base case
    if (row === grid.length - 1 && column === grid[0].length - 1) return 1

    // recursion (transitions)
    let numDown = helper(grid, row + 1, column)
    let numRight = helper(grid, row, column + 1)

    return numDown + numRight
}

/**
 * time-complexity:
 *  - O(2^(n+m-1)) => O(2^(n+m))
 * 
 * space-complexity:
 *  - variables -> O(1)
 *  - recursive depth in stack -> O(n + m - 1) -> O(n+m)
 *  - O(1) * O(n + m) => O(n + m)
 * 
 * @param {*} grid 
 */
function countPaths(grid) {
    return helper(grid, 0, 0)
}



/**
 * instead of passing in a whole grid, if we were asked to compute
 * all the different ways to get from coord (0, 0) to cord (n, m)
 * given n, m and the rules about moving,
 * 
 * we can modify our function signature(s) to meet that criteria
 */
function helperAlt(n, m, row, column) {
    // guards
    if (row > n) return 0
    if (column > m) return 0

    // base case
    if (row === n && column === m ) return 1

    // recursion (transitions)
    let numDown = helperAlt(n, m, row + 1, column)
    let numRight = helperAlt(n, m, row, column + 1)

    return numDown + numRight
}
function countPathsAlt(n, m) {
    return helperAlt(n, m, 0, 0)
}



/**
 * test solution(s)
 */
let matrix = [
    [0, 1, 1], 
    [1, 1, 1], 
    [1, 1, 1], 
    [1, 1, 2]
]
console.log(`matrix has ${matrix.length} rows and ${matrix[0].length} column`)
let result = countPaths(matrix)
console.log(result)

// console.log(countPathsAlt(3, 2))
