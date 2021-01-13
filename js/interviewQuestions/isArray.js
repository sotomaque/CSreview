/*
    Write a function to check whether an input is an array or not
*/

function isArray(arr) {
  return toString.call(arr) === '[object Array]';
}

let myArray = new Array(4).fill(4);

console.log(isArray(myArray));
console.log(isArray([1, 2, 3]));
console.log(isArray('enrique'));
