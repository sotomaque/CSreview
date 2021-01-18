# time-complexity: O(n! * n) 
# space-complexity: O(n)
def permutationHelper(prefix, array):
    if len(array) == 0:
        print(prefix)
    else:
        for i in range(0, len(array)):
            permutationHelper(prefix + array[i], array[:i] + array[i + 1:])

def permutations(givenString):
    permutationHelper("", givenString)

def test():
    a = "abc"
    permutations(a)

test()
