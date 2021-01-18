"""
problem statement:
    given a set of people, and their according weights,
    return true if it is possible to split the people into two groups
    where the sum weight of one group == sum weight of the other group

    if you can form such groups, return true, otherwise return false

    the number of people in each group does not matter, can be skewed

general problem:
    subset sum problem, 
    trying to find two subsets with the same weight
    sum total weight, can only split in 2 groups if sum is even

    first find combined weight of people
        only proceed if even
        get half of that combined sum
        find subset whose sum adds up to this half combined sum
        as long as we find one path which creates a subset of the correct sum, return true (or between children in recursion)

recursion formula:
    f(i, sum) = f(i + 1, sum - input[i]) aka f(i + 1, sum)

base-cases:
    - sum == 0 => return true
    - i == len(input) => return false
    - sum < 0 => return false
"""
# recursion version
# time-complexity: O(2^n) where n is the number of elements in the input
# space-complexity: O(n) 
#   -> proportional to maximum call stack, O(n)

def helper(givenArray, i, runningSum):
    # base cases
    if runningSum == 0:
        return True
    if i == len(givenArray):
        return False

    result = False
    if (runningSum >= givenArray[i]):
        # child case in which we do add the next element to our subset
        result = helper(givenArray, i + 1, runningSum - givenArray[i])
    # see if the above case or the case in which we do not add the next element to our subset 
    return result or helper(givenArray, i + 1, runningSum)

def testForTie(listOfWeights):
    combinedSum = sum(listOfWeights)
    if combinedSum % 2 != 0:
        return False
    halfSum = combinedSum / 2
    return helper(listOfWeights, 0, halfSum)
    

# dp version
# time-complexity: O(n * halfSum)
# space-complexity: O(n) 

# step 1: identify DP table -> data structure, size, number of changing parameters in our recursion etc.   
#   - 2D array since we have two conditions that have to be the same to make a subproblem an overlapping subproblem
#       - i and sum have to be the same, two problems computing same sum but different i are not overlapping subproblems
#       - DP[len(givenArray) + 1][halfSum + 1]
#   -> cheap trick, complexity is size of the table, table dimensions are based of number of changing variables

"""                     sum
   DP = [    0  1  2  3  4  5  6  7  8  9  10  11
          0 [x, x, x, x, x, x, x, x, x, x, x, ANSWER],
          1 [x, x, x, x, x, x, x, x, x, x, x, x],
      i   2 [x, x, x, x, x, x, x, x, x, x, x, x],
          3 [x, x, x, x, x, x, x, x, x, x, x, x],
          4 [x, x, x, x, x, x, x, x, x, x, x, x],
          5 [x, x, x, x, x, x, x, x, x, x, x, x],
          6 [x, x, x, x, x, x, x, x, x, x, x, x]
        ]

    remember our root node in the recurance solution, had i = 0, sum = halfsum
    - this was the node that held our final answer

    - similarly our final answer will be found at DP[0][halfSum]
"""

# step 2: initialize DP table -> cheap trick, come from base conditions in recursive solution
"""                     sum
   DP = [     0   1  2  3  4  5  6  7  8  9  10  11
          0 [TRUE, x, x, x, x, x, x, x, x, x, x, ANSWER],
          1 [TRUE, x, x, x, x, x, x, x, x, x, x, x],
      i   2 [TRUE, x, x, x, x, x, x, x, x, x, x, x],
          3 [TRUE, x, x, x, x, x, x, x, x, x, x, x],
          4 [TRUE, x, x, x, x, x, x, x, x, x, x, x],
          5 [TRUE, x, x, x, x, x, x, x, x, x, x, x],
          6 [TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE]
        ]

"""
# step 3: find traversal direction  -> cheap trick, opposite direction of recursion
"""            
    - recall our recurance equation:
        - f(i, sum) = f(i + 1, sum - input[i]) aka f(i + 1, sum)
    - here we explicitly say, 
        - if i want to solve position i, i need i + 1 (below the position i want to solve)
        - if i want to solve positoin sum, i need input[i] (to the left of the position i want to solve)
            - sum is the column, column - input[i] will be <= column bc input only holds positive values

                         sum
   DP = [     0   1  2  3  4  5  6  7  8  9  10  11
          0 [TRUE, x, x, x, x, x, x, x, x, x, x, ANSWER],
          1 [TRUE, x, x, x, x, x, x, x, x, x, x, x],
      i   2 [TRUE, x, x, x, x, x, x, x, x, x, x, x],
          3 [TRUE, x, x, x, x, x, x, x, x, x, x, x],
          4 [TRUE, x, x, x, x, x, x, x, x, x, x, x],
          5 [TRUE, -> , x, x, x, x, x, x, x, x, x, x],
          6 [TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE]
        ]
    
    - since we need elements below and to the left, we will start at DP[0][5]
"""
# step 4: populate DP table
"""
    for (i = len(input) - 1, i >= 0; --i) {
        for (sum = 1; sum <= halfsum; ++ sum) {
            bool result = false;
            if (sum >= input[i]) {
                result = DP[i+1][sum-input[i]]
            } else {
                DP[i][sum] = result || DP[i+1][sum]
            }
        }
    }

    return DP[0][halfsum]
"""



def test():
    listOfWeights = [1, 2, 3, 4, 5, 7]
    print(testForTie(listOfWeights))

test()