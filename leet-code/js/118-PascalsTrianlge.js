/*


*/

function pascalsTriangle(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res[i] = [];
    res[i][0] = 1;
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
    res[i][i] = 1;
  }
  return res;
}

console.log(pascalsTriangle(5));
