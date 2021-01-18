"""
problem statement:
    given a length, L, i.e L = 6
    and prices (array from [0, L]) i.e. [0, 1, 3, 3, 8, 8, 10]

    goal is fetch the maximum sales price, 
    you can either partition the rod into unit pieces, or not cut it at all.

    max-sales price: $11 => {2, 4} bc cutting the rod to a length of 2 => $3 + cutting the rod to a length of 4 => $8
"""

# greedy approach: cut at the highest price per unit length
#   can be tricked by bait input

# recurance relationship, cut at every possible length
# if we make a cut of length 0 (base case), our remainder is == 0
# starting with length l, cut from 0 - l (each will be a subproblem)
# for each subproblem, sum the price of the size of the cut, plus what the resuling node returns
# i.e. starting with a rod of size 6, cut one unit, 5 remain, so we would add the result from 5 + prices[1]

# in general f(L) = max(for all i fro 1 - L, prices[i] + f(L - i))

# recursion
# O(L^L) time-complexity
# O(height) -> O(L) space-complexity
def rodCutting(length, prices):
    if (length == 0): return 0

    result = -1
    for i in range(1, length + 1):
        result = max(result, prices[i] + rodCutting(length - i, prices))
    
    return result


# DP version (top-down)
# O(L^2) time-complexity
# O(L) space-complexity
def rodCutting_dp(length, prices, cache):
    if (length == 0): return 0
    if (cache[length] != -1): return cache[length]

    result = -1
    for i in range(1, length + 1):
        result = max(result, prices[i] + rodCutting_dp(length - i, prices, cache))
    
    cache[length] = result
    return result


# iterative (bottom-up)
#   approach:
#       (1) identify DP table (size, type, dimensions, etc.)
#           - one dimensional array
#           - size L + 1 (0 to L inclusive, so L + 1)
#           - DP[L + 1] = [x, x, x, x, x, x, x]
#               - where DP[x] represents the maximum sales price for a cut of 1
#               - so what we are looking for in our example, is DP[6]
#       (2) initialize DP table with the known values
#           - DP[0] = 0
#           - DP[1] = prices[1]
#           - DP[L + 1] = [0, 1, x, x, x, x, x]
#       (3) find traversal direction
#           - given DP[L + 1] = [0, 1, x, x, x, x, x] and our recurance relationship, we know the next
#               elemeent we will compute will be DP[2]
#           - for len in range(2, L + 1)
#       (4) populate DP Table

# O(L^2) time-complexity
# O(L) space-complexity
def rodCutting_iterative(L, prices):
    if (L == 0): return 0
    DP = [-1]* (L + 1)
    DP[0] = 0
    DP[1] = 1
    for length in range(2, L + 1):
        result = -1
        for i in range(1, length + 1):
            result = max(result, prices[i] + DP[length - i])
        DP[length] = result
    return DP[L]


def test():
    L = 6
    prices = [0, 1, 3, 3, 8, 8, 10]

    # print(rodCutting(L, prices))
    # cache = [-1]*(L + 1)
    # print(rodCutting_dp(L, prices, cache))

    print(rodCutting_iterative(L, prices))

test()