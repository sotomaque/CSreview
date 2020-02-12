"""
regex matcher

where * matches 0 or more characters of input string

i.e.
input: "abcaad"
regex: "ab*"
-> output: true

i.e.
input: "abcaad"
regex: "ab*d"
-> output: true

i.e.
input: "abcaad"
regex: "ab*dd"
-> output: false

"""
# time complexity: O(branchingFactor^maxHeight)
#   worst-case height: max(givenInput, givenRegex)
#   -> O(2^max(m, n))

# space-complexity: max height of tree
#   -> O(max(m, n))
def remainingCharsAreStars(string, index):
    for i in range(index, len(string)):
        if string[i] != '*':
            return False
    return True

def helper(inputString, regexString, i, j):
    # if regex is exhaused, input has to be exhausted
    if j == len(regexString):
        return i == len(inputString)
    # if input is exhausted, can only be true if all remaining chars in regex are stars
    if i == len(inputString):
        return remainingCharsAreStars(regexString, j)
    if inputString[i] == regexString[j]:
        return helper(inputString, regexString, i + 1, j + 1)
    
    # recursive section
    elif regexString[j] == '*':    
        # either * matches 0 times
        return (helper(inputString, regexString, i, j + 1) or
        # or it matches non-zero times
        helper(inputString, regexString, i + 1, j))

    # no star at j, and input[i] != input[j]
    return False

def regexMatcher(inputString, regularExpression):
    return helper(inputString, regularExpression, 0, 0)

def test():
    inputString = 'abcaadabbca'
    regex = 'ab*da*a'

    if regexMatcher(inputString, regex):
        print(inputString, ' and ', regex, ' match')
    else:
        print(inputString, ' and ', regex, ' do not match')

test()