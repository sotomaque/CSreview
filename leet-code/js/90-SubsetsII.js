/*
given a collection of integers that might contain duplicates, nums,
return all possible susbets (power set)

note that the solution set msut not contain duplicate subsets.

i.e.
  input = [1, 2, 2]
  output = [
    [2],
    [1],
    [1, 2, 2],
    [1, 2],
    []
  ]

  approach, with a sorted array, all duplicates will be grouped

  if we see a duplicate, we can decide how many copies of that duplciate to
  include in the slate, and then recursee
*/

// better than using a set for results because we are not computing duplicates and then filtering them

/**
 * time-complexity:
 *  - O(2^n * n) (number of nodes) * sorting
 *
 * space-complexity:
 *  - O(2^n * n)
 *
 * @param {*} nums
 */
function subsetII(nums) {
  const result = [];

  nums.sort();
  subsetHelper(nums, 0, [], result);
  return result;
}

function subsetHelper(nums, currentIndex, slate, globalSlate) {
  if (currentIndex === nums.length) {
    globalSlate.push(slate);
    return;
  }

  // recursive case
  const count = getCount(nums, currentIndex);

  // exclude (skip 'count' items instead of 1 item)
  subsetHelper(nums, currentIndex + count, slate, globalSlate);

  // include (how many copies should we include?)
  // iterate from 1 -> number of copies of that char we have in input array
  for (let i = 1; i <= count; i++) {
    subsetHelper(
      nums,
      currentIndex + count,
      [...slate, nums[currentIndex]],
      globalSlate
    );
  }
}

// return number of duplicates of array[index] are found in array
function getCount(array, index) {
  const myMap = new Map();
  for (let i = 0; i < array.length; i++) {
    if (myMap.has(array[i])) {
      myMap.set(array[i], myMap.get(array[i]) + 1);
    } else {
      myMap.set(array[i], 1);
    }
  }
  return myMap.get(array[index]);
}

const array = [1, 2, 2, 3];
const res = subsetII(array);

console.log(res);

// console.log(getCount(array, 0));
