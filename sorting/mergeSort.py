

# time complexity: 
#   - height of recursion tree -> log(N)
#   - problem size at bottom of tree -> 1
#   - O(nLog(n)) -> does not compare on whether the array is partially sorted or reverse sorted
#   - no distinction between best, worst, and average base times
# space complexity: 
#   - not in place as we need an auxiliary array to store currently sorted arrays
def mergeSort(myList):
    if len(myList) > 1:
        mid = len(myList) // 2
        left = myList[:mid]
        right = myList[mid:]

        # Recursive call on each half
        mergeSort(left)
        mergeSort(right)

        # Two iterators for traversing the two halves
        i = 0
        j = 0
        
        # Iterator for the main list
        k = 0
        
        # compare sorted subarrays, grab smaller value item
        # i.e. left = [1, 2, 3] right = [2, 3, 7]
        # result = [left[0], left[1], right[0], left[2], right[1], right[2]] 
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
              # The value from the left half has been used
              myList[k] = left[i]
              # Move the iterator forward
              i += 1
            else:
                myList[k] = right[j]
                j += 1
            # Move to the next slot
            k += 1

        # For all the remaining values
        while i < len(left):
            myList[k] = left[i]
            i += 1
            k += 1

        while j < len(right):
            myList[k]=right[j]
            j += 1
            k += 1

    return myList


testArray = [4,54,26,93,17,77,31,44,55,20]
result = mergeSort(testArray)
print(result)