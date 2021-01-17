/*
  Given a string, determine if a permutation of the string could form a palindrome (same forwards or backwards).

  Example 1:

  Input: "code"
  permutations = [
  'cdeo', 'cdoe', 'cedo',
  'ceod', 'code', 'coed',
  'dceo', 'dcoe', 'deco',
  'deoc', 'doce', 'doec',
  'ecdo', 'ecod', 'edco',
  'edoc', 'eocd', 'eodc',
  'ocde', 'oced', 'odce',
  'odec', 'oecd', 'oedc'
] -> no palindromes in here
  Output: false
  Example 2:

  Input: "aab"
  Output: true
  Example 3:

  Input: "carerac"
  Output: true
*/

function palindromePermutation(str) {
  //  get letters
  const letters = str.split('');
  // check if letters have properties for a palindrome
  // count frequency of letters
  const frequencyMap = new Map();
  for (let i = 0; i < letters.length; i++) {
    if (frequencyMap.has(letters[i])) {
      frequencyMap.set(letters[i], frequencyMap.get(letters[i]) + 1);
    } else {
      frequencyMap.set(letters[i], 1);
    }
  }
  const lettersSet = Array.from(frequencyMap.keys());
  // if odd
  if (letters.length % 2 !== 0) {
    let oddResults = 0;
    for (let i = 0; i < lettersSet.length; i++) {
      if (frequencyMap.get(lettersSet[i]) % 2 !== 0) {
        oddResults += 1;
      }
    }
    // max 1 letter with odd number of occurances
    if (oddResults > 1) {
      return false;
    }
  } else {
    // no letters with odd number of occurances;
    for (let i = 0; i < lettersSet.length; i++) {
      if (frequencyMap.get(lettersSet[i]) % 2 !== 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(palindromePermutation('aabbhijkkjih'));
