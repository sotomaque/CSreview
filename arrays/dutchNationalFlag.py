"""
Dutch National Flag

Problem Statement:
You are given n balls. Each of these balls are of one the three colors: Red, Green and Blue. 
They are arranged randomly in a line. Your task is to rearrange them such that all balls of 
the same color are together and their collective color groups are in this order: 
Red balls first, Green balls next and Blue balls last.


i.e.

Input Format:
    If balls = [G, B, G, G, R, B, R, G]

Output Format:
    [R, R, G, G, G, G, B, B]

constraint:
    solve it in one pass! O(n) time

"""

"""
    since we have three values [1, 2, 3] we will pick 2 to be the pivot in three way partitioning

    pivot = 2
    initialize three pointers, low = 0, cur = 0, high = len(a) - 1
    
    while cur <= high:
        if a[cur] == pivot:
            cur += 1
        if a[cur] < pivot:
            swap(a[cur], a[low])
            cur += 1
            low += 1
        if a[cur] > pivot:
            swap(a[cur], a[high])
            high -= 1
"""
def solution(givenArray):
    
    pivot = 2
    low = 0
    cur = 0
    high = len(givenArray) - 1

    while cur < high:

        if givenArray[cur] == pivot:
            cur += 1
        if givenArray[cur] < pivot:
            givenArray[cur], givenArray[low] = givenArray[low], givenArray[cur]
            cur += 1
            low += 1
        if givenArray[cur] > pivot:
            givenArray[cur], givenArray[high] = givenArray[high], givenArray[cur]
            high -= 1

    return givenArray


def test():
    balls = [1, 1, 2, 2, 1, 3, 3]
    print(solution(balls))

test()