"""
generate valid paranthesis

input: n (> 0)
output: (()) , () () 

n = 1 -> ()

n = 2 -> (( )), () () 

n = 3 -> ((())), ()()(), (()()), ()(()), (())()

permutation prob not subset prob bc we dont pick "do we include or dont include" we have to include very time
we just get to decide which one

also order matters, as the parethesis must be valid (balanced)

first location, can only place left parethesis
second, left or right, depending on n, etc.


given n = 2
leftCount = 2
rightCount = 2

if leftCount == righCount, we can only add a left p

if rightCount > leftCount:
    we can maybe add another left
    or we can make use of one of the rights

if leftCount == 0, rightCount >0:
    add rightCount until rightCount == 0

no where in the tree will left count be greater than right count

base condtion: leftCount and rightCount == 0
"""

# time-complexity: O(2^n)
# space-complexity: O(n)
def helper(leftCount, rightCount, currentResult, finalResult):
    # if we have exhausted left and right count, we are done, return finalResult
    if leftCount == rightCount == 0:
        finalResult += currentResult
        print(finalResult)
        return

    if leftCount == rightCount:
        helper(leftCount - 1, rightCount, currentResult + "(", finalResult)

    if rightCount > leftCount:
        # can either add left first or right first
        if leftCount > 0:
            # add left parenthesis
            helper(leftCount - 1, rightCount, currentResult + "(", finalResult)

        # add right par
        helper(leftCount, rightCount - 1, currentResult + ")", finalResult)


def generateValidP(n):
    return helper(n, n, '', '')

def test():
    n = 1
    generateValidP(n)

test()