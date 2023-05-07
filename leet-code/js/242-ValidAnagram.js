/**
 * given a string,
 * return true if the string is an anagram
 * false otherwise
 */

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  // map
  const myMap = new Map();
  str1.split('').forEach((letter) => {
    if (myMap.has(letter)) {
      myMap.set(letter, myMap.get(letter) + 1);
    } else {
      myMap.set(letter, 1);
    }
  });
  // cannot use forEach when iterating through
  // second string since i cannot exit the forEach loop
  // i can only exit the iteration
  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    if (myMap.has(letter) && myMap.get(letter) > 0) {
      myMap.set(letter, myMap.get(letter) - 1);
    } else return false;
  }
  return true;
}

console.log(validAnagram('a', 'b'));
