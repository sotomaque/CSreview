/*
    function takes two arrays, return the common elements in both arrays

    assume both arrays are sorted

    i.e. 
        A = [1, 3, 4, 6, 7, 9]
        B = [1, 2, 4, 5, 9, 20]

        result = [1, 4, 9]

    - brute force approach,     
        two for loops,
            for each element in a, 
                check if its is also in b by iterating through all of b
                    - if it is add it to resulting array
            return resulting array
        - draw back: O(n*m) time-complexity ~ O(n^2) when both arrays are of 
        comparable lengths

    - better appraoch:
        - use two pointers, 
            - both initalized to 0
            - if they point to items of same value 
                - add to resulting array
                - increment both pointers


*/

/**
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(k) where k is the length of the array containing the common elements
 *
 * @param {*} array1
 * @param {*} array2
 */
function commonElements(array1, array2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < array1.length && j < array2.length) {
    if (array1[i] === array2[j]) {
      result.push(array1[i]);
      i += 1;
      j += 1;
    } else if (array1[i] > array2[j]) {
      j += 1;
    } else {
      i += 1;
    }
  }

  return result;
}

let a = [1, 3, 4, 6, 7, 9];
let b = [1, 2, 4, 5, 9, 10];
let c = commonElements(a, b);

console.log(c);
