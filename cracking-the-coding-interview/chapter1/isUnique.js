/*
implement an algorithm to determine if a string has all unique character.
what if you cannot use an additional data structure?
*/

/**
 * time-complexity:
 *   O(n)
 * space-complexity:
 *   O(n) (dictionary)
 *
 * @param {*} str
 */
function isUniqueDictionary(str) {
  // given ASCI only has 128 unique values
  if (str.length > 128) return false;

  const myMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (myMap.has(str[i])) {
      return false;
    } else {
      myMap.set(str[i], 1);
    }
  }
  return true;
}

/**
 * time-complexity:
 *   O(n)
 * space-complexity:
 *   O(n) (set)
 *
 * @param {*} str
 */
function isUniqueSet(str) {
  // given ASCI only has 128 unique values
  if (str.length > 128) return false;

  const mySet = new Set();
  for (let i = 0; i < str.length; i++) {
    mySet.add(str[i]);
  }

  return mySet.size === str.length;
}

/**
 * time-complexity:
 *   O(n^2)
 * space-complexity:
 *   O(1)
 *
 * @param {*} str
 */
function isUniqueBruteForce(str) {
  // given ASCI only has 128 unique values
  if (str.length > 128) return false;

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; i < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}

console.log(isUniqueBruteForce('enrique'));
