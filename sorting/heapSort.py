import heapq

# time-complexity: O(n Log(n))
# stability: NOT STABLE

# minheap implementation
def heapSort(nums):
    heapq.heapify(nums)
    result = []
    while len(nums) != 0:
        result.append(heapq.heappop(nums))
    return result

testArray = [4,54,26,93,17,77,31,44,55,20]
result = heapSort(testArray)
print(result)

