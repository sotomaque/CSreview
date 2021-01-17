/*

You are given an array of distinct integers arr and an array of integer arrays pieces,
where the integers in pieces are distinct. Your goal is to form arr by concatenating
the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

Return true if it is possible to form the array arr from pieces.
Otherwise, return false.
*/

/*
Example 1:

Input: arr = [85], pieces = [[85]]
Output: true
Example 2:

Input: arr = [15,88], pieces = [[88],[15]]
Output: true
Explanation: Concatenate [15] then [88]
Example 3:

Input: arr = [49,18,16], pieces = [[16,18,49]]
Output: false
Explanation: Even though the numbers match, we cannot reorder pieces[0].
*/

function canFormArray(arr, pieces) {
  // iterate through array and put pieces into frequency hashmap
  let n = arr.length;
  let i = 0;

  while (i < n) {
    let found = -1;
    for (let j = 0; j < pieces.length; j++) {
      if (pieces[j][0] === arr[i]) {
        found = j;
        break;
      }
    }
    if (found === -1) return false;
    // check target piece
    let targetPiece = pieces[found];

    for (let x = 0; x < targetPiece.length; x++) {
      let current = targetPiece[x];
      if (current !== arr[i]) {
        return false;
      }
      i++;
    }
  }
  return true;
}

const arr = [85],
  pieces = [[85]];
console.log(canFormArray(arr, pieces));
