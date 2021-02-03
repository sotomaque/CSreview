/*
given a string we can transform every letter individually to be lowercase
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
 *  - O(2^n * n) (branching factor) * (n bc each node has to deal with immutatble strings and therfore create a new string (amount of work is proportinal to length of string))
 *
 * space-complexity:
 *  - O(n^2) (max depth of recursive stack)
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

// ALT
// /**
//  * @param {string} S
//  * @return {string[]}
//  */
// var letterCasePermutation = function(S) {
//   const res = []
//   helper(S, 0, [], res);
//   return res;
// };

// function helper(array, index, partialAnswer, globalAnswer) {
//   // base case: leaf node
//   if (index >= array.length) {
//       globalAnswer.push(partialAnswer.join(''));
//       return
//   }
//   // recursive case: internal node
//   if (array[index].toUpperCase() !== array[index].toLowerCase()) {
//       // we have a letter
//       helper(array, index + 1, [...partialAnswer, array[index].toUpperCase()], globalAnswer)
//       helper(array, index + 1, [...partialAnswer, array[index].toLowerCase()], globalAnswer)

//   } else {
//       helper(array, index + 1, [...partialAnswer, array[index]], globalAnswer)
//   }
// }
