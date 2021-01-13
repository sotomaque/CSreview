/*
    given an array, return the most frequently occuring element of the array
    assume there are not two items with the same frequency occurances
*/

/**
 * time-complexity:
 *  - O(n)
 * space-complexity:
 *
 * @param {*} array
 * @returns {int} max -> item of array with highest frequency count
 */
function mostFrequent(array) {
  let max = 0;
  let frequencyMap = new Map();
  // iterate through each element of the array,
  array.forEach((element) => {
    // use map to either add it to the map or increment its value
    if (frequencyMap[element]) {
      frequencyMap[element] += 1;
    } else {
      frequencyMap[element] = 1;
    }

    if (frequencyMap[element] > max) {
      max = frequencyMap[element];
    }
  });

  return max;
}

let a = [1, 3, 1, 3, 2, 1, 5];
let res = mostFrequent(a);

console.log(`most frequent element in ${a} is ${res}`);
