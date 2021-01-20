/*
given a string, return whether or not it forms a palindrome ignoring
case and non-alphabetical characters.
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
function isValidPalindrome(str) {
  str = str.replace(/\W/g, '')
  let last = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() !== str[last].toUpperCase()) {
      return false;
    } else {
      last--;
    }
  }
  return true;
}

console.log(isValidPalindrome('a Man, a plan, a canal: Panama'))