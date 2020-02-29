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


def test():
    print(C(50, 7))


test()