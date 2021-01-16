/**
 * Given an m x n 2d grid map of '1's (land) and '0's (water),
 * return the number of islands.
 *
 *  An island is surrounded by water and is formed by connecting adjacent
 * lands horizontally or vertically.
 *
 * You may assume all four edges of the grid are all surrounded by water.
 */

/*
 i.e. 1
  Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  Output: 1

i.e.2
  Input: grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  Output: 3
 */

function numberOfIslands(array) {
  // bounds
  if (!array.length || array === null) return 0;
  let numIslands = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      console.log(`looking at (${i}, ${j})`);
      if (+array[i][j] === 1) {
        console.log(`found a 1 at (${i}, ${j})`);
        numIslands += callDFS(array, i, j);
      }
    }
  }

  return numIslands;
}

function callDFS(array, i, j) {
  // bounds
  if (
    i < 0 ||
    i >= array.length ||
    j < 0 ||
    j >= array[i].length ||
    +array[i][j] === 0
  ) {
    console.log('returning 0 - bounds check call DFS');
    return 0;
  }

  // avoid revisiting the same spot recursivly
  array[i][j] = 0;

  // recursion
  callDFS(array, i - 1, j); // up
  callDFS(array, i + 1, j); // down
  callDFS(array, i, j - 1); // left
  callDFS(array, i, j + 1); // right

  // account for original island
  return 1;
}

console.log(
  numberOfIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
);
