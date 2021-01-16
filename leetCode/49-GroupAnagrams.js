/**
 * Given an array of strings, strs, group the anagrams together.
 * You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters
 * of a different word or phrase, typically using all the original
 * letters exactly once.
 */

/**
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

function groupAnagrams(arrayOfStrings) {
  const map = new Map();
  arrayOfStrings.forEach((str) => {
    // sort the word
    const letters = str.split('');
    const sortedLetters = letters.sort().join('');
    if (map.has(sortedLetters)) {
      map.set(sortedLetters, [...map.get(sortedLetters), str]);
    } else {
      map.set(sortedLetters, [str]);
    }
  });
  let res = [];
  map.forEach((anagram) => {
    res.push(anagram);
  });
  return res;
}
const res = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
console.log('res', res);
