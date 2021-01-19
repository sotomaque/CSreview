# subset-sum problem

# given s = {1, 2, 3} and target = 3,
# generate all the subsets whose sum == target

# time-complexity: O(2^n)
#   -> just like combinations; every node i doing a constant amount of work
#       then the complexity would be proportional to the 
#       total amount of nodes in the tree ~ O(2^n)
#  
# space-complexity: O(n) 
#   -> proportional to maximum call stack, O(n)

def helper(givenArray, subset, runningSum, index):
    if runningSum == 0: # we have found a subset that adds to target sum
        print(subset)
        return
    if runningSum < 0 or index == len(givenArray): 
        return
    # add element at given index to subset
    subset.append(givenArray[index])
    # recursive call with included element
    helper(givenArray, subset, runningSum - givenArray[index], index + 1)
    # dont add element at given index to subset
    subset.remove(givenArray[index])
    # recursive call without current element
    helper(givenArray, subset, runningSum, index + 1)


def subsetSum(givenArray, targetSum):
    subset = []
    return helper(givenArray, subset, targetSum, 0)
    
def test():
    a = [1, 2, 4, 20, 5, 19, 6, 14, 13, 21]
    target = 25

    subsetSum(a, target)

test()