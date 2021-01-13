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
  if (!array.length || array === null) return 0;
  let numIslands = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      // if we see a 1, increment counter
      // however we dont want to always automatically increment by 1,
      // otherwise we can double count what should be one connected island
      // as multiple islands, instead we want to 'flip' all connected 1's to 0's
      if (array[i][j] === 1) {
        numIslands += callDFS(array, i, j);
      }
    }
  }

  return numIslands;
}

function callDFS(array, i, j) {
  // boundry checks
  if (
    i < 0 ||
    i >= array.length ||
    j < 0 ||
    j >= array[i].length ||
    array[i][j] === 0
  )
    return 0;

  array[i][j] = 0; // ensures we dont revisit this recursively

  callDFS(array, i - 1, j); // up
  callDFS(array, i + 1, j); // down
  callDFS(array, i, j - 1); // left
  callDFS(array, i, j + 1); // right

  return 1; // account for original island that we saw while traversing the matrix
}

let input = [
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 0, 1, 0],
  [0, 0, 0, 0, 1],
];

let res = numberOfIslands(input);

console.log(res);
