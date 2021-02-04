/**
 * time-complexity:
 *  - O(n!)
 *
 * space-complexity:
 *  - O(n) - max height of recursion tree O(n)
 *    since we have a problem of size n at the top and a problem of size 0 at the bottom
 *    and at each step the problem size decreases by 1
 *  - so the height is proportional to O(n) so its a big improvement from doing a BFS
 *
 * @param {string} inputString -> user defined string they wish to see permuted
 * @param {array} permutation -> current permutation (state)
 * @param {[boolean]} hasPlaced -> boolean array indicating whether we have placed char into permutation of not
 *  i.e. if we have used inputString[0] then hasPlaced[0] = true, false otherwise
 * @param {number} numPlaced -> count total number of chars we have placed in our permutation, once this reaches
 *  len(inputString), we are done permuting, print and return
 */
function printAllPermutationsOfAString(
  inputString,
  permutation = [],
  hasPlaced = new Array(inputString.length - 1),
  numPlaced = 0
) {
  // base case
  if (numPlaced === inputString.length) {
    console.log(permutation);
    return;
  }

  // transitions
  for (let i = 0; i < inputString.length; i++) {
    if (!hasPlaced[i]) {
      permutation[i] = inputString[numPlaced];
      hasPlaced[i] = true;
      printAllPermutationsOfAString(
        inputString,
        permutation,
        hasPlaced,
        numPlaced + 1
      );
      hasPlaced[i] = false;
    }
  }
}

var permute = function (nums) {
  let res = [];
  let hasPlaced = Array(nums.length).fill(false);
  dfs(nums, [], hasPlaced, res);

  return res;
};

function dfs(nums, path, used, res) {
  if (path.length == nums.length) {
    // make a deep copy since otherwise we'd be append the same list over and over
    res.push(Array.from(path));
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    // skip used nums
    if (used[i]) continue;
    // add nums to permutation, mark nums as used
    path.push(nums[i]);
    used[i] = true;
    dfs(nums, path, used, res);
    // remove nums from permutation, mark nums as unused
    path.pop();
    used[i] = false;
  }
}

// let inputString = 'tac';
// printAllPermutationsOfAString(inputString);

let a = [1, 2, 3];
let res = permute(a);
console.log(res);
