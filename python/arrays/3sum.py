"""
Given an array, nums, of n integers, determine if there are 
three elements, a, b, c, such that a + b + c = 0? Find all 
unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

Example: Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
"""

def threeSum(array):
    # sort array
    # use pointers
    array.sort()
    length = len(array)
    results = []

    for i in range(0, length - 2):
        if i > 0 and array[i] == array[i-1]:
            print('skipping duplicates ', array[i])
            continue
        l = i + 1
        r = length - 1
        while l < r:
            current_sum = array[i] + array[l] + array[r]
            if current_sum < 0:
                l += 1
            elif current_sum > 0:
                r -= 1
            else:
                results.append([array[i], array[l], array[r]])
                while l < r and array[l] == array[l+1]:
                    l += 1
                while l < r and array[r] == array[r-1]:
                    r -= 1
                l += 1
                r -= 1
    return results

                

def test():
    array = [10, 3, -4, -4, -4, 1, 1, 1, 1, -6, 9, 0, 0, 0]
    result = threeSum(array)
    print(result)


test()


