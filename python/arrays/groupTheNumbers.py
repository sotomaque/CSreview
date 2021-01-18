"""
problem statement:
    You are given an integer array arr, of size n. 
    Group and rearrange them (in-place) into evens and odds 
    in such a way that group of all even integers appears on
    the left side and group of all odd integers appears on
    the right side.

input format:
    There is only one argument: Integer array arr.

output format:
    Return the same integer array, with evens on left side and
    odds on the right side.

There is no need to preserve order within odds or within evens. 

Sample Input: [1, 2, 3, 4]
Sample Output:[4, 2, 1, 3]
"""

# two pointers, one from begining, one from end, iterate until they meet
# O(n) time | O(1) space
def groupTheNumbers(arr):
    # use a left point and a right pointer
    leftPointer = 0
    rightPointer = len(arr) - 1

    # iterate until they meet
    while leftPointer < rightPointer:
        leftElement = arr[leftPointer]
        rightElement = arr[rightPointer]

        # if the left pointer points at an odd number
        if leftElement % 2 == 1:
            # preform a swap
            arr[leftPointer], arr[rightPointer] = arr[rightPointer], arr[leftPointer]
            # decrement the right pointer
            rightPointer -= 1
        # otherwise incremement the left pointer
        else:
            leftPointer += 1

    return arr

# slow and fast pointer approach, iterate until fast exceeds bounds of length of array
# O(n) time | O(1) space
def groupTheNumbers2(arr):
    # point both pointers at the head
    slowPointer = 0 # only increment the slow pointer after preforming a swap
    fastPointer = 0 # incrememnt the fast pointer every iteration
    
    # while the fast pointer is in bounds
    while fastPointer < len(arr):
        # if the fast pointer is pointing to an even element
        if arr[fastPointer] %2 == 0:
            # swap it with the element the slow pointer is pointing to
            arr[fastPointer], arr[slowPointer] = arr[slowPointer], arr[fastPointer]
            slowPointer += 1
        fastPointer += 1

    return arr



def test():
    arr = [1, 2, 2, 2, 3, 4]
    print(groupTheNumbers2(arr))

test()