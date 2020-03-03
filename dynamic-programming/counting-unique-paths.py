#Polynomial Time DP Implementation
def C(n,k):
    if n == 0 or k == n:
        return 1

    # initialize 2d array
    table = [[0 for _ in range(k + 1)] for _ in range(n + 1)]

    # base case 1 (all elements in column 0 == 1)
    for row in range(0, n + 1):
        table[row][0] = 1

    # base case 2 (all elementes across the diagonal == 1)
    for column in range(0, k + 1):
        table[column][column] = 1

    # pascal triangle
    for row in range(2, n + 1):
        for column in range(1,  min(row, k + 1)):
            table[row][column] = table[row - 1][column] + table[row - 1][column - 1]

    return table[n][k]


def countUniquePaths(m, n):
    return C(m + n - 2, n -1)


# time-complexity: O(M*N)
# space-complexity: O(M*N)
    # can futher optimize space by discarding values we dont need
    # i.e. wew only need the values of two rows at a time
    # that would bring down our SC to O(n)
    # if it turned out that M was >> than N this would be good
        # however if the N >> M we can choose to fill in our table an alternate way
        # instead of going row by row, we can go column by column
def countUniquePaths_DP(m, n):
    # initialize 2d array
    table = [[0 for _ in range(n)] for _ in range(m)]

    # base case 1: all elements in column 0 == 1
    for row in range(0, m):
        table[row][0]= 1

    # base case 2: all elements in row 0 == 1
    for column in range(0, n):
        table[0][column] = 1

    # systematicallly traverese the rest of the grid
    for row in range(1, m):
        for column in range (1, n):
            # compute and store table[row][col] which depends on left / above spots 
            # = table[row-1][column] + table[row][column - 1]
            table[row][column] = table[row-1][column] + table[row][column - 1]

    return table[m - 1][n - 1]

def test():
    m = 5
    n = 5
    print(countUniquePaths_DP(m, n))
    # print(countUniquePaths(m, n))


test()
