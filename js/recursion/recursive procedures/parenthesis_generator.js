/**
 * @param {int32} n
 * @return {list_str}
 */
function find_all_well_formed_brackets(n) {
  const validSets = [];
  const finalResult = [];

  helper(0, [], n, n, validSets);

  // format the array to be comma seperated
  validSets.forEach((validSet) => {
    finalResult.push(validSet.join(''));
  });

  return finalResult;
}

// approach:
// use recursion!
function helper(
  currentIndex,
  result,
  remainingLeft,
  remainingRight,
  validSets
) {
  // base case
  if (remainingLeft === 0 && remainingRight === 0) {
    validSets.push(result);
    return;
  }

  // add left if remainingLeft === remainingRight
  if (remainingLeft === remainingRight) {
    helper(
      currentIndex - 1,
      [...result, '('],
      remainingLeft - 1,
      remainingRight,
      validSets
    );
  }

  // can only add a left or right if remainingRight > remainingLeft
  if (remainingRight > remainingLeft) {
    // this is where we have the tree split into two valid paths:
    // add left
    if (remainingLeft > 0) {
      helper(
        currentIndex - 1,
        [...result, '('],
        remainingLeft - 1,
        remainingRight,
        validSets
      );
    }

    // add right
    helper(
      currentIndex - 1,
      [...result, ')'],
      remainingLeft,
      remainingRight - 1,
      validSets
    );
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
