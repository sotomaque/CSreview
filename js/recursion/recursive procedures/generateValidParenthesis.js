/*
    Problem Statement:  
        - given an input n, 
        - output all the valid parenthesis using n left and n right parenthesis

    i.e. 

        n = 1 
        output = [ () ]

        n = 2
        output = [ ()(), (()) ]

*/

/**
 * time-complexity:
 *  - O(2^n) -> every time we have two choices, include or not include
 *
 * space-complexity:
 *  - O(n) -> max length of 'result' variable = n
 *
 * @param {number} n - number of pairs of parenthesis we want to generate all valid pairs for
 * @param {string} result
 * @param {number} leftCount - number of opening parenthesis we can still place in result str; initially = n
 * @param {number} rightCount - number of closing parenthesis we can still place in result str; initially = n
 */
function generateValidParenthesis(
  n,
  result = [],
  leftCount = n,
  rightCount = n
) {
  // base case
  if (leftCount === 0 && rightCount === 0) {
    console.log(result);
    return;
  }

  // must add left parenthesis if leftCount === rightCount
  if (leftCount === rightCount) {
    generateValidParenthesis(
      n - 1,
      [...result, '('],
      leftCount - 1,
      rightCount
    );
  }

  // can add a left or a right if rightCount > leftCount
  if (rightCount > leftCount) {
    // choose to add left parenthesis only if leftCount > 0
    if (leftCount > 0) {
      generateValidParenthesis(
        n - 1,
        [...result, '('],
        leftCount - 1,
        rightCount
      );
    }

    // choose to add right parenthesis
    generateValidParenthesis(
      n - 1,
      [...result, ')'],
      leftCount,
      rightCount - 1
    );
  }
}

generateValidParenthesis(2);
