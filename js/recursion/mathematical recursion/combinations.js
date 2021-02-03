/**
 * time-complexity:
 *  - O(2^n)
 *
 * space-complexity:
 *
 *
 * @param {*} n
 * @param {*} k
 */
function nChooseK(n, k) {
  if (k === 0 || k === n) return 1;

  return nChooseK(n - 1, k) + nChooseK(n - 1, k - 1);
}

console.log(nChooseK(8, 2));
s = 'aaa';

console.log(s.toUpperCase());
console.log(s);
