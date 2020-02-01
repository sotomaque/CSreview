"""
you have an array of n numbers and a number, find out whether the array contains two
elements whose sum is the target.
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


"""

def twoSumAlt(someArray, target):
    d = {}
    for i in someArray:
        if i in d:
            d[i] += 1
        else:
            d[i] = 1

    for key in d: 
        complement = key - target
        if complement in d:
            return True

    return False


def test():
    array = [5, 9, 1, 3]
    target = 6
    result = twoSumAlt(array, target)
    print (result)

test()