'''
    given a 2D array (6x6) with min value == -9,
    find max 'hour glass' where an hourglass is defined
    as a set of elements in the input array in a given shape (described below)

    i.e. 
        -inmput array => [
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5]
        ]

        - hour glass shape => 
            a b c
              d  
            e f g

        - expected output: 
            3 4 5
              4
            3 4 5 
        - sum = 28

'''