/*
  Given an array of strings, return the longest common
  prefix that is shared amongst all strings.

  Note: you may assume all strings only contain lowercase
  alphabetical characters
*/

function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  let prefix = '';

  // First find the shortest string in the array; the length of this string is the maximum length of our prefix
  let maxPrefixLength = Math.min(...strs.map((str) => str.length));

  // Next we iterate from index 0 to maxPrefixLength - 1
  for (let i = 0; i < maxPrefixLength; i++) {
    // We use this index to check the corresponding character of each string together and compare them
    let char = strs[0][i];
    // This is easily done using Array.every
    if (strs.every((str) => str[i] === char)) {
      // If all characters at index i match, then we add it to our prefix result string
      prefix += char;
    } else {
      // As soon as we hit one mismatch, that's the end of the common prefix and we break out of our loop
      break;
    }
  }
  // return prefix at the end, which may be empty
  return prefix;
}

const input = ['colorado', 'color', 'cold'];

const res = longestCommonPrefix(input);
console.log(res); // 'col'
