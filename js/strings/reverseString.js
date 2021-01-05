/**
 * approach 1:
 *
 *  Use Decrementing Counter
 *
 * i.e.
 * - short circuit check
 * - start with empty string (i.e. temp)
 * - iterate through length of input string (from last index to first)
 *  - grab letter from input string at that index
 *  - append that letter to our temp variable
 * - return temp
 *
 * i.e. 'cow' -> 'woc'
 *
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(n)
 *
 *
 * @param {input string} string
 */
function reverseStringApproach1(input_string) {
  if (!typeof input_string === 'string') return;

  let output_string = '';
  for (let i = input_string.length - 1; i >= 0; i--) {
    output_string = output_string + input_string[i];
  }
  return output_string;
}

/**
 * approach 2:
 *
 *  Use Built-in Functions
 *
 * i.e.
 * - split() -> splits a String obj into an array of strings
 * - reverse() -> reverses an array in place
 * - join -> joins all elements of an array into a string
 *
 * - chain the three streams and return the result
 *
 * i.e. 'cow' -> 'woc'
 *
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(1)
 *
 *
 * @param {string} str
 */
function reverseStringApproach2(str) {
  return str.split('').reverse().join('');
}

/**
 * approach 3:
 *
 *  Use Recursion
 *
 * - substr() -> substring beginging at provided index
 * - charAt() -> char at provided index
 *
 * - 'hello'.substr(1) -> 'ello'
 * - 'hello'.charAt(0) -> 'h'
 *
 * i.e. 'hello' -> 'olleh'
 *
 * i.e.
 * - bound check
 * - recurse
 *    - return methodName(str.substr(1)) + str.charAt(0);
 *
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(n)
 *
 * - depth of recursion = length of string
 * -> bad solution (slow for large strings / big stack trace)
 *
 * @param {string} str
 */
function reverseStringApproach3(str) {
  if (str === '') return '';
  else {
    return reverseStringApproach3(str.substr(1)) + str.charAt(0);
  }
}

/**
 * approach 4:
 *
 *  Use Ternary Operator
 *
 * i.e.
 * - bound check
 * - recurse
 *    - return methodName(str.substr(1)) + str.charAt(0);
 *
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(n)
 *
 * @param {string} str
 */
function reverseStringApproach4(str) {
  return str === ''
    ? ''
    : reverseStringApproach3(str.substr(1)) + str.charAt(0);
}

const inputString = 'hello';
const res1 = reverseStringApproach1(inputString);
const res2 = reverseStringApproach2(inputString);
const res3 = reverseStringApproach3(inputString);
const res4 = reverseStringApproach4(inputString);

console.log(`inputString: ${inputString}`);
console.log(`res1: ${res1}`);
console.log(`res2: ${res2}`);
console.log(`res3: ${res3}`);
console.log(`res4: ${res4}`);
