def dsHelper(prefix, n):
    if n == 0:
        print(prefix)
    else:
        for i in range(0, 10):
            dsHelper(prefix + str(i), n - 1)

def decimalString(n):
    dsHelper("", n)

def test():
    n = 2
    decimalString(n)

test()