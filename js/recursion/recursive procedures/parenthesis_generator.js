/**
 * @param {int32} n
 * @return {list_str}
 */
function find_all_well_formed_brackets(n) {
  const validSets = [];
  helper([], n, n, validSets);
  return validSets;
}

function helper(result, remainingLeft, remainingRight, validSets) {
  // base case
  if (remainingLeft === 0 && remainingRight === 0) {
    validSets.push(result);
    return;
  }

  // add left if remainingLeft === remainingRight
  if (remainingLeft === remainingRight) {
    helper([...result, '('], remainingLeft - 1, remainingRight, validSets);
  }

  // can only add a left or right if remainingRight > remainingLeft
  // i.e. only recurse further if we number of closing brackets (right)
  // are greater than the number of opening brackets (left)
  if (remainingRight > remainingLeft) {
    // this is where we have the tree split into two valid paths:
    // add left
    if (remainingLeft > 0) {
      helper([...result, '('], remainingLeft - 1, remainingRight, validSets);
    }

    // add right
    helper([...result, ')'], remainingLeft, remainingRight - 1, validSets);
  }
}

const n = 3;
const result = find_all_well_formed_brackets(n);
console.log(result);

/**
 * time-complexity:
 *  - O(2^n) -> every time we have two choices, include or not include
 *
 * space-complexity:
 *  - O(n) -> max length of 'result' variable = n
 */
