/*
    - given two arrays, return true if one array is a rotation of the other
    - a rotation of an array is defined as an array with the same values, 
        where there may be a shift of the array

        i.e. 
            A = [1, 2, 3, 4, 5, 6, 7]
            B = [4, 5, 6, 7, 1, 2, 3]
            A and B are rotations

    - approach:
        - two pointers, i, j (i inspects A, j inspects B)
            - both start at 0
        - if (A[i] === B[j]) {
            if (A[(i + 1) * A.length] !== B[(j + 1) % B.length]) return false
        }

    - ASSUMPTION: 
        both arrays are of equal lenghts, with no duplicates
*/

/**
 * time-complexity:
 *  - O(n) where n is the length of the longest array
 *
 * space-complexity:
 *  - O(1)
 *
 * @param {*} array1
 * @param {*} array2
 */
function isRotation(array1, array2) {
  let i = 0;
  let j = 0;

  while (j < array2.length) {
    if (array1[i % array1.length] === array2[j % array2.length]) {
      if (array1[(i + 1) % array1.length] !== array2[(j + 1) % array2.length])
        return false;
      else {
        i += 1;
        j += 1;
      }
    } else {
      i += 1;
    }
  }
  return true;
}

let A = [1, 2, 3, 4, 5, 6, 7];
let B = [4, 5, 6, 7, 1, 2, 3];

console.log(isRotation(A, B));
