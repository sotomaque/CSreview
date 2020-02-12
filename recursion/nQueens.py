# N-Queens

# given a chessboard of size n, place n queens such that
# no queen is attacking each other

# queens are defined as attacking each other if theyre located on the
# same column, same row, or along a shared diagonal

# ie.
# input = 4
# output = 
# [
#   [
#       [-, -, Q, -],
#       [Q, -, -, -],
#       [-, -, -, Q],
#       [-, Q, -, -]
#   ], [
#       [-, Q, -, -],
#       [-, -, -, Q],
#       [Q, -, -, -],
#       [-, -, Q, -]
#   ]
# ]

# given n = 4
# first level of recursion, at i = 0, we have 4 choices -> which spot to place Q @
def helper(n, board, i):
    if i == n:
        print(board)
        return
    else:
        for j in range(0, n):
            if not hasConflict(board, i, j):
                # place a queen if there is no conflict 
                board[i] = j
                helper(n, board, i +1)

def nQueens(n):
    board = [0] * n
    helper(n, board, 0)

def test():
    n = 4
    nQueens(n)

test() 