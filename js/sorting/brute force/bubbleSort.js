/**
 * Algorithm:
 *
 * - scan array from right to left
 * - whenever we see the smaller element appear on the right and the larger element
 * appear on the left, swap
 *
 */

/**
 * time-complexity:
 *  - nested for-loop:
 *      O(n^2)
 *
 * space-complexity:
 *  - variables: i, j
 *      O(1)
 * - IN PLACE ALGORITHM
 *
 * stability:
 *  - STABLE
 *
 * @param {array} someArray
 */
function bubbleSort(someArray) {
  for (let i = 0; i < someArray.length; i++) {
    for (let j = someArray.length - 1; j >= i; j--) {
      if (someArray[j - 1] > someArray[j]) {
        // swap
        [someArray[j - 1], someArray[j]] = [someArray[j], someArray[j - 1]];
      }
    }
  }

  return someArray;
}

function test() {
  const testArray = [64, 25, 12, 22, 11];
  const result = bubbleSort(testArray);
  console.log(result);
}

test();
