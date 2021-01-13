/*
    Write a function that takes two strings, s1 and s2
    and returns the longest common subsequence of s1 and s2

        - longest sequence of characters that appear in both strings,
        possibly with other chars in between 

    'ABAZDC', 'BACBAD' => 'ABAD'
*/

/*
    Brute force approach: 
        - iterate through each subsequcence of the first string and check 
        whether or not it is also a subsequence of the second string

        - requires exponential time to run
        - number of subsequences in a string are 2^n
*/

/*  
    DP approach:
        - start by looking at the last char of each string,
             if they match, return 1, else return 0, incremement counters
    
    recursion:
        LCS('aab', 'axb') =>  1 + LCS('aab', 'axb')     however, LCS('aab', 'axb') = max (LCS('aab', 'axb'), LCS('aab', 'axb'))
               ^      ^                 ^      ^                       ^      ^                ^       ^           ^     ^
               i      j                 i      j                       i      j
               
        base case:
            if ( i < 0 || j < 0 ) => return 0
                one of our strings is now an empty string, no common substring with an empty string

        case where s1[i] == s2[j]:
            decrement both i, j return 1 + recursive calls with pointers decremented
        
        
        
    - so at every recursive call, we return the max of (the case where we skip a letter from s1, the case where we skip a letter from s2)


    DP table to cache subproblems:

    let n = a1.length; let m = a2.length
    DP = (n, m) = (4, 4)

        |'' | a | a | b |
    ----|---|---|---|---|
    ''  | * | * | * | * |            * <- base cases -> 0
    ----|---|---|---|---|
    a   | * | 1 | 1 | 1 |            cell x holds value for les(aa, a)
    ----|---|---|---|---|
    x   | * | 1 | 1 | 1 |            dependant on cell to the left, cell above, with each cell holding the max of its two dependanceies
    ----|---|---|---|---|
    b   | * | 1 | 1 | 2 |            ! <- return value
    ---------------------

                                match:
                                    - result 1 = remove a char from s1 (cell above)
                                    - results 2 = remove a char from s2 (cell to the left)
                                    - value = 1 + max(result 1, result 2)

                                no match: max(cell above, cell to the left)

*/

/**
 * time-complexity:
 *  - O(2^n) where n is the max(a.length, b.length)
 *
 * space-complexity:
 *  -
 *
 * @param {STRING} A - user input
 * @param {STRING} B - user input
 * @param {int} i - default value 0 - index of first string we are evaluating
 * @param {int} j - default value 0 - index of second string we are evaluating
 */
function LCS_recursive(A, B, i = 0, j = 0) {
  // base case
  if (i > A.length - 1 || j > B.length - 1) return 0;
  // match case
  else if (A[i] === B[i]) return 1 + LCS_recursive(A, B, i + 1, j + 1);
  // no match case
  else
    return Math.max(
      LCS_recursive(A, B, i + 1, j),
      LCS_recursive(A, B, i, j + 1)
    );
}

/**
 * time-complexity:
 *  - O(m x n) where m is the length of s1 and n is the length of s2
 *
 * space-complexity:
 *  - O(m x n)
 *
 * @param {STRING} A - user input
 * @param {STRING} B - user input
 * @param {int} i - default value 0 - index of first string we are evaluating
 * @param {int} j - default value 0 - index of second string we are evaluating
 */
function LCS_dp(A, B) {
  let DP = new Array(A.length + 1)
    .fill(0)
    .map(() => new Array(B.length + 1).fill(Number.MIN_SAFE_INTEGER));

  // set base case values to 0
  for (let row = 0; row < DP.length; row++) {
    for (let col = 0; col < DP[0].length; col++) {
      if (row === 0 || col === 0) DP[row][col] = 0;
    }
  }

  for (let i = 1; i < DP.length; i++) {
    for (let j = 1; j < DP[0].length; j++) {
      // match
      if (A[i - 1] === B[j - 1]) {
        // cell value is max of cell above, cell to the left + 1
        DP[i][j] = 1 + Math.max(DP[i - 1][j], DP[i][j - 1]);
      } else {
        // cell value is max of cell above
        DP[i][j] = Math.max(DP[i - 1][j], DP[i][j - 1]);
      }
    }
  }

  return DP[A.length][B.length];
}

let a = 'cab';
let b = 'cab';

let res = LCS_dp(a, b);

console.log(`longest commong subsequence of ${a}, ${b} is of length ${res}`);
