"""
# approach 1: 
    starting at 0 index, iterating the length of input array, append current array element to new array to be returned
"""
def approach1(arrayInput):
    reversedArray = []

    for i in range(len(arrayInput) - 1, -1, -1):
        reversedArray.append(arrayInput[i])

    return reversedArray

def test():
    inputArray = [1, 2, 3, 4, 5]
    outputArray = approach1(inputArray)

    print (outputArray)

test()