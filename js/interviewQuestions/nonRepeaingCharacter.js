/*
    given a string, return the first character which appears only once

    - approach:
        - we know we will have to traverse entire string in best case scenario

*/

/**
 * time-complexity:
 *  - O(n) where n is the length of the string
 *
 * space-complexity:
 *  - O(k) where k is the number of unqiue letters
 * in the string, (stored in map)
 *
 * @param {*} s
 */
function firstNonReaptingCharacter(s) {
  let charCount = new Map();
  let result = null;

  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]]) {
      charCount[s[i]] += 1;
    } else {
      charCount[s[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return s[i];
    }
  }

  return result;
}

let inputString = 'aabcbk';
console.log(firstNonReaptingCharacter(inputString));
