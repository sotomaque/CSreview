/**
 * time-complexity:
 *  - O(2^n)
 *
 * space-complexity:
 *  - O(2^n)
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

console.log(binaryString(3));
