
'''
    # approach 1:
        - receive input
            - if there is no Nth maximum value, return max
        - check base case -> ensure n is note greater than the lenght of the array
        - sort array (descending order)
            - .sort() -> implements TimSort => O(nlog(n))
        - return n - 1 element of sorted array
            - must subtract one to account for fact we will want 0th index when n == 1
            - O(1)

    # O(n log(n)) time-complexity
    # O(1) space-complexity -> reverse string in place 

'''
def findNthMaxValue(nums, n):
    # base case
    if n > len(nums) or n <= 1:
        print ('invalid input')
        return max(nums)

    # sorted array
    nums.sort(reverse=True)
    return nums[n - 1]



def test():

    inputArray = [1, 2, 3, 4, 5, 6]
    n = 2

    output = findNthMaxValue(inputArray, n)
    print(output)

test()