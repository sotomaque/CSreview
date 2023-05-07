/*
given n pairs of parenthesis, write a function to generate all combinations of well-formed parenthesis.

*/

/**
 * time-complexity:
 *  - O(2^n) -> every time we have two choices, include or not include
 *
 * space-complexity:
 *  - O(n) -> max length of 'result' variable = n
 *
 * @param {number} n - number of pairs of parenthesis we want to generate all valid pairs for
 */
function generateParenthesis(n) {
  const results = [];
  parenthesesHelper(n, n, n, [], results);

  return results;
}

function parenthesesHelper(
  n,
  remainingLeft,
  remaningRight,
  partialResult,
  globalResult
) {
  // base case
  if (remainingLeft === 0 && remaningRight === 0) {
    globalResult.push(partialResult);
    return;
  }

  // recursive case

  // must add left parenthesis
  if (remaningRight === remainingLeft) {
    parenthesesHelper(
      n - 1,
      remainingLeft - 1,
      remaningRight,
      [...partialResult, '('],
      globalResult
    );
  }

  if (remaningRight > remainingLeft) {
    if (remainingLeft > 0) {
      // can add an opening brace next
      parenthesesHelper(
        n - 1,
        remainingLeft - 1,
        remaningRight,
        [...partialResult, '('],
        globalResult
      );
    }
    parenthesesHelper(
      n - 1,
      remainingLeft,
      remaningRight - 1,
      [...partialResult, ')'],
      globalResult
    );
  }
}

const n = 3;
const res = generateParenthesis(n);

console.log(res);
