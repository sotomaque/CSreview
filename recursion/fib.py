
# approach 
def fib(n):
    if n == 1:
        return 0
    elif n == 2:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)

def test():
    n = 5
    print('the', n, 'th fib number is: ', fib(n))

test()