/*
  Given a string s, find the length of the longest substring without repeating characters.

  Example 1:
    Input: s = "abcabcbb"
    Output: 3

    Explanation: The answer is "abc", with the length of 3.

  Example 2:
    Input: s = "bbbbb"
    Output: 1

    Explanation: The answer is "b", with the length of 1.

  Example 3:
    Input: s = "pwwkew"
    Output: 3

    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

  Example 4:
    Input: s = ""
    Output: 0
*/

function LSWRC(str) {
  if (!str || !str.length || str.length === 0) return 0;

  const myMap = new Map();
  let runningMax = 0;
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (myMap.has(str[i]) && start <= myMap.get(str[i])) {
      start = myMap.get(str[i]) + 1;
    } else {
      runningMax = Math.max(runningMax, i - start + 1);
    }
    myMap.set(str[i], i);
  }

  console.log(myMap);
  return runningMax;
}

const res = LSWRC('pwwkew');
console.log(res);
