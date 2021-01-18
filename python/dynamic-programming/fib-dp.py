# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 

# dynamic programming approach (top down)
# O(n) time | O(n) space
def fib(n, memo = {0: 0, 1: 1}):
    if n in memo:
        return memo[n]
    else:
        memo[n] = fib(n-1, memo) + fib(n-2, memo)
        return memo[n]


# iterative solution 1 (bottom up)
# O(n) time | O(n) space
def fib_iterative(n):
    table = [None]*(n + 1)
    table[0] = 0
    table[1] = 1
    for i in range(2, n + 1):
        table[i] = table[i - 1] + table[i - 2]
    return table[n]


# iterative solution 2
# O(n) time | O(1) space
def fib_iterative_2(n):
    lastTwo = [0, 1]
    counter = 3
    while counter <= n:
        nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib
        counter += 1
    if n > 1:
        return lastTwo[1]
    else:
        return lastTwo[0]


# print(fib(6))
print(fib_iterative(6))