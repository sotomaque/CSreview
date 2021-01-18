import math

def helper(n, fromIndex, toIndex):
    
    midpoint = (fromIndex + toIndex) / 2
    midpoint_squared = midpoint * midpoint

    # case midpoint_squared == sqrt(n)
    if (midpoint_squared == n or (abs(midpoint_squared - n) < 0.00001)):
        return midpoint

    # recurse from (midpoint:toIndex)   
    elif (midpoint_squared < n):
        return helper(n, midpoint, toIndex)

    # recurse from (fromIndex:midpoint)
    else:
        return helper(n, fromIndex, midpoint)


def findSquareRoot(n):
    # ensure n is valid
    if not n or n < 0:
        print('invalid input')
        return

    i = 1
    found = False
    while not found:
        # case perfect square found
        if i * i == n:
            found = True
            return i
        elif i * i > n:
            # recursion case
            result = helper(n, i - 1, i)
            found = True
            return result
        i += 1


def main():
    n = 11
    result = findSquareRoot(n)
    print("{0:.5f}".format(result))

main()