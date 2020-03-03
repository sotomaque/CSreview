# Intro
"""
    - term coined DP by richard bellman
    - DP is recursion without repetition

    - recall in the fib recursion solution, we often found ourselves computing
    the fib of a certain value multiple times
        - i.e for fib(4) we calculate fib(2) twice
"""

# Top-Down Memorization
"""
    - general idea: 
        cahche results of subproblems so we dont have to recompute those subproblems
        multiple times

    - recursive fib solution:
        
        def fib(n):
            if n == 0 or n == 1:
                return n
            else return fib(n-1) + fib(n-2)
        
    - instead of repeatedly calling fib(x) for the same x during the execution
    of fib(n) (where x < n), we can store all of our computed fib values and 
    prevent this redundancy

    - we will use a hashMap 

        memo = {}
        memo[0] = 0
        memo[1] = 1
        def fib(n):
            if n in memo:
                return memo[n]
            else:
                memo[n] = fib(n-1) + fib(n-2)
                return memo[n]

    - the execution stack for this implemenation is a vast improvement to the simple
        recursive implementation, as our execution tree will have roughly n nodes
        (really n nodes each with a right child but we will ignore the constant)
        - no longer an exponential tree

    - time-complexity: O(n)
    - space-complexity: O(n) (worse than recursion (space-time trade-off))

    - as we have seen, Dynamic programming has the potential to transform exponential-time
        algorithms to polynomial time.
"""

# Bottom-up Tabulation
"""
    - if we transform our execution stack to only show each node one time, and then draw
    the edges from our stack in a directed order, from subproblem to root node that called that
    subproblem, we will have drawn a dependancy graph
        - this dependancy graph will be a DAG (directed acyclic graph) for our fib example, as 
        each problem only depends on smaller subproblems until we arrive at the a base case
        - since it is a DAG, it can be sorted using a topological sort
        - we would like to execute out program, in the direction of this topological sort,
        so that we compute first the base cases, then those problems directly dependant on the 
        base cases, etc. 
    - once implemented, this bottom up approach can help us reudce our necessity for linear space allocation
    to constant space allocation
    - bottom up tabulation works by transforming recursive calls to an iterative appraoch (calls to a loop)
"""

# Climbing N Stairs
"""
    - problem statement:
        - a child is trying to climb a staircase. the maximum number of steps he can climb at a time is two.
        that is, he can climb either one step at a time or two steps at a time. 
        - if there are n steps in total, in how many different ways can he climb the staircase?
   
    - i.e. 
        n = 1 -> 1
        n = 2 -> 2
        n = 3 -> 3

    - in general for f(n) = ? 
        - decrease and conquer!
        - assume we have the solution for n - 1, extend it for n
            - for the last step, we have two choice, we can either go from
                f(n-1) => last step (single jump) or
                f(n-2) => last step (double jump)
            - so f(n) = f(n-2) + f(n-1)

    - You are climbing a staircase. It takes n steps to reach to the top (n > 3).
    Each time you can either climb 1 or 2 steps. In how many distinct ways can you
    climb to the top? Pick the appropriate recurrence equation:
        - f(n) = f(n-1) + f(n-2), f(0) = 1, f(1) = 1
        - f(n) = f(n-1) + f(n-2), f(1) = 1, f(2) = 2

    - You are climbing a staircase. It takes n steps to reach to the top (n > 3).
    Each time you can either climb 1, 2 or 3 steps. In how many distinct ways can
    you climb to the top? Pick the appropriate recurrence equation with base cases:
        - f(n) = f(n-1) + f(n-2) + f(n-3), f(0) = 1, f(1) = 1, f(2) = 2

    - How many distinct permutations of the numbers 1 and 2 (in which repetition is allowed) add up to n?
        Assume that n > 2. For example, if n = 4, the permutations are 2-2, 1-1-2, 1-2-1, 2-1-1, 1-1-1-1 => (5)
        if n = 3, the permutations are 2-1, 1-2, 1-1-1 => (3)
        if n = 2, the permutations are 1-1, 2 => (2)
        Suppose f(n) = The number of such permutations. 
        The recurrence equation for f(n):
        - f(n) = f(n-1) + f(n-2)
"""

# Counting Subsets of Size K
"""
    - we have seen before tha N choose K is the number of ways of choosing n out of k elements
        C(n, k) = C(n-1, k) + C(n-1, k-1)

    - recursive version:

        def C(n, k):
            # base case
            if k == 0 or k == n:
                return 1
            # recursive case
            return C(n-1, k) + C(n-1, k-1)

        - time complexity: 2^n
            - exponential in n

    - this implementation will do a lot of repeated work

    - dp version:

        def C(n,k):
            if n == 0 or k == n:
                return 1
            # recursive case
            table = [[None]*(n + 1), [None]*(k + 1)]

            # base case 1
            for row in range(0, n):
                table[row][n] = 1

            # base case 2
            for column in range(0, k):
                table[n][column] = 1

            for row in range(2, n + 1):
                for columns in range(1,  k + 1):
                    table[row][columns] = table[row - 1][column] + table[row - 1][column - 1]

            return table[n][k]

        - time-complexity:
            within the body of the for-loop -> addition -> O(1)
            do that n * k times
            => O(n*k) 
        
        - space-complexity:
            O(n*k)
"""

# Counting Unique Paths on a Grid
"""
    - problem statement:
        - given a 2d grid with m rows and n columns, count the number of unique paths starting at the top-left
        corner, and getting to the bottom-right corner.
        - all moves must either go right or down

    - i.e. m = 2; n = 3
                n
        -------------------------
        |       |       |       |
        |   S --|->-----|-->-   |
     m  ----|-------|-------|----
        |   v   |   v   |   v   |
        |   -->-|--->---|---E   |
        -------------------------
        - here we can see the number of unique paths from (m,n) = (0,0) to  (m-1, n-1) = (1,2) == 3

    - since we can only move right down:
        - we know a right move will increase the column number
        - and a move down will increase the row number my one
    - cumulatively, any unique path will have a path of ((m-1) + (n-1)) == m + n - 2 
        - question is how many such valid paths are there

    - given the sum = m + n - 2, this becomes a queestion of "how many different ways can you choose (n - 1) out of (m + n - 2)"
        those will go to the right; the remaining m - 1 nodes will go down

    - so the total number of ways for our robot to move from the top left to the bottom right
        = C(m + n - 2, n -1)
"""

# Decrease and Conquer approach to Previous Prob (DP soution)
"""

"""

# More Notes
"""
    - if your recurance relationship exhibits
        (1) overlapping subproblems - same sub problem computed multiple times => leads to memowization approach
        (2) optimal substructure -  if what we are computing within the nodes is 'optimal', we will have an optimal substructure
    
    - two ways to DP
        (1) Recursion + Memowization (Top-Down)
        (2) Iterative (Bottom-up)
    - they will both have the same time-complexity
    - space-complexities will likely differ
    - however Iterative is almost always prefered
        - because iterative is faster, scalable (bc of stack-overflow)
        - takes advantage of modern scalar processors
        - takes advantage of your cache
    - 
"""