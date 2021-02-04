/*
  Find the largest and smallest number in an
  unsorted array of integers.

  Return - Object - containing value of min
  and max.
*/

function minAndMax(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  for (const c of arr) {
    if (c > max) {
      max = c;
    } else if (c < min) {
      min = c;
    }
  }

  return {
    min,
    max,
  };
}

a = [1, 2, 3, 4, 5, 6, 7, -1, 12];
const { min, max } = minAndMax(a);

console.log(`min: ${min}`);
console.log(`max: ${max}`);
