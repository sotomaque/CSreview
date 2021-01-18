def subsetHelper(slate, array):
    if len(array) == 0:
        return slate
    else:
        #excude choice -> exclude the 0th element
        subsetHelper(slate, array[1:])
        #include choice
        subsetHelper(slate + array[0], array[1:])

def printSubsets(givenString):
    subsetHelper('', givenString)

def test():
    a = 'abc'
    printSubsets(a)

test()