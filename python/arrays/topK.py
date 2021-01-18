"""
Top K

you are given an array of integers, arr, of size n, which is analogous to a contiuous
stream of integers input. your task is to find K largest elements from a given stream
of numbers. By definition, we don't know the size of the stream input. 

Hence produce K largest elements we've seen so far. For repeated numbers, return them
only once

i.e.
input -> arr = [1,5,4,4,2]; K = 2
output -> [4, 5]

i.e.
input -> arr = [1,5,1,5,1]; K = 3
output -> [5, 1]
"""
# ideas: 

#   if next max is already in results list, incrememnt "non-distinct-max" counter
#   pop K + non-distinct-max nodes

# approach 2:
#   use a min heap,
#   add all the elements from arr to the heap
#   while heap size > k:
#       pop elements
#   finally, we will have a heap with the k remaining largest elements
#   pop and add to results array
#   reverse order

#   how would this handle duplicates? it should only append unique values to 'results' array
#   
from heapq import heappush, heappop

"""
    time-complexity: 
        - n inserts
            - each costs O(n log n)
        - n - k deletes
            - each costs O(n log n)
        ~ O(n log n)
"""
def topK(arr, k):
    if not arr: return []

    heap = []
    heap_set = set() # use a set to avoid duplicates

    #   add all the elements from arr to the heap
    for num in arr:
        # if this number is already in out set, skip
        if num in heap_set: 
            continue
        # else push k elements total into our heap and heap_set
        if len(heap) < k:
            heappush(heap, num) 
            heap_set.add(num)
        else:
            # if the number we are looking at is greater that the current head() -> greater than current min
            if num > heap[0]:
                out = heappop(heap)
                heap_set.remove(out)
                heappush(heap, num)
                heap_set.add(num)

    return heap
    
    
def test():
    arr = [1,5,6, 4, 3, 7, 8, 11, 10, 0, 4, 2, 5]
    k = 2

    print(topK(arr, k))


test()