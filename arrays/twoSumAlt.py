"""
you have an array of n numbers and a number, find out whether the 
array contains two elements whose sum is the target.

if so, return yes, otherwise return no
"""

# method
"""
1. brute force:

    two nested loops, 
        for i in range(len(n)):
            for j in range(i + 1, len(n)):
                if n[i] + n[j] == target: return true
        return false

    time-complexity: O(n^2)

2. Decrease and conquer:

    assume a solution for n-1, expand to account for n

3. Transform and Conquer:

    use a dictionary!! 

"""

#dictionary approach
# O(n) time | O(n) space
def twoSumAlt(someArray, target):
    # create a dictionary
    d = {}
    # key: value -> value in array: count of occurances
    for i in someArray:
        if i in d:
            d[i] += 1
        else:
            d[i] = 1
    # for each key
    for key in d: 
        print("made it here")
        # compute the complement needed
        complement = target - key
        # account for the fact that we dont want to look at this specific key as a possible complement 
        d[key] -= 1
        # see if complement exists in our dictionary
        if complement in d and d[complement] >= 1:
            # if so return true
            return True
    # otherwise return false
    return False


def test():
    array = [2, 9, 1, 4]
    target = 4
    result = twoSumAlt(array, target)
    print (result)

test()