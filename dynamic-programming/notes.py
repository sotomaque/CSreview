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
"""