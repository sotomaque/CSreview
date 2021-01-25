/*
  Given two binary strings (strings made of 1's and 0's)
  return their sum (also as a binary string)

  Note: neither binary string will contain leading 0's unless
  the string itself is 0.
*/

/**
 * time-complexity:
 *  - O(n)
 * 
 * space-complexity:
 *  - O(1)
 * 
 * @param {*} a 
 * @param {*} b 
 */
function addBinary(a, b) {
  let carry = 0, result = "";

  let i = a.length - 1, j = b.length - 1;

  // simulate addition process
  // start at back of the string and determine if the addition 
  // of these chars leads to a sum that requires carrying a 1 to the
  // next most signinficant position
  while(i >= 0 || j >= 0) {
    let num1 = i < 0 ? 0 : a[i] | 0;
    let num2 = j < 0 ? 0 : b[j] | 0;
    carry = carry + num1 + num2;
    result = carry % 2 + result; //concat string in proper order
    carry = carry / 2 | 0;
    i--;
    j--;
  }

  // if we are still carrying at the end of the loop,
  // we want to append a '1' before our result
  return carry ? carry + result : result;
}

let a = '100'
let b = '1'

const res = addBinary(a,  b)
console.log(res)