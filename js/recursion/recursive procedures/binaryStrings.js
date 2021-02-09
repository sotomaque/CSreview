/**
 * time-complexity:
 *  - O(2^n * n) ~ O(2^n)
 *
 * space-complexity:
 *  - O(2^n) (This is a BFS traversal, in order to generate all
 * binary strings of length 3 we need all binary strings of length 2)
 *
 * @param {*} n
 */
function binaryString(n) {
  if (n === 1) {
    const res = ['0', '1'];
    return res;
  }

  const prev = binaryString(n - 1);
  const result = [];

  prev.forEach((str) => {
    const withZero = `${str}0`;
    const withOne = `${str}1`;
    result.push(withZero, withOne);
  });

  return result;
}

// still bad for space complexity
// as we need to store all 2^n strings
/**
 * time-complexity:
 *  - O(2^n * n) ~ O(2^n)
 *
 * space-complexity:
 *  - O(2^n) (This is a BFS traversal, in order to generate all
 * binary strings of length 3 we need all binary strings of length 2)
 *
 * @param {*} n
 */
function binaryStringIterative(n) {
  let result = ['0', '1'];
  for (let i = 1; i < n; i++) {
    const newRes = [];
    result.forEach((str) => {
      newRes.push(`${str}0`);
      newRes.push(`${str}1`);
    });
    result = newRes;
  }
  return result;
}

// if we dont store the strings and instead just print them
// we can achieve this by passing the prefix as a param and
// appending a 0 in some function calls and a 1 in other calls
// left subordinate: gets prefix i got + 0
// right subordinate: gets prefix i got + 1

/**
 * time-complexity:
 *   - O(2^n * n) ~ O(2^n)
 *
 * space-complexity:
 *   - since we are doing a DFS traversal
 * the max amount of activation records that
 * can accumulate on the call stack O(n)
 *   - way better than O(2^n) space complexity of previous algorithms
 * @param {*} n
 * @param {*} prefix
 */
function binaryStringIterativeAlt(n, prefix = '') {
  if (n === 0) {
    console.log(prefix);
  } else {
    binaryStringIterativeAlt(n - 1, `${prefix}0`);
    binaryStringIterativeAlt(n - 1, `${prefix}1`);
  }
}

console.log(binaryStringIterative(3));
