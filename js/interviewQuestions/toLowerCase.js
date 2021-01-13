/*
    given a string, convert it to its lowercase equivalence without using the
    in built function
*/

// linear scan throught string char by char

/**
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(1)
 * @param {*} string
 */
function toLowercase(string) {
  let results = '';
  // adding 32 to ASCII value -> lowercase
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      let lowercaseAsciiValue = string[i].charCodeAt(0) + 32;
      let lowercaseLetter = String.fromCharCode(lowercaseAsciiValue);
      results += lowercaseLetter;
    } else {
      results += string[i];
    }
  }
  return results;
}

let test = 'eNrIQuE';
let output = toLowercase(test);

console.log(output);
