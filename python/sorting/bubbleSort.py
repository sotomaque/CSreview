

# time complexity: 
#   - loop nested within another loop -> O(n^2)
# space complexity: 
#   - varaibles -> i, j,
#   - second data structure -> i.e. second array for output
def bubbleSort(givenArray):
    # for every element in the array
    for i in range(len(givenArray)):
        # starting from the end of the array, and working towards the begining
        for j in range(len(givenArray) - 1, i, -1):
            # if the element on the left is greater than the element on the right
            if givenArray[j - 1] > givenArray[j]:
                # preform a swap
                givenArray[j - 1], givenArray[j] = givenArray[j], givenArray[j - 1]

    # return a new array with sorted elements
    sortedArray = []
    for i in range(len(givenArray)):
        sortedArray.append(givenArray[i])

    return sortedArray

testArray = [64, 25, 12, 22, 11]
result = bubbleSort(testArray)
print(result)