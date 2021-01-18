"""
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
"""
def lengthOfLongestSubstring(s):
    # basecase
    if len(s) == 0:
        return 0
    # dict will be { letter: index }
    map = {}
    max_length = start = 0
    # iterate through the length of the string
    for i in range(len(s)):
        # if letter is duplicate, shift start over
        if s[i] in map and start <= map[s[i]]:
            start = map[s[i]] + 1
        # otherwise, compute the current longest substring
        else:
            max_length = max(max_length, i - start + 1)
        map[s[i]] = i
        print(map)
    return (max_length)

def test():
    print(lengthOfLongestSubstring("abcabcbb"))
    print("should be == 3")

test()