/*
  This question is asked by Amazon. Given a string representing your stones and another string representing a list of jewels,
  return the number of stones that you have that are also jewels.

  Ex: Given the following jewels and stones...

  jewels = "abc", stones = "ac", return 2
  jewels = "Af", stones = "AaaddfFf", return 3
  jewels = "AYOPD", stones = "ayopd", return 0
*/

/**
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(1)
 *
 * @param {*} jewels
 * @param {*} stones
 */
function jewelsAndStones(jewels, stones) {
  let result = 0;
  // for each letter in stones
  stones.split('').forEach((letter) => {
    // count how many times it occurs in jewels
    const matches = jewels.split('').filter((a) => a === letter);
    if (matches?.length > 0) {
      result += matches.length;
    }
  });
  // return total sum
  return result;
}

let stone = 'ayopd';
let jewel = 'AYOPD';

let res = jewelsAndStones(jewel, stone);
console.log(res);
