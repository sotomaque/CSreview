
# Maximum Cost Stair Climb
"""
    - optimization version of the stair climbing question we already saw
    - this will be a minimization problem

    - problem will still have same rules, either one step or two steps allowed
    - however now each step will have an associated cost
    
    - we want to find the cheapest way to go from ground floor to top floor
        - neither the ground nor the top floors have associated costs

    - brute force attempt: enumerate all possible paths, find the min
        - enumerating each possible path will be exponential in size of input because this gives us the fibonaci recurance in n
    
    - input for weights will be provided in an array:
        - i.e. [0, 10, 15, 20, 10, 12, ..., 0]
"""

# time-complexity:
    # O(n)
# space-complexity:
    # O(n)
def minCost(costArray):
    # pad array with 0 at first and last index
    modifiedCostArray = [0] * (len(costArray) + 2)
    for i in range(1, len(costArray) + 1):
        modifiedCostArray[i] = costArray[i-1]
    
    # make a memorization table
    # this table will store the min cost value for each of these vertex
    table = [None] * len(modifiedCostArray)

    # Base Case 0:
    # cost for 0 step = 0; cost for last step = 0; cost for first step = costarray[1] since the only 
    # way to react it is from the source
    table[0] = 0
    table[len(table) - 1] = 0
    table[1] = modifiedCostArray[1]

    # iterate through subsequent entries in the table
    # relying on the the pervious entries
    for i in range(2, len(table)):
        table[i] = min(table[i-1], table[i-2]) + modifiedCostArray[i]

    # return last index of memorization table
    return table[-1]



def test():
    costArray = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
    result = minCost(costArray)
    print(result)

test()