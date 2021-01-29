/**
 * Decrease and Conquer:
 *  - given the solution for a problem of size = (n - 1)
 *  - solve the problem of size = (n) using the solution
 * from size = (n - 1)
 *  - Recursive (if top-down) and iterative (if bottom-up)
 */

/**
 * Algorithm:
 *
 * like inserting a card into a deck of cards which are already sorted
 *
 * - start from either begining of end (assume end)
 * - if card we are trying to insert is less than the card
 * we are currently looking at (last card on first iteration)
 * then we know the card we want to insert must go behind the
 * card we are currently looking at, and therefore we now consider
 * the second to last card the one we are currently looking at
 *
 */

/**
 * time-complexity:
 *  - best case: O(n)
 *  - worst case: O(n^2)
 *  - average case: O(n^2)
 *
 * space-complexity:
 *  - variables -> i, j, last
 *  - recursive heap calls ~ n - 1 times
 *  - O(n-1) + 3*O(1) = O(n)
 *
 *  - IN PLACE ALGORITHM
 *
 * stability:
 *  - STABLE
 *
 * @param {[int]} someArray - array we want sorted
 * @param {int} n - represents the length of the array
 */
function insertionSortRecursive(someArray, n) {
  // base case
  if (n <= 1) return;

  // sort first n-1 elements
  insertionSortRecursive(someArray, n - 1);

  // insert last element into its correct position in sorted array
  let last = someArray[n - 1];
  let j = n - 2;

  while (j >= 0 && someArray[j] > last) {
    // swap
    someArray[j + 1] = someArray[j];
    j -= 1;
  }
  someArray[j + 1] = last;
  return someArray;
}

/**
 * time-complexity:
 *  - best case: O(n)
 *  - worst case: O(n^2)
 *  - average case: O(n^2)
 *
 * space-complexity:
 *  - variables:
 *      (i, currentValue, position)
 *  - O(1)
 *
 *  - IN PLACE ALGORITHM
 *
 * @param {[int]} someArray - array we want sorted
 * @param {int} n - represents the length of the array
 */
function insertionSortIterative(someArray, n) {
  // base case
  if (n <= 1) return;

  // bottom up approach
  for (let i = 1; i < n; i++) {
    let currentValue = someArray[i];
    let position = i;

    while (position > 0 && someArray[position - 1] > currentValue) {
      // put larger value on the 'right'
      someArray[position] = someArray[position - 1];
      position -= 1;
    }
    // put smaller value on the 'left'
    someArray[position] = currentValue;
  }

  return someArray;
}

function test() {
  const testArray = [3, 5, 1, 6, 1, 9];
  const n = testArray.length;
  const result = insertionSortRecursive(testArray, n);
  console.log(result);
}

test();
