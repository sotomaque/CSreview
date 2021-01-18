/*
  Problem Statement:
    There is a string, s, of lowercase English letters that is repeated infinitely many times.
    Given an integer, n, find and print the number of letter a's in the first  letters of the infinite string.

  Example
    s = 'abcac'
    n = 10

    The substring we consider is abcacabcac, the first 10 characters of the infinite string.
    There are 4 occurrences of 'a' in the substring.

  Function Description

    Complete the repeatedString function in the editor below.

    repeatedString has the following parameter(s):

    s: a string to repeat
    n: the number of characters to consider
    Returns

    int: the frequency of a in the substring
    Input Format

    The first line contains a single string, s.
    The second line contains an integer, n.

  i.e.
    input 
     s = aba
     n = 10
    output = 7

  i.e.
    input 
     s = a
     n = 1000000000000
    output = 1000000000000
  */

function repeatedString(s, n) {
  // base cases
  const a = s.split('').filter((letter) => letter === 'a').length;
  // no 'a's in input string
  if (a <= 0) return 0;
  // only 'a's in input string
  const startingSize = s.length;
  if (startingSize === 1) return n;

  const repeat = Math.floor(n / startingSize);
  const left = n - repeat * startingSize;

  const result =
    repeat * a +
    s.split('').filter((letter, i) => letter === 'a' && i < left).length;

  return result;
}

const res = repeatedString(
  'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm',
  736778906400
);

console.log(res);
