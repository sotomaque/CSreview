memo = {}

def nthtribonacci(n):
    if n == 0 or n == 1:
        return n
    if n == 2:
        return 1
    if n not in memo:
        memo[n] = nthtribonacci(n-1) + nthtribonacci(n-2)
    return memo[n]

print(nthtribonacci(6))