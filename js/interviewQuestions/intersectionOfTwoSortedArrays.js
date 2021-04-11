// O(n) time-complexity
// O(n) space-complexity
const intersectionOfTwoSortedArrays = (a1, a2) => {
  const aux = new Set();
  let i = 0;
  let j = 0;

  // take advantage of fact arrays are sorted
  // so if a1[i] < a2[j] we know incrementing j will not help us
  // so we will want to increment i
  // the opposite is also true
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      i += 1;
    } else if (a1[i] > a2[j]) {
      j += 1;
    } else {
      aux.add(a1[i]);
      i += 1;
      j += 1;
    }
  }

  return aux;
};

let a = [1, 2, 3, 3, 3, 4, 5, 5, 6];
let b = [0, 1, 1, 1, 2, 3, 3, 7];
let c = intersectionOfTwoSortedArrays(a, b);
console.log(c);
