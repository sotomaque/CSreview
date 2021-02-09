/*
    i.e.
        - a = [1, 3, 4, 5, 9]
        - b = [2, 3, 6, 10, 12, 0, 0, 0, 0, 0]

    output = [1, 2, 3,  3,  4, 5, 6, 9, 10, 12]
*/

/**
 * time-complexity:
 *   - O(n)
 *
 * space-complexity:
 *   - O(1)
 *
 * @param {sorted array} a - sorted array of size N
 * @param {sorted array} b - sorted array of size 2N
 */
function mergeTwoSortedArrays(a, b) {
  let i = a.length - 1;
  let j = a.length - 1;

  // iterator for the auxilary array
  // except now our 'auxilary array' is the end of input string b
  let k = b.length - 1;

  while (i >= 0 && j >= 0) {
    if (a[i] >= b[j]) {
      b[k] = a[i];
      i--;
      k--;
    } else {
      //  a[i] < b[j]
      b[k] = b[j];
      j--;
      k--;
    }
  }

  // collect remainder
  while (i >= 0) {
    b[k] = a[i];
    i--;
    k--;
  }
  while (j >= 0) {
    b[k] = b[j];
    j--;
    k--;
  }

  return b;
}

const a = [1, 3, 4, 5, 9];
const b = [2, 3, 6, 10, 12, 0, 0, 0, 0, 0];

console.log(mergeTwoSortedArrays(a, b));
