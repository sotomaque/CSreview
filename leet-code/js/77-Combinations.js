/*
  given two integers, n and k,
  
  return all possible combhinations of k out of 1, ..., n. of length = k

  appraoch:
    - subset problem
      - include exclude
    - backtracking problem
      - only care about results of length === k
      - if we find anything else, we backtrack
*/

/**
 * time-complexity:
 *  - O(2^n)
 *
 * space-complexity:
 *    max depth of recursion
 *  + auxilary data structures
 * ---------------------------
 *  - O(log n) + O(2^n)
 *
 * @param {*} n
 * @param {*} currentIndex
 * @param {*} k
 * @param {*} slate
 * @param {*} globalResults
 */
function combinationsHelper(n, currentIndex, k, slate, globalResults) {
  // backtracking case
  if (slate.length === k) {
    globalResults.push([...slate]);
    return;
  }

  // base case
  if (currentIndex === n + 1) {
    return;
  }

  // recursion case
  // exclude
  combinationsHelper(n, currentIndex + 1, k, [...slate], globalResults);
  // include
  combinationsHelper(
    n,
    currentIndex + 1,
    k,
    [...slate, currentIndex],
    globalResults
  );
}

function combinations(n, k) {
  const results = [];
  combinationsHelper(n, 1, k, [], results);

  return results;
}

const n = 4;
const k = 2;
const res = combinations(4, 2);

console.log(res);
