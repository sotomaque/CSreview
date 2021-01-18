/*

*/
// Complete the countSwaps function below.
function countSwaps(a) {
  let swapsCount = 0;
  // Bubble sort
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        swap(a, j, j + 1);
        swapsCount += 1;
      }
    }
  }

  return { swapsCount, sortedArray: a };
}

function swap(list, i, j) {
  [list[i], list[j]] = [list[j], list[i]];
  return list;
}

const input = [3, 2, 1];
const { swapsCount, sortedArray } = countSwaps(input);

console.log(`the array is sorted in ${swapsCount} swaps.`);
console.log(`First element: ${sortedArray[0]}`);
console.log(`Last element: ${sortedArray[sortedArray.length - 1]}`);
