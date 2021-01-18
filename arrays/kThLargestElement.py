"""
Kth largest element in an array

find the kth largest element in an unsored array. note that it is the kth largest element in the 
sorted order, not the kth distinct element
"""
# naive solution -> selection sort modification
#    -> k scans
#    -> O(k * n) ~ O(n^2)

# naive solution #2 -> insertion sort modification
#    -> could be the case that the last element is the one were lookng for
#    -> O(n^2)

# naive solution #3 -> use variables, i.e. Max1, Max2, etc.
#   in one single scan update the max values
#   if we are interested in k = 3, return max3
#   similar to insertion sort, O(k) per number
#   reduces O(n^2)
# problem is it is also heavy in space-complexity

# transform data into balanced binary heap, grabbing the kth element would be O( n log(n) )
# extract operation -> O (log(n))
# do this operation K time
# total time-complexity: O(k log(n)) ~ O(n log(n))
import heapq
import random

def kThLargestElement(givenArray, k):
    # transform array -> heap
    heapq.heapify(givenArray)
    result = []
    while len(givenArray) != 0:
        # popping gives us min value since default heap type is min heap
        temp = heapq.heappop(givenArray)
        print temp
        result.append(temp)
    #   [3, 4, 5, 7, 12, 19, 26]
    # if we want the 2nd largest element
    # we want index len(givenArray) - k
    return result[len(givenArray) - k]
        
     
# idea is to pick a random pivot, do partitioning, put pivot in final position
# then only do quicksort for the partition that element
# after that round of partitioning, we can then only do quicksort for the 
# partion where k lives
def kthSmallest(arr, l, r, k): 
  
    # If k is smaller than number of  
    # elements in array 
    if (k > 0 and k <= r - l + 1): 
      
        # Partition the array around last  
        # element and get position of pivot 
        # element in sorted array 
        pos = partition(arr, l, r) 
  
        # If position is same as k 
        if (pos - l == k - 1): 
            return arr[pos] 
        if (pos - l > k - 1): # If position is more,  
                              # recur for left subarray 
            return kthSmallest(arr, l, pos - 1, k) 
  
        # Else recur for right subarray 
        return kthSmallest(arr, pos + 1, r, 
                            k - pos + l - 1) 
  
    # If k is more than number of 
    # elements in array 
    return sys.maxsize 
  
# Standard partition process of QuickSort().  
# It considers the last element as pivot and 
# moves all smaller element to left of it 
# and greater elements to right 
def partition(arr, l, r): 
  
    x = arr[r] 
    i = l 
    for j in range(l, r): 
        if (arr[j] <= x): 
            arr[i], arr[j] = arr[j], arr[i] 
            i += 1
    arr[i], arr[r] = arr[r], arr[i] 
    return i 
  
def test():
    array = [12, 3, 5, 7, 4, 19, 26] 
    n = len(array)
    k = 3 # should be 5
    result = kthSmallest(array, 0, n - 1, k)
    print(result)
    result = kThLargestElement(array, k)
    print ('kth largest element where k is ', k, ' = ',result)
    
test()