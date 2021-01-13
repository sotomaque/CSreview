/*

    Problem Statement:
        - given two sorted arrays, merge them to produce one master array (also sorted)
        - the difference between this question and the standard merge two sorted arrays questions 
        is that we will not be allowed to use an auxilary array
        - instead the longer of the two arrays has n 0's appeneded to the end of it

    i.e.
        - a = [1, 3, 4, 5, 9]
        - b = [2, 3, 6, 10, 12, 0, 0, 0, 0, 0]

        - b = [1, 2, 3, 3, 4, 5, 6, 9, 10, 12]

    - maintain three pointers
        - i = a.length - 1
        - j = a.length - 1
        - k = b.length - 1

    while (i >= 0 && j >= 0) {
        //compare a[i] to b[j]:

        if (a[i] >= b[j]) {
            b[k] = a[i];
            i--;
            k--;
        }

        else if (a[i] < b[j]) {
            b[k] = b[j];
            j--;
            k--;
        }
    }

    // collect remainder

*/

/**
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(1)
 *
 * @param {sorted array} array1 - sorted array of size N
 * @param {sorted array} array2 - sorted array of size 2N
 * @returns {sorted array} array2 - sorted array of size 2N
 */
function sort(array1, array2) {
  let i = array1.length - 1;
  let j = array1.length - 1;
  let k = array2.length - 1;

  while (i >= 0 && j >= 0) {
    if (array1[i] >= array2[j]) {
      array2[k] = array1[i];
      i--;
      k--;
    } else if (array1[i] < array2[j]) {
      array2[k] = array2[j];
      j--;
      k--;
    }
  }

  // collect remainder
  while (i >= 0) {
    array2[k] = array1[i];
    i--;
    k--;
  }
  while (j >= 0) {
    array2[k] = array2[j];
    j--;
    k--;
  }

  return array2;
}

let array1 = [1, 3, 4, 5, 9];
let array2 = [2, 3, 6, 10, 12, 0, 0, 0, 0, 0];

let result = sort(array1, array2);
console.log(result);
