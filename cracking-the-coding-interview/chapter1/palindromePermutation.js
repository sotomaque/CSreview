/*
given a string, write a function to check if it is a permutation
of a palindrome
*/

function palindromePermutationBruteForce() {
  // generate all possible permutations of given input -> O(n!)
  // check if array of permutations contains palindrome -> O(n) for each permutation
  // BAD ALGORITHM
}

function palindromePermutation(str) {
  //
  const letters = str.split('');
  //
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
