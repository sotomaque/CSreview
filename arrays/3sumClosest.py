"""
Given an array nums of n integers and an integer target, 
find three integers in nums such that the sum is closest to target. 
Return the sum of the three integers. You may assume that each input
would have exactly one solution.

Example: Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
"""
def threeSumClosest(nums, target):
    nums.sort()
    res = sum(nums[:3])

    for i in range(0, len(nums) - 2):
        l = i + 1
        r = len(nums) - 1

        while l < r:
            current_sum = nums[i] + nums[l] + nums[r]
            if abs(current_sum - target) < abs(res - target):
                res = current_sum
            if current_sum < target:
                l += 1
            if current_sum > target:
                r -= 1
    return res

def test():
    array = [-1, 2, 1, -4]
    target = 1
    results = threeSumClosest(array, target)
    print(results)

test()