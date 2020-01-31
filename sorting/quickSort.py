

# time complexity: 
#   - best-case: O(n log(n))
#   - worst-case: O()
#   - average-case: 

# space complexity:
#   - in-place unlike mergeSort! 

def partition(array, start, end):
    pivot = array[start]
    low = start + 1
    high = end

    while True:
        # If the current value we're looking at is larger than the pivot
        # it's in the right place (right side of pivot) and we can move left,
        # to the next element.
        # We also need to make sure we haven't surpassed the low pointer, since that
        # indicates we have already moved all the elements to their correct side of the pivot
        while low <= high and array[high] >= pivot:
            high = high - 1

        # Opposite process of the one above
        while low <= high and array[low] <= pivot:
            low = low + 1

        # We either found a value for both high and low that is out of order
        # or low is higher than high, in which case we exit the loop
        if low <= high:
            array[low], array[high] = array[high], array[low]
            # The loop continues
        else:
            # We exit out of the loop
            break

    array[start], array[high] = array[high], array[start]

    return high

def quickSort(givenArray, start, end):
    if start >= end: return

    # pick some x = A[i] at random (call this the pivot)
    pivot = partition(givenArray, start, end)

    # QuickSort(L)
    # QuickSort(R)
    quickSort(givenArray, start, pivot - 1)
    quickSort(givenArray, pivot + 1, end)


    
testArray = [4,54,26,93,17,77,31,44,55,20]
quickSort(testArray, 0, len(testArray) - 1)
print(testArray)