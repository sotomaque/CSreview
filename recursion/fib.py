# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 

# recurssive approach 
# O(2^n) time | O(n) space
def fib(n):
    if n == 1:
        return 0
    elif n == 2:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)

# dynamic programming approach (bottom up)
# O(n) time | O(n) space
def fib_dp(n, cache = {1: 0, 2: 1}):
    if n in cache:
        return cache[n]
    else:
        cache[n] = fib_dp(n - 1, cache) + fib_dp(n - 2, cache)
        return cache[n]

# iterative solution
# O(n) time | O(1) space
def fib_iterative(n):
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


def test():
    n = 5
    print('the', n, 'th fib number is: ', fib_iterative(n))

test()