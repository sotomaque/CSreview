/*

    pascals triangle - a triangular array of numbers in which those at the ends of the rows 
    are 1 and each of the others is the sum of the nearest two numbers in the row above.

    given this definition and an input, height, create a pascal traingle of the required height
    and return it

*/

/**
 * time-complexity:
 *  - O(height^2)
 *
 * space-complexity:
 *  - O(n^2), since we are storing prev row, prevRow in the last iteration is of length height - 1 which ~ height
 *
 * @param {*} height
 */
function pascalsTriangle(height) {
  let triangle = [];
  if (height === 0) return triangle;

  let first_row = [1];
  triangle.push(first_row);

  for (let i = 1; i < height; i++) {
    let prevRow = triangle[i - 1];
    // every row starts with a 1
    let currentRow = [1];
    for (let j = 1; j < i; j++) {
      currentRow.push(prevRow[j - 1] + prevRow[j]);
    }
    // every row ends with a 1
    currentRow.push(1);

    triangle.push(currentRow);
  }

  return triangle;
}

console.log(pascalsTriangle(5));
