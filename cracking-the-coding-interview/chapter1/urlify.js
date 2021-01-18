/*
write a method that replaces all spaces in a string with '%20'
you may assume that the string has sufficient space at the end to hold additional chars
*/

function URLify(str) {
  return str.split(' ').join('%20');
}

console.log(URLify('the study plan'));
