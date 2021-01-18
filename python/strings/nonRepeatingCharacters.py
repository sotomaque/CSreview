"""
implement a function that takes a string, and returns a character that 
appears only once.

if you are given a string with two characters that appear only once, 
return the first character in the string that appears only once.

if there are no characters that appear only once, return None

idea: hashmap, { key: value } -> { letter: count }, if count != 1, dont return it
"""

# Implement your function below.
def non_repeating(given_string):
    character_count = {}
    #iterate through string, adding count to a hashmap
    for letter in given_string:
        if letter in character_count:
            character_count[letter] += 1
        else:
            character_count[letter] = 1
    print (character_count)
    #iterate through hashmap, returning first letter with count == 1
    for letter in character_count:
        if character_count[letter] == 1:
            return letter
        

    return None


def test():
    # NOTE: The following input values will be used for testing your solution.
    result = non_repeating("abcab") # should return 'c'
    print(result)
    result = non_repeating("abab") # should return None
    print(result)
    result = non_repeating("aabbbc") # should return 'c'
    print(result)
    result = non_repeating("aabbdbc") # should return 'd'
    print(result)


def main():
    test()


main()