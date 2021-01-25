/*
Given a string, return whether or not it uses captialization correctly.
a string is said to use capitalization correctly if all letters are capialized,
no letters are capitalized, or only the first letter is capitalized
*/


/**
 * time-complexity:
 *  - O(n)
 * 
 * space-complexity:
 *  - O(1)
 * 
 * @param {*} str 
 */
function isCorrectlyCaptitalized(str) {
  if (!str || !str.length) return false;

  let captialLetters = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      captialLetters++
    }
  }

  return captialLetters === str.length || captialLetters === 0 || (captialLetters === 1 && str[0].toUpperCase() === str[0]) 
}

let test = 'enrique'
let res = isCorrectlyCaptitalized(test);

console.log(res)