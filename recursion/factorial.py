
# recurssive approach 
#   time-complexity: O(n)
#   space-complexity: 
#       uses n calls on the stack for each recursive call
def factorial_recursive(n):
    if n == 0:
        return 1
    else:
        return n * factorial_recursive(n - 1)

# iterative approach
#   time-complexity: O(n)
#   spacea-complexity: O(1)
def factorial_iterative(n):
    result = 1
    for i in range(1, n):
        result += result * i
    return result

def test():
    n = 6
    print(n, 'factorial is = ', factorial_recursive(n))

test()