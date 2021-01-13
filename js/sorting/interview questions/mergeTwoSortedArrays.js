/*

    Problem Statement:
        - given two sorted arrays, of length m and l, merge them 
        to produce one sorted array of length m + l

    i.e.
        - a = [1, 3, 4, 5, 9]
        - b = [2, 3, 6]

        - c = [1, 2, 3, 3, 4, 5, 6, 9]

    - approach, have two pointers, both starting at the begining of each array
    - use the pointers to compare the values they sit on, 
        if a[i] < b[j]:
            result.append(a[i])
            i++
        else:
            result.append(b[j])
            j++

*/

/**
 * time-complexity:
 *  - O(m + l)
 *
 * space-complexity:
 *  - auxilary space for returned array -> NOT IN PLACE -> O(m + l)
 *  - auxilary variables, i, j
 *
 * @param {ARRAY} data1 - sorted array
 * @param {ARRAY} data2 - sorted array
 *
 * @returns {ARRAY} mergedArray - sorted array
 */
function mergeTwoSortedArrays(data1, data2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < data1.length && j < data2.length) {
    if (data1[i] < data2[j]) {
      mergedArray.push(data1[i]);
      i++;
    } else {
      mergedArray.push(data2[j]);
      j++;
    }
  }

  // collect remainder
  while (i < data1.length) {
    mergedArray.push(data1[i]);
    i++;
  }
  while (j < data2.length) {
    mergedArray.push(data2[j]);
    j++;
  }

  return mergedArray;
}

let a = [1, 3, 4, 5, 9, 9, 10];
let b = [2, 3, 6];

let c = mergeTwoSortedArrays(a, b);

console.log(c);
