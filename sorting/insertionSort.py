

# time complexity: 
#   - best case -> O(n)
#   - worst case -> O(n^2)
#   - average case -> O(n^2)
#
# space complexity: 
#   - varaibles -> i, j,
#   - second data structure -> i.e. second array for output
def insertionSortRecursive(givenArray, n):
    # base case
    if n <= 1: return

    # sort first n - 1 elements
    insertionSortRecursive1(givenArray, n-1)

    # insert last element into its correct position in sorted array
    last = givenArray[n - 1]
    j = n - 2
    while j >= 0 and givenArray[j] > last:
        givenArray[j + 1] = givenArray[j]
        j = j - 1
    
    givenArray[j + 1] = last
    return givenArray


# time complexity: 
#   - best case -> O(n)
#   - worst case -> O(n^2)
#   - average case -> O(n^2)
#
# space complexity: 
#   - varaibles -> i, j,
#   - second data structure -> i.e. second array for output
def insertionSortIterative(givenArray, n):
    # base case
    if n <= 1: return

    # bottom up approach
    for i in range(1, n):
        currentValue = givenArray[i]
        position = i
        
        while position > 0 and givenArray[position - 1] > currentValue:
            givenArray[position] = givenArray[position - 1]
            position = position - 1

        givenArray[position] = currentValue
    
    return givenArray

testArray = [12,11,13,5,6] 
n = len(testArray) 
result = insertionSortIterative(testArray, n)
print(result)