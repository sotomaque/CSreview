
# time-complexity:
    # same as counting number of unique paths: O(m*n)

# space-complexity:
    # O(m*n)
def maxPath(grid):
    m = len(grid)
    n = len(grid[0])

    # initialize 2d array
    table = [[0 for _ in range(n)] for _ in range(m)]

    # base case 0:
    table[0][0] = grid[0][0]

    # base case 1: all elements in row 0 == value of its neighbor to its left + its own value
    for column in range(1, n):
        table[0][column] = table[0][column - 1] + grid[0][column]
    
    # base case 2: all elements in column 0 == value of its neighbor above it + its own value
    for row in range(1, m):
        table[row][0] = table[row - 1][0] + grid[row][0]
    
    # traverese the rest of the grid from left to right
    for row in range(1, m):
        for column in range(1, n):
            table[row][column] = max(table[row - 1][column], table[row][column - 1]) + grid[row][column]
    
    return table[m-1][n-1]

def test():
    grid = [
        [1, 3, 1, 4, 3, 2],
        [2, 1, 5, 6, 3, 4],
        [1, 9, 2, 2, 2, 1],
        [2, 1, 5, 6, 3, 4],
        [1, 2, 3, 4, 3, 2]
    ]

    print(maxPath(grid))

    grid2 = [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ]
    print(maxPath(grid2))

test()