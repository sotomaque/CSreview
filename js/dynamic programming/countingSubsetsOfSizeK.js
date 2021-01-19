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

function nChooseKDP(n, k) {
  if (k === 0 || k === n) return 1;

  const table = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));

  // set base case values into table
  for (let row = 0; row < n; row++) {
    table[row][0] = 1;
  }

  for (let col = 0; col < k; col++) {
    table[col][col] = 1;
  }

  // use previous values to determine current value
  for (let row = 0; row < n; row++) {
    for (let col = 1; col < Math.min(row, k); col++) {
      table[row][col] = table[row - 1][col] + table[row - 1][col - 1];
    }
  }
  console.log(table);
  //
  return table[n][k];
}

console.log(nChooseKDP(4, 2));
