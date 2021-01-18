"""
    problem statement:
        - given a matrix
            i.e. [[1,1,0,1], [1,1,1,1]]
        - return how many paths exist from top left to top right
        - you can take the path only of a 1 exists in that cell
        - you can only move right or down
            - the above example only has two paths
"""

# time-complexity:
    # same as counting number of unique paths: O(m*n)

# space-complexity:
    # O(m*n)
def numberOfPaths(matrix):
    cache = [[0 for _ in range(len(matrix[0])+1)] for k in range(len(matrix)+1)]

    m = len(matrix)
    n = len(matrix[0])
 
    if matrix[m-1][n-1] == 0 or matrix[0][0] == 0:
        print('there is a 0 at either the start or end index')
        return 0
    
    # traverse the grid from right to left / from bottom to top
    i = m-1
    while i >= 0:
        j = n-1
        while j >= 0:
            if i == m-1 and j == n-1:
                cache[i][j] = 1
            else:
                if matrix[i][j] == 1:
                    cache[i][j] = (cache[i][j+1] + cache[i+1][j]) 
            j-=1
        i-=1

    return cache[0][0]




def test():
    matrix = [[1,1,1], [1,1,1], [1,0,1]]
    result = numberOfPaths(matrix)

    print(result)

test()