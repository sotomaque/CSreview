# 1, 2, 3, ... 

# dynamic programming approach (top down)
# O(n) time | O(n) space
def climbingNStiars(n, memo = {1: 1, 2: 2}):
    if n in memo:
        return memo[n]
    else:
        memo[n] = climbingNStiars(n-1, memo) + climbingNStiars(n-2, memo)
        return memo[n]

print(climbingNStiars(6))


# iterative solution 1 (bottom up)
# O(n) time | O(n) space
def climbingNStiars_iterative(n):
    table = [None]*(n + 1)
    table[1] = 1
    table[2] = 2
    for i in range(3, n + 1):
        table[i] = table[i - 1] + table[i - 2]
    return table[n]

print(climbingNStiars_iterative(6))

# iterative solution 2
# O(n) time | O(1) space
def climbingNStiars_iterative_2(n):
    lastTwo = [1, 2]
    counter = 3
    while counter <= n:
        nextN = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextN
        counter += 1
    if n > 1:
        return lastTwo[1]
    else:
        return lastTwo[0]

print(climbingNStiars_iterative_2(6))
