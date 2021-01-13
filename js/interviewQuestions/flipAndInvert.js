/*
    given a binary matrix,
    we want to flip the image and tehn invert it
        invert: 
            - if its a 0, change to a 1
            - if its a 1 change to a 0

    i.e. 
        input_array = [[1, 1, 0],
                       [1, 0, 1],
                       [ 0, 0, 1]]

*/

/**
 * time-complexity:
 *  - O(n) -> one single pass
 *
 * space-complexity:
 *  - O(1)
 *
 * @param {*} array
 */
function flipAndInvert1D(array) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    if (array[low] === array[high]) {
      // negate values
      if (array[low] === 0) {
        array[low] = 1;
        array[high] = 1;
      } else {
        array[low] = 0;
        array[high] = 0;
      }
    }
    low += 1;
    high -= 1;
  }

  return array;
}

/**
 * time-complexity:
 *  - O(n*m) -> regular matrix traversal
 *
 * space-complexity:
 *  - O(1)
 *
 * @param {*} array
 */
function flipAndInvert2D(array) {
  for (let i = 0; i < array[0].length; i++) {
    let low = 0;
    let high = array[i].length - 1;

    while (low <= high) {
      // only negate values if arr[low] === arr[high]
      if (array[i][low] === array[i][high]) {
        // negate values
        if (array[i][low] === 0) {
          array[i][low] = 1;
          array[i][high] = 1;
        } else {
          array[i][low] = 0;
          array[i][high] = 0;
        }
      }
      low += 1;
      high -= 1;
    }
  }

  return array;
}

let A = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 0, 1],
];
let b = flipAndInvert2D(A);
console.log(b);
