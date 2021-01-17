/*
given two arrays
return a new array that contains elements found in both input arrays
*/

function intersection(arr1, arr2) {
  let i = 0;
  let j = 0;
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      res.push(arr1[i]);
    }
  }
  return res;
}

console.log(intersection([1, 12, 14, 55, 3, 3], [1, 3, 3]));
