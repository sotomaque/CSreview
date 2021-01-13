/*
    given a string as an input compress it in such a way that the compressed
    string is always shorter or equal to the length of the original string

    return the length of the compressed string

    i.e.
        - input: 'a' 
        - (a1 is longer than a, so shortest compression === original input)
        - therefore shortest compression = 'a'
        - output: length of shortest compresseion, 1

    i.e.
        - input: 'abbb'
        - compression: 'ab3' (len = 3)
        - output: 3

    i.e.
        - input: 'aabbbccc'
        - compresseion: 'a2b3c3' (len = 6)
        - output: 6

    i.e. 
        - input: 'abbbbbbbbbb'
        - compression: 'ab10' (len = 4)
        - output: 4

    approach:

        - use two pointers, initialize both at 0, while i and j point at same thing, 
        j++, whenever they no longer point at the same thing, if (j - 1) > 1, record the 
        diff as the integer denoting the count for the char we just saw

*/

/**
 * time-complexity:
 *  - O(n) where n is the length of str
 *
 * space-complexity:
 *  - O(1)
 *
 * @param {string} str - user input
 * @returns {int} len - length of shorted compression of str
 */
function compressedStringLength(str) {
  let compressedStr = '';
  let i = 0;
  while (i < str.length) {
    let j = i;
    while (j < str.length && str[i] === str[j]) {
      j += 1;
    }
    compressedStr += str[i];
    if (j - i > 1) {
      let count = j - i;
      compressedStr += count.toString();
    }

    i = j;
  }

  return compressedStr.length;
}

let str = 'abbbbbbbbbb';
let res = compressedStringLength(str);
console.log(res);
