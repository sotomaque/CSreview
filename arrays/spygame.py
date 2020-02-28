"""
write a function that takes in a list of integers 
and returns True if it contains 007 in that order
"""

def spygame(nums):
    code = [0, 0, 7, 'x']
    for num in nums:
        if num == code[0]:
            code.pop(0)
    return len(code) == 1

def test():
    a = [1, 2, 4, 0, 0, 7, 5]
    b = [1, 0, 2, 4, 0, 5, 7]
    c = [1, 7, 2, 0, 4, 5, 0]
    print(spygame(a))
    print(spygame(b))
    print(spygame(c))

test()