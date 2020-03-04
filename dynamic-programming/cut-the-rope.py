# Cut the Rope
"""
    problem statement:
        - given a rope of some length
            - cut the rope in such a way that the product of the length of all the pieces
            is the maximum possible product
            - there should be at least one cut
            - cuts must be of integer lengths
            - return the max product
        
        - i.e. length = 2
            - only one way to cut it, 1, 1 product = 1

        - i.e. length = 3
            - can cut 1, 1, 1 => product = 1
            - can cut 2, 1 => product = 2

        - i.e. length = 4
            - can cut 1, 1, 2 => product = 2
            - can cut 1, 3 => product = 3
            - can cut 2, 2 => product = 4

        - i.e. length = 5
            - can cut 1, 1, 1, 1, 1 => product = 1
            - can cut 3, 2 => product = 6
            - can cut 2, 2, 1 => product = 4

"""

def cutRopeOfLength(n):
    cache = [None]*n
    cache[0] = cache[1] = 0

    # build the cache table in bottom up manner
    for i in range(1, n):
        max_value = 0
        for j in range(1, i//2):
            
            max_value = max(max_value, (i-j) * j, j*cache[i-j])
        cache[i] = max_value
    
    # return last entry
    return cache[n]

def test():
    length = 5
    print(cutRopeOfLength(length))


test()