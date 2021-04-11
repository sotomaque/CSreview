// given an array return the largest unique number
// if there is no largest unique number, return -1

// hashmap approach
const largestUniqueNumber = (array) => {
  // count occurances for each entry on A
  const haveSeen = new Map();
  for (const num of array) {
    if (haveSeen.has(num)) {
      // incremement count
      haveSeen.set(num, haveSeen.get(num) + 1);
    } else {
      // set count to 1
      haveSeen.set(num, 1);
    }
  }
  // find largest value with num occurrances === 1
  let largest = -1;

  haveSeen.forEach((count, num) => {
    if (num > largest && count === 1) {
      largest = num;
    }
  });

  return largest;
};

const res = largestUniqueNumber([9, 8, 7, 7, 9, 1, 4]);

console.log(res);
