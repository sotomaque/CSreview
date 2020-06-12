/*
    given a 2d array of 1's (land) and 0's (water), count the number of islands

    an island is a string of 1's connected horizontally or vetically

    i.e. 
        input = [ [1, 1, 1, 1, 0], 
                  [1, 1, 0, 1, 0],
                  [1, 1, 0, 0, 0], 
                  [0, 0, 0, 0, 0]
                ]
        result = 1

    i.e.
        input = [ [1, 1, 0, 1, 0], 
                  [1, 1, 0, 1, 0],
                  [1, 1, 0, 1, 0], 
                  [0, 0, 0, 0, 1]
                ]
        result = 3 * notice diagonal does not count *

    idea -> use breadth first search
            
*/

/**
 * time-complexity:
 *  - size of the matrix
 * 
 * space-complexity:
 * 
 * @param {*} array 
 */
function numberOfIslands(array) {
    let numOfIslands = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            // if we see a 1, increment counter
            // go thru whole island, turn all connected 1's to zeros
            if (array[i][j] === 1) {
                numOfIslands += 1;
                callBFS(array, i, j);
            }
        }
    }

    return numOfIslands;
}

function callBFS(array, i, j) {
    // boundry checks
    if (i < 0 || i >= array.length || j < 0 || j >= array.length || array[i][j] === 0) return

    array[i][j] = 0;
    callBFS(array, i - 1, j) // up
    callBFS(array, i + 1, j) // down
    callBFS(array, i, j - 1) // left
    callBFS(array, i, j + 1) // right
}

let input = [ [1, 1, 0, 1, 0], 
              [1, 1, 0, 1, 0],
              [1, 1, 0, 1, 0], 
              [0, 0, 0, 0, 0]]

let res = numberOfIslands(input)

console.log(res)