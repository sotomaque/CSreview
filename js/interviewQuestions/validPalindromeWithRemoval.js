/*
  This question is asked by Facebook. Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
  Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

  Ex: Given the following strings...

  "abcba", return true
  "foobof", return true (remove the first 'o', the second 'o', or 'b')
  "abccab", return false

  if length of something is odd -> it can only be a palindrome if 
    - every letter except for one occurs an even number of times
    - one letter occurs an odd number of times

  To validate whether or not a string is a palindrome we can iterate through the string with two pointers.
  One pointer, i, can walk through the string forwards starting at the first character and another pointer j,
  can walk through the string backwards starting at the last character. If the ith character and the jth character
  are not the same, the current string is not a palindrome; however, we must check if removing either the ith 
  character or the jth character would make it one. If removing neither character doesn’t make it a palindrome, we can return false.
*/

function isPalidrome(str, i, j) {
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

/**
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(1)
 *
 * @param {*} str
 */
function validPalindromeWithRemoval(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return isPalidrome(str, i + 1, j) || isPalidrome(str, i, j - 1);
    }

    i++;
    j--;
  }

  return true;
}

const test = 'abccab';
const res = validPalindromeWithRemoval(test);

console.log(res);
