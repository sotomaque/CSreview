// Quick Select
//  - O(n) per number

// Sorted Array
//  - O(n) per number

// Heap of size N
//  if we were just using a regualr min heap
//  we would return the median by extracting min ~ n/2 times
//  then printing the next root (which is the median)
//  then re-inserting what we popped (~ n / 2 inserts)
//  (log n per extractions / insertion)
//  total time complexity: O(nLogN) per number
//
//  - O(nLogN) per number per number - Not good enough

//  instead we want to maintain our values in two seperate collections
//
// everything smaller than the current median is maintained in the max heap
// everything larger than the current median is maintained in a min heap

// if the two heaps are of same size, the median is the avg. of the two root nodes

// if the next number seen is smaller than the current median,
// insert next number into max heap
//   max heap is now bigger
//   current median is now the root of max heap

// as soon as the size diff between the two heaps is > 1 we have to readjust them
// i.e. we get another new neumber, this time smaller than current median
//   insert it into min heap
//   grab new median by popping root of max heap

// insertion -> O(log(n))
// rebalancing -> removing node + insertion -> O(log(n)) + O(log(n)) = O(log(n))
// computing median -> O(1)

// total time complexity: O(log(n)) per number
// space complexity: O(n) -> cannot do better than that since we need to store all n elements
// minHeap = []
// maxHeap = 0
//                                                            INSERT
// forEach new number num:
// decide where to insert it
//   if (num <= median):
//     insert num into maxHeap
//   else:
//     insert num into minHeap
//                                                            /INSERT
//                                                            REBALANCE
// if (size(maxHeap) - size(minHeap) === 2):
//   minHeap.insert(maxHeap.extractRoot())
// elif (size(minHeap) - size(maxHeap) === 2):
//   maxHeap.insert(minHeap.extractRoot())
//                                                            /REBALANCE
//                                                            COMPUTE
// if (size(minHeap) === size(maxHeap)):
//   median = avg of the two roots
// elif (size(minHeap) > size(maxHeap)):
//  median = root of minHeap
// else:
//  median = root of maxHeap
//                                                            /COMPUTE
// return median
