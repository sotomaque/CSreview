

# time complexity: 
#   - best-case: O(n log(n))
#   - worst-case: O()
#   - average-case: 

# space complexity:
#   - in-place unlike mergeSort! 
def helper(A, start, end):
    # base case
    if start >= end: return

    # recursive case
    p_index = random.randint(start, end)
    A[p_index], A[start] = A[start], A[p_index]
    orange = start

    for green in range(start, end):
        if A[green] < A[start]:
            orange += 1
            A[orange], A[green] = A[green], A[orange]
    # take pivot and insert it into its right place
    # which should be the boundry between the orange and the green regions
    A[start], A[orange] = A[orange], A[start] #pivot is now sitting at orange index

    # now we have done the work of putting the pivot in its place, we can now do the recursive call
    helper(A, start, orange - 1) # left partition
    helper(A, orange + 1, end) # right partition

    return 
    

def quickSort(nums):
    helper(nums, 0, len(nums) - 1)
    return nums

    
testArray = [4,54,26,93,17,77,31,44,55,20]
quickSort(testArray, 0, len(testArray) - 1)
print(testArray)