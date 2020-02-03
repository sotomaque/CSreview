"""
Merge_K_sorted_arrays


Problem Statement:

This is a popular facebook problem.
Given K sorted arrays arr, of size N each, merge them into a new array res, such that res is a sorted array.
Assume N is very large compared to K. N may not even be known. The arrays could be just sorted streams, for instance, timestamp streams.
All arrays might be sorted in increasing manner or decreasing manner. Sort all of them in the manner they appear in input.

Note:
Repeats are allowed.
Negative numbers and zeros are allowed.
Assume all arrays are sorted in the same order. Preserve that sort order in output.
It is possible to find out the sort order from at least one of the arrays.

Input Format:
There is only one argument: 2D Integer array arr.
Here, arr[i][j] denotes value at index j of ith input array, 0-based indexing. So, arr is K * N size array.

Output Format:
Return an integer array res, containing all elements from all individual input arrays combined.
Input/Output Format For The Custom Input:

Input Format:
The first line of input should contain an integer K. The second line should contain an integer N, denoting size of each input array.
In next K lines, ith line should contain N space separated integers, denoting content of ith array of K input arrays
 where jth element in this ith line is nothing but arr[i][j], i.e. value at index j of ith array, 0-based indexing.  

If K = 3, N = 4 and arr = [
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [0, 9, 10, 11]
], 

then input should be:
    3
    4

    1 3 5 7
    2 4 6 8
    0 9 10 11

Output Format:
There will be (N*K) lines of output, where ith line contains an integer res[i], denoting value at index i of res.
Here, res is the result array returned by solution function.

For input K = 3, N = 4 and arr = [
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [0, 9, 10, 11]
], output will be:

0
1
2
3
4
5
6
7
8
9
10
11

Constraints:

1 <= N <= 500
1 <= K <= 500
-10^6 <= arr[i][j] <= 10^6, for all valid i,j
"""

# ideas:

# use k pointers, initialized to 0, 
# while each pointer is < n
# compare the value of array[k][pointer] to the other pointer values
# append the min to the output result array

# problem with this approach is we cannot generalize the mergeSort approach to a variable k
# need k variables, 

# instead we can use a minHeap, add the first element from each array to the minHeap
# pop the min value, add it to our results array

# if that element came from array 2, then we will add the next element from from array 2
# to the minHeap, and again pop the min value, adding it to our results array

# when we run out of elements in our k arrays, our minheap will be empty, results will be 
# ready to be returned

# priority queue uses heapcode under the hood, however it will also allow us to add
# the extra variable (what array the value came from) to our data structure
from heapq import heappush, heappop

def mergeKSortedArrays(givenArray):
    heap, res = [], []
    ascending = bool
    ascending = False
    # determine if givenArray is in acending or decending order
    for row in range(0, len(givenArray)):
        first = givenArray[row][0]
        last = givenArray[row][len(givenArray[0]) - 1]
    
        if first < last: ascending = True


    print(ascending)

    for subArray in givenArray:
        for num in subArray:
            heappush(heap, num)
    
    while heap:
        res.append(heappop(heap))

    if ascending:
        return res
    else:
        return res[::-1]
 

def test():
    # K = 3
    # N = 4
    # arr = [
    #     [7, 5, -1, -3],
    #     [8, 6, 4, 2],
    #     [11, 10, 9, 0]
    # ]

    K = 10
    N = 8
    arr = [ [34, 26, 20, 13, 11, 7, 4, 4],
            [41, 34, 27, 23, 19, 10, 8, 0],
            [26, 25, 19, 12, 7, 7, 7, 5],
            [46, 39, 35, 33, 27, 19, 12, 9],
            [33, 24, 22, 18, 18, 10, 3, 0],
            [42, 35, 35, 30, 21, 20, 12, 9],
            [42, 33, 24, 21, 12, 12, 8, 7],
            [29, 23, 21, 18, 18, 11, 8, 7],
            [35, 30, 30, 23, 15, 14, 8, 7],
            [20, 18, 17, 16, 12, 11, 5, 4]
    ]

    results = []
    for row in arr:
    
        results.append(row[::-1])

    #print(results)

    print('sorted array', mergeKSortedArrays(results))

test()