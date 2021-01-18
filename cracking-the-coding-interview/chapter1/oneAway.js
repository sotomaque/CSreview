/*
there are three types of edits that can be performed on a string
insert a character, remove a character, or replace a character.

given two strings, write a function to check if they are
one edit away (or 0 edits away)
*/

/**
 * time-complexity:
 *   O(n)
 *
 * space-complexity:
 *   O(1) - no recursion or extra data structures
 *
 * @param {*} str1
 * @param {*} str2
 */
function oneAway(str1, str2) {
  if (str1.length === str2.length) {
    return oneEditReplace(str1, str2);
  } else if (str1.length + 1 === str2.length) {
    return oneEditInsert(str1, str2);
  } else if (str1.length - 1 === str2.length) {
    return oneEditInsert(str2, str1);
  }
  return false;
}

function oneEditReplace(str1, str2) {
  let diffFound = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (diffFound) {
        return false;
      }
      diffFound = true;
    }
  }
  return true;
}

function oneEditInsert(str1, str2) {
  let i = 0;
  let j = 0;
  while (j < str2.length && i < str1.length) {
    if (str1[i] !== str2[j]) {
      if (i !== j) {
        return false;
      }
      j++;
    } else {
      i++;
      j++;
    }
  }
  return true;
}

console.log(oneAway('pales', 'bae'));
