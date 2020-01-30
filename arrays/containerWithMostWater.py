"""
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
Find two lines, which together with x-axis forms a container, such that the container contains the most water.
"""
#O(n^2) time complexity, 
def maxAreaBruteForce(height):
    current_max = -1
    for i in range(0, len(height)):
        for j in range(i, len(height)):
            current_min = min(height[i], height[j])
            current_area = current_min * (j - i)
            current_max = max(current_max, current_area)
    return current_max

# O(n) -> only goes through array one time, setting two pointers, 
# one at the begining, one at the end of the array, 
# then we calculate the area produced, and shift the smaller of the 
# two bounds
def maxArea(height):
    current_max = -1
    i = 0
    j = len(height) - 1
    while (i < j):
        current_min = min(height[i], height[j])
        current_area = current_min * (j - i)
        current_max = max(current_max, current_area)
        if height[i] < height[j]:
            i += 1
        else: 
            j -= 1
    return current_max


def test():
    array = [1,8,6,2,5,4,8,3,7]
    result = maxArea(array)
    print(result)

test()