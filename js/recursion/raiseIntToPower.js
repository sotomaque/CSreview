/*
    Problem Statement:
        - given an integer, n, and a power, k, return
        n^k

*/

/**
 * time-complexity:
 *  - O(k) where k = |power|
 *
 * space-complexity:
 *  - O(k)
 *
 * @param {*} number
 * @param {*} power
 */
function raiseIntToPowerRecursive(number, power) {
  if (power == 0) return 1;
  return number * raiseIntToPowerRecursive(number, power - 1);
}

/**
 * time-complexity:
 *  - O(k) where k = |power|
 *
 * space-complexity:
 *  - O(1)
 *
 * @param {*} number
 * @param {*} power
 */
function raiseIntToPowerIterative(number, power) {
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result = result * number;
  }
  return result;
}

let n = 2;
let k = 4;

let result = raiseIntToPowerIterative(n, k);
console.log(`${n}^${k} = ${result}`);
