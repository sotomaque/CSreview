

# time complexity: 
#   - loop nested within another loop -> O(n^2)
# space complexity: 
#   - varaibles -> min_index, i, j,
def selectionSort(givenArray):
    # for every element in the array
    for i in range(len(givenArray)):
        # assume the element is the smallest element 
        min_index = i
        # iterate through the remaining elements trying to find a counter example
        for j in range(i + 1, len(givenArray)):
            # if a counter example is found, update the min_index to represent the index of the new smallest element
            if givenArray[j] < givenArray[min_index]:
                min_index = j
        # once we have gone through all the remaining elments 
        # preform a swap
        givenArray[i], givenArray[min_index] = givenArray[min_index], givenArray[i]
    return givenArray

testArray = [64, 25, 12, 22, 11]
result = selectionSort(testArray)
print(result)