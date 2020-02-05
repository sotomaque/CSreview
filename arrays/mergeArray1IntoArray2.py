"""

Merge First Sorted Array Into Second Sorted Array

Problem Statement:

Given two arrays:
    1) arr1 of size n, which contains n positive integers sorted in increasing order.
    2) arr2 of size (2*n) (twice the size of first), which contains n positive integers
    sorted in increasing order in its first half. Second half of this array arr2 is empty.
    (Empty elements are marked by 0).

Write a function that takes these two arrays, and merges the first one into second one,
resulting in an increasingly sorted array of (2*n) positive integers.

i.e.
input:
    n = 3, arr1 = [1, 3, 5] and arr2 = [2, 4, 6, 0, 0, 0], 
expected output:
    [1, 2, 3, 4, 5, 6]

constraint: 
    merge first into second, in place, in O(n) time
"""

def merger_first_into_second(arr1, arr2):
    n = len(arr1)

    i = n - 1 #pointer pointing to last element for array 1
    j = n - 1 #pointer pointing to last non-zero element for array 2
    m = len(arr2) - 1

    while i >= 0:
        if j < 0: break

        if arr1[i] > arr2[j]:
            arr2[m] = arr1[i]
            i -= 1
            m -= 1
        if arr1[i] < arr2[j]:
            arr2[m] = arr2[j]
            j -= 1
            m -= 1
        if arr1[i] == arr2[j]:
            arr2[m] = arr1[i]
            i -= 1
            m -= 1
         
    # while we have moved all non-zero elements from arr2 to their spot
    # and we still have elements from arr1 to move
    while j < 0 and i >= 0:
        arr2[m] = arr1[i] 
        i -= 1
        m -= 1

    return arr2
  

def test():
    array1 = [2, 3, 6]
    array2 = [1, 4, 5, 0, 0, 0]
    
    print(merger_first_into_second(array1, array2))

test()