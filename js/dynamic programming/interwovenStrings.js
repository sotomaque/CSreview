/*
    Problem Statement:
        - given 3 strings, s, s1, and s2 and given the fact they are of equal lengths,
        - return true if s is an interwoven product of the first two strings

        - i.e. 
            s1 = 'enrique'
            s2 = 'sotomay'
            s = 'enrSoitoquemay'
            ---------------
            return true
            ---------------

        - approach:
            - let len(s1) = M, len(s2) = N
            - initalize the pointer that will traverse s1 (i) to 0
            - initalize the pointer that will traverse s2 (j) to 0
            - the pointer that will traverse s is simply i+j

            - base-case: // (CASE 0)
                if (i === M and j === N):
                    return true

            // finished traversing s1, now only traverse s2 // (CASE 1)
            - if (i === M):
                if (s2[j] === s[j+i]):
                    return RECURSIVECALL(i, j+1)
                else:
                    return false

            // if we finished traversing s2, now only traverse s1 // (CASE 2)
            - if (j === N):
                if (s1[i] === s[i + j]):
                    return RECURSIVECALL(i + 1, j)
                else:
                    return false

            // otherwise check both strings,  // (CASE 3)
            - else:
                s2[j] === s[i + j]) && RECURSIVECALL(i, j + 1)
                                or
                s1[i] === s[i + j]) && RECURSIVECALL(i + 1, j)

                (if a letter in s matches in both s1 and s2 at the current indecies, make two recursive calls, and OR them, if one returns true then true, etc.)

        - DP APPROACH:
            parameters:
                i: 0 -> M (inclusive)
                j: 0 -> N (inclusive)

            therefore 
                dp: [i][j]
                
                our recursion looks like:
                    -------------------
    RETURN VALUE  ->|*|               |
                    -------------------
                    |      |x|->      |             - for any given case, x, we are dependant on i + 1, j + 1
                    --------|---------- (i = M)       there
                    |       v         |
                    -------------------
                    |               |*| <- BASE CASE (where i === j)
                    -------------------
                          (j = N)
*/

/**
 * time-complexity:
 *  - O(M*N)
 * space-complexity:
 *  - O(M*N)
 *
 * @param {STRING} s - string which may or may not be interwoven product of s1 + s2
 * @param {STRING} s1
 * @param {STRING} s2
 */
function isInterwoven(str1, str2, potentialProduct) {
  let M = str1.length;
  let N = str2.length;

  // initalize a 2d array (with everything being false)
  const DP = new Array(M + 1).fill(0).map(() => new Array(N + 1).fill(false));

  // base case
  DP[M][N] = true;

  // special case for last row
  for (let j = N - 1; j >= 0; j--) {
    DP[M][j] = str2[j] === potentialProduct[M + j] && DP[M][j + 1];
  }

  for (let i = M - 1; i >= 0; i--) {
    // special case for last column
    DP[i][N] = str1[i] === potentialProduct[i + N] && DP[i + 1][N];
    // iterate through remaining cells of grid
    for (j = N - 1; j >= 0; j--) {
      DP[i][j] =
        (str2[j] === potentialProduct[i + j] && DP[i][j + 1]) ||
        (str1[i] === potentialProduct[i + j] && DP[i + 1][j]);
    }
  }
  return DP[0][0];
}

let s1 = 'enrique';
let s2 = 'sotomayor';
let s = 'enrsoitoquemayor';
let res = isInterwoven(s1, s2, s);

console.log(res);
