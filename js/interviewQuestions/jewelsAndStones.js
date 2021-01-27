/*
  This question is asked by Amazon. Given a string representing your stones and another string representing a list of jewels,
  return the number of stones that you have that are also jewels.

  Ex: Given the following jewels and stones...

  jewels = "abc", stones = "ac", return 2
  jewels = "Af", stones = "AaaddfFf", return 3
  jewels = "AYOPD", stones = "ayopd", return 0
*/

function jewelsAndStones(jewels, stones) {
  let result = 0;
  // for each letter in stones
  // count how many times it occurs in jewels
  // return total sum
  stones.split('').forEach((letter) => {
    const matches = jewels.split('').filter((a) => a === letter);
    if (matches?.length > 0) {
      result += matches.length;
    }
  });

  return result;
}

let stone = 'ayopd';
let jewel = 'AYOPD';

let res = jewelsAndStones(jewel, stone);
console.log(res);
