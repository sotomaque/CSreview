/**
 * function takes an integer, n,
 * and returns all integers such that
 * each integer is of length <= n
 *
 * @param {*} n
 */
function decimalString(n) {
  return helper('', n);
}

function helper(prefix, n) {
  if (n === 0) {
    return console.log(prefix);
  } else {
    // enumerate all values [0-9]
    // recursively
    for (let i = 0; i < 10; i++) {
      helper(`${prefix}${i}`, n - 1);
    }
  }
}

decimalString(2);
