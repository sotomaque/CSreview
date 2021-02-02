/**
Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

 
Follow up:
Could you solve it using only O(1) extra space?
 */

/**
 * time-complexity:
 *  - O(n) (walk through the string once)
 *
 * space-complexity:
 *  - O(1)
 *
 * @param {*} chars
 */
function stringCompression(chars) {
  let index = 0;
  let i = 0;
  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[i] === chars[j]) {
      j++;
    }
    //         record char we just saw
    chars[index] = chars[i];
    index++;
    //         only compress if we saw more than once
    if (j - i > 1) {
      const count = (j - i).toString();
      for (const c of count) {
        chars[index] = c;
        index++;
      }
    }
    i = j;
  }
  //
  return index;
}
// chars = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
// chars = ['a'];
chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
const res = stringCompression(chars);
console.log(`compressed string: ${res}`);
