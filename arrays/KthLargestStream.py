"""
design a class to ffind the Kth largest element in a stream.
note that it is the kth largest element in the sorted order
not the Kth distinct element.

Your KthLargest class will have a constructor which accepts an
int, k, an an array, nums.

for each call to your method, KthLargest.add, return the element
representing the Kth largest element in the stream

i.e. k = 3, arr = [4, 5, 8, 2] -> sorted [2, 4, 5, 8]
KthLargest(3, arr) 
KthLargest.add(3) // return 4
KthLargest.add(5) // return 5
KthLargest.add(10) // return 5

"""
import heapq


def KthLargestStream(nums, k):
    # build min heap on initialized array
    heapq.heapify(nums)
    results = []
    i = 0
    # while heap size > k:
    while len(nums) != 0 and i < k:
    #   pop out the root
        results.append(heapq.heappop(nums))
        i += 1
  
    # this sets up the heap to start out as a min heap of size k with the root holding the min (holding K largest elements)
    print (results)

    # for each new number that comes in:
    #   compare it to the root:
    #       if greater than the root: (candidate for top k) 
    #           insert it, 
    #           if heap size > k : pop out root
    #       print root of min heap (updated Kth largest element)

# if question were changed to KthSmallestStream -> use Max Heap
# or use a min heap and flip the sign of the numbers (negative numbers)

# another variation -> finding the median in a stream (i.e. when k is a function of n)

# example input: 1, 0, 3, 5, 2, 0, 1
# output: 1, 0.5, 1, 2, 2, 1.5, 1

# we have to store all the numbers! question is in what D.S.
# maitain stream in min/max heap
# extract n/2 times -> n/2 * O(logn) ~ O(n log(n))
# print median -> constant time
# reinsert them  -> n/2 * O(logn) ~ O(n log(n))
# total: O(n log(n)) per number -> wrose than a sorted array 

# everything smaller than the current median is maintained in a max heap
# everything larger than the current median is maintained in a min heap

# if the two heaps are of the same size, the median is the avg of two roots

# if the next number received is smaller than the median, insert it in the max heap,
# now the max heap is bigger, the current median is the root of the max heap

# as soon as the size difference between the two heaps is > 1, we have to re adjust them,
# i.e. we get another number smaller than the median, we will pop from the max heap,
# insert it into the min,
# grab the new median as the new root of the max heap

# insertion -> O(log(n))
# rebalancing -> removing node + insertion => O(log(n)) + O(log(n)) => 2*O(log(n)) ~ O(log(n))
# compute and print median -> O(1)

# total time complexity -> O(log(n)) per number -> a lot better than O(n log(n)) per number

'''
psudocode:
    minHeap= []
    maxHeap= []
    median= 0

#insert
    for each new number, num:
        if num <= median: 
            insert num into maxHeap
        else:
            insert num into minHeap

#rebalance
    if size(maxHeap) - size(minHeap) == 2:
        minHeap.insert(extracted root of maxHeap)
    elif size(maxHeap) - size(minHeap) == 2:
        maxHeap.insert(extracted root of minHeap)

#median computation
    if size(minHeap) == size(maxHeap):
        median = avg of two roots
    elif size(minHeap) = 1 + size(maxHeap):
        median = root of minHeap
    else:
        median = root of maxHeap

#analysis -> space complexity -> O(n) -> cant do better, have to store all elements
#         -> time complexity -> O(log(n)) per number

'''
array = [3, 4, 7, 5, 9, 8, 11, 11, 8]
k = 4

KthLargestStream(array, k)