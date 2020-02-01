"""
design a class to ffind the Kth largest element in a stream.
note that it is the kth largest element in the sorted order
not thee Kth distinct element.

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

class KthLargestStream(self, k, nums):

