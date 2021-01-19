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
 * @param {number} remainingLeftPieces - number of opening parenthesis we can still place in result str; initially = n
 * @param {number} remainingRightPieces - number of closing parenthesis we can still place in result str; initially = n
 */
function generateValidParenthesis(n) {
  const validSets = [];
  helper(n, [], n, n, validSets);
  const results = [];
  validSets.forEach((validString) => {
    results.push(validString.join(''));
  });
  return results;
}

function helper(
  n,
  result,
  remainingLeftPieces,
  remainingRightPieces,
  validSets
) {
  // base case
  if (remainingLeftPieces === 0 && remainingRightPieces === 0) {
    validSets.push(result);
    return;
  }

  // must add left parenthesis if remainingLeftPieces === remainingRightPieces
  if (remainingLeftPieces === remainingRightPieces) {
    helper(
      n - 1,
      [...result, '('],
      remainingLeftPieces - 1,
      remainingRightPieces,
      validSets
    );
  }

  // can add a left or a right if remainingRightPieces > remainingLeftPieces
  if (remainingRightPieces > remainingLeftPieces) {
    // choose to add left parenthesis only if remainingLeftPieces > 0
    if (remainingLeftPieces > 0) {
      helper(
        n - 1,
        [...result, '('],
        remainingLeftPieces - 1,
        remainingRightPieces,
        validSets
      );
    }

    // choose to add right parenthesis
    helper(
      n - 1,
      [...result, ')'],
      remainingLeftPieces,
      remainingRightPieces - 1,
      validSets
    );
  }
}

console.log(generateValidParenthesis(3));
