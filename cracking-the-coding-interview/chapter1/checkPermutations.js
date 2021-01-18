/*
given two strings, write a method to decide if one is
a permutatino of another
*/

/**
 * time-complexity:
 *   O(2n) ~ O(n)
 *
 * space-complexity:
 *  O(n)
 *
 * @param {*} str1
 * @param {*} str2
 * @returns {boolean}
 */
function isPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;

  const myMap = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (myMap.has(str1[i])) {
      myMap.set(str1[i], myMap.get(str1[i]) + 1);
    } else {
      myMap.set(str1[i], 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (myMap.has(str2[i])) {
      if (myMap.get(str2[i]) >= 1) {
        myMap.set(str2[i], myMap.get(str2[i]) - 1);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

console.log(isPermutation('enrique', 'rneqiue'));
