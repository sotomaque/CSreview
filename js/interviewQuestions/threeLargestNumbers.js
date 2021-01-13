/**
 * approach:
 *  - go through all n elements, n times, following selection sort approach
 *  - return first 3 elements from sorted list
 *
 * time-complexity:
 *  - nested for-loop
 *  - O(n^2)
 *
 * space-complexity:
 *  - variables: min_index, i, j, firstToReturn, lastToReturn
 *  - O(1)
 *  - in place algorithm!
 *
 * stability:
 *  - NOT STABLE
 *
 * @param {ARRAY} array - some (unsorted) array,
 * @returns {ARRAY} three largest elements of the input array
 */
function findThreeLargestNumbersBruteForce(array) {
  for (let i = 0; i < array.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min_index]) {
        min_index = j;
      }
    }
    // swap
    [array[i], array[min_index]] = [array[min_index], array[i]];
  }
  let firstToReturn = array.length - 3;
  let lastToReturn = array.length;
  return array.slice(firstToReturn, lastToReturn);
}

/**
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(1)
 *
 * @param {*} array
 */
function findThreeLargestNumbers(array) {
  let one = Number.MIN_SAFE_INTEGER;
  let two = Number.MIN_SAFE_INTEGER;
  let three = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > one) {
      three = two;
      two = one;
      one = array[i];
    } else if (array[i] > two) {
      three = two;
      two = array[i];
    } else if (array[i] > three) {
      three = array[i];
    }
  }

  return [three, two, one];
}

function test() {
  const testArray = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
  const result = findThreeLargestNumbers(testArray);
  console.log(result);
}

test();
