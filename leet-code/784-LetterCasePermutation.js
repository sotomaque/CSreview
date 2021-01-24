/*
fiven a string we can transform every letter individually to be lowercase
or uppercase to create another string.

return a list of all possible strings.

i.e.
 input = 'a1b2'
 output = ['a1b2', 'a1B2', 'A1b2', 'A1B2'];
*/

function isLetter(char) {
  return char.toUpperCase() !== char.toLowerCase();
}

/**
 * time-complexity:
 *  - O(n * 2^n) (branching factor)
 *
 * space-complexity:
 *  - O(n) (max depth of recursive stack)
 *
 * @param {*} str
 */
function letterCasePermutation(str) {
  const result = new Array();
  letterCaseHelper(str, 0, '', result);
  return result;
}

function letterCaseHelper(str, currentIndex, partialSolution, result) {
  // base case
  if (currentIndex === str.length) {
    result.push(partialSolution);
    return;
  }

  // recursive case
  if (!isLetter(str[currentIndex])) {
    //  1 choice
    letterCaseHelper(
      str,
      currentIndex + 1,
      partialSolution + str[currentIndex],
      result
    );
  } else {
    //  2 choices
    // uppercase char
    letterCaseHelper(
      str,
      currentIndex + 1,
      partialSolution + str[currentIndex].toUpperCase(),
      result
    );
    // lowercase char
    letterCaseHelper(
      str,
      currentIndex + 1,
      partialSolution + str[currentIndex].toLowerCase(),
      result
    );
  }
}

console.log(letterCasePermutation('a1b2'));
