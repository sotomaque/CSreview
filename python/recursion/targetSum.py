"""
given an input set and a target,
i.e. A = { 1, 3, 5, 7, 9}
and target = 12

if we can find any elements that can sum up to the target
return true, 
otherwise return false

we need to have at least one element that adds up to the target
meaning if the target itself is in the set, the result is true
"""

# one solution -> creating all subsets, summing up each subset, comparing with target
# problem -> 2^n subsets, summing up each one -> overall complexity n*2^n
# space-complexity is also n*2^n

# alternative approach

# count represents the number of elements we have included, bc we have a constraint that the solution must have at least one element
def helper(givenSet, startIndex, remainingSum, count):
    # base condition 1 -> we have reached the target sum and have some element in out set
    if remainingSum == 0 and count > 0:
        return True

    # base condition 2 -> we have reached the end of the set
    if startIndex == len(givenSet):
        return False

    # otherwise, continue recursive scenario
    # include element at startIndex
    result1 = helper(givenSet, startIndex + 1, remainingSum - givenSet[startIndex], count + 1)
    # if the subproblem returned true, no need to continue, simply return true
    if result1:
        return True

    # dont include elment at startIndex
    result2 = helper(givenSet, startIndex + 1, remainingSum, count)
    return result2

def targetSum(set, target):
    return helper(set, 0, target, 0)
    

def test():
    a = [1, -1, 7, 9, 2]
    target = 0
    print(targetSum(a, target))

test()