/*

    Problem Statement:
        - given a set of size n, how many subsets are there?
        
    i.e.
        set = {}
        output = [ {} ] = 1 different subset

    i.e. 2
        set = {1}
        output = [ {}, {1} ] = 2 different subsets

    i.e. 3
        set = {1, 2}
        output = [ {}, {1}, {2}, {12} ] = 4 different subsets
    
    key insight: 
        - for every extra element in the orinal set, the total number of subsets 
        double!

    therefore, for a general n, the number of subsets = 2^n

*/

/**
 * time-complexity:
 *  - each iteration reduces complexity from n -> n-1 until base case is met
 *  - there are n iterations
 *  - so the time-complexity is O(n)
 *
 * space-complexity:
 *  - O(n)
 *
 * @param {number} n
 * @returns {number} of subsets for a set of size n
 */
function subsets(n) {
  if (n === 0) return 1;
  return 2 * subsets(n - 1);
}

/**
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(1)
 *
 * @param {number} n
 * @returns {number} of subsets for a set of size n
 */
function subsetsIteratve(n) {
  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= 2;
  }
  return res;
}

let n = 5;
let results = subsets(n);
console.log(`there are ${results} subsets of a set of size ${n}`);
