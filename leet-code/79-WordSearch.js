/*
given a 2d board and a word, search for that word.

the same letter cannot be used more than once.
*/

/*
i.e. 
board = [
  [a, b, c, e],
  [s, f, c, s],
  [a, d, e, e],
]

word = 'abcced' -> true
word = 'see' -> true
word = 'abcb' -> false
*/

/**
 * time-complexity:
 *  - O(n) where n is the num of cells in the grid
 *
 * space-complexity:
 *  - O(n) if entire board is the word we are looking for
 *
 * @param {*} nums
 * @param {*} word
 */
function wordSeach(nums, word) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (nums[i][j] === word[0] && dfs(nums, i, j, 0, word)) {
        return true;
      }
    }
  }
  return false;
}

function dfs(nums, i, j, count, word) {
  if (count === word.length) return true;

  if (
    i < 0 ||
    i >= nums.length ||
    j < 0 ||
    j >= nums[i].length ||
    nums[i][j] !== word[count]
  ) {
    return false;
  }

  // avoid using same letter twice
  const temp = nums[i][j];
  nums[i][j] = ' ';
  const foundWord =
    dfs(nums, i + 1, j, count + 1, word) ||
    dfs(nums, i, j + 1, count + 1, word) ||
    dfs(nums, i - 1, j, count + 1, word) ||
    dfs(nums, i, j - 1, count + 1, word);
  nums[i][j] = temp;

  return foundWord;
}
const nums = [
  ['a', 'b', 'c', 'e'],
  ['s', 'f', 'c', 's'],
  ['a', 'd', 'e', 'e'],
];

const res = wordSeach(nums, 'abcb');
console.log(res);
