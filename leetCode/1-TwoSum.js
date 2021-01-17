/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.
*/

/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.
*/

function twoSum(array, target) {
  const myMap = new Map();

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (myMap.has(complement)) {
      const res = [myMap.get(complement), i];
      return res;
    } else {
      myMap.set(array[i], i);
    }
  }

  return -1;
}

console.log(twoSum([3, 3], 7));
