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
    - much like the approach for couting a subset, we will use a 2d array
    - here our base cases lie along the 0 col and 0 row
        - there is only one such path to get to the last col in the 0th row, that to take
        all right moves.
            - similarily there is only one path to the last row, 0th column, thats to take
            all down moves.
        - so we will initialize those grids to hold 1's as there is only one way to get there
        - then we will iterate through the remaining grid, and set
            table[row][column] = table[row - 1][column] + table[row][column-1]
        - so we are iterating row by row, from left to right, and a grids value is equal to the
        value above it + the value to the left of it, both of which are alread computed
        - value of a path = sum of the values of all the cells making up that path

    - i.e.
        -------------------------
        |   1->-|---3->-|---1   |
        --------------------|----
        |   1   |   5   |   1   |
        --------------------|----
        |   4   |   2   |   1   |
        -------------------------
        - the path drawn here has a value of 1 + 3 + 1 + 1 + 1 = 7
    - the problem that we want to solve is:
        - among all the different paths the robot could have taken to go from to the top left corner to the bottom right corner,
        which path has the max value
            - we want the value of that max path
            - as well as the path itself

    - one approach would be to derive all paths, then pick the one with the max value
        - problem is there could be an exponential number of paths of M ~ N are roughly of the same order of magnitude

    - optimal substructure property:
        - if my optimal sequence has a particular set of moves from S -> E, it will also be an optimal path from S -> first step between S -> E, and for 
        the second step, etc.
        - with this property, we can build up the solution to the overall problem by cumulatively building up the solution to larger and larger subproblems
        starting with end point, and looking at its left neighbor / top neighbor
            - compare the value of the optimal value of these two, the one with the maximum value contributes to the final cell's optimal path
"""

# Maximum Path Sum
"""
    - we will now transition from looking at counting problems to looking at optimization problems
        - these are problems where we have to max / min some value
        - percisely what DP was designed for originially
    - problem statement:
        - similar to the "count unique paths" grid, consider a situation where the grid contains value
            - that is each cell in the grid has some value (or weight) which can be thought of as the number of 
            points that will be earned if one vists that cell
        - find the path that maximizes the number of points
    - here there a lot of overlapping problems
"""

# Maximum Cost Stair Climb
"""
    - optimization version of the stair climbing question we already saw
    - this will be a minimization problem

    - problem will still have same rules, either one step or two steps allowed
    - however now each step will have an associated cost
    
    - we want to find the cheapest way to go from ground floor to top floor
        - neither the ground nor the top floors have associated costs

    - brute force attempt: enumerate all possible paths, find the min
        - enumerating each possible path will be exponential in size of input because this gives us the fibonaci recurance in n
    
    - input for weights will be provided in an array:
        - i.e. [0, 10, 15, 20, 10, 12, ..., 0]
    
    - decrease and conquer method:
        - focus on very last move that was taken to arrive to top floor
            - either we arrived at it through floor n-1 (single jump) or through floor n-2 (double jump)
    
        - this problem also has the property of an optimal substructure:
            - if we are given a min cost path from s -> d
                - then any prefix of the path must also be a min-cost path from s to the endpoint of that prefix
        
        - total number of subproblems that we have ~ n
    
     - representing each subproblem as a node in a dependancy graph, we see each node depends on the 
        previous two nodes to derive its value
        - its value being the min of the previous two + its own cost
        - f(i) = min(f(i-1), f(i-2)) + costs[i] 
"""

# Coin Change
"""
    - problem statement:
        - you are a cashier instructed to give out change using the fewest possible number of coins
            - all the change you give out is given out strictly in coins
        - given:
            - coins of diff denominations
                i.e. [1, 2, 5] (unlimited supply of each such coin)
            - and a total "amount" of money
                i.e. amount = 11
                => output [5, 5, 1] == 3 coins
        - compute the fewest number of coins that you need to make up that amoung.
        - if there is no valid answer, return -1

    - what type of problem is this?
        - minimization problem (optimization)
        - when you have an optimization problem, you know to think DP

    - brute force approach:
        - try to constuct all possible sequences of coins that add up to amount
        - return the shortest such sequence
        - exhaustive enumeration can lead to exponential time-complexity
   
        - recursive strategy:
            - start from 0, can pick 1, 2, 5
                - from this one i can again pick 1, 2, or 5
                    - repeat.
            - at each step i have 3 choices
            - bad because at a branching factor of three, ~ 3^h nodes

    - greedy strategy: make locally optimal choice
        - first pick a coin of the largest denomination, if it fits into amount, add it to our
        change array, subtract it from amount
            - repeat until it doesnt fit into amount
        - then move down to the next largest coin that does fit into amount  

        - the problem with this approach:
            - say the coins = [1, 5, 7]
                and amount = 10
            - greedy solution would give us change = [7, 1, 1, 1] = 4 coins
            - where as we can certainly do better by simply giving change = [5, 5] = 2 coins    
"""

# Coin Change using DP
"""
    - unlike the previous optimization problems we have seen,
    this one does not have a counting analog we have seen yet

    - come up with a recurrence equation (via decrease and conquer) (lazy manager approach)
        - given an optimal solution (using fewest # of coins)
            - i.e. c1 + c2 + ... + ck = A
        - a decrease and conquer approach will work only if our optimal soluion
        has a optimal substructure property
            - which is true in this case
            - every prefix of an optimal solution must also be optimal
        - given coins = [1, 2, 5]
        - given we have to construct this amount, A, we know the last coin that could lead
        to A could be could be 1, 2, or 5. 
            - if it were 1, we know the second to last amount (ck) added up to a - 1 
            - if it were 2, we know the second to last amount (ck) added up to a - 2
            - if it were 5, we know the second to last amount (ck) added up to a - 5
                - we can then call our "subordinates", assigned the tasks of figuring otu
                the optimal way to get to (a-1), (a-2), and (a-5).
                - all three of them come back with the optimal solution.
                    - say the first subordiante used X coins to come up with their optimal amount
                    - the second subordiante used Y coins to come up with their optimal amount
                    - third subordinate used Z coins to come up with their optimal amount
                        - which of these three options is going to be the prefix to my optimal solution?
                            - min(X, Y, Z)
                            - then we add one more coin to get to A
        - recurrance equtaion:
            - let f(a) = fewest # coins needed to construt amount A
            - if the list of distinct coin denominations given to me:
                coins = [c1, c2, c3, ... ck]
            - call k subordinates:
                (1) f(a-c1)
                (2) f(a-c2)
                ...
                (k) f(a-k)
            - so f(a) = (min(over all k) of (f(a - Ck))) + 1
    
    - identify all different possible subproblems:
        - if we want to construct an amount A,
            we want to go all the way back to 0:
                subproblems: 0, ..., a - 2, a - 1
        - so there are only A + 1 distinct subproblems that are possible in the recursion true
        even through the absolute number of nodes in the tree may be huge

    - identify dependancies
        - represent each subproblem as a vertex in the dependancy graph
        - if one subproblem requires another, there will be a directed graph from requred node to other node
        - we can decide what order to compute the subproblem solutions in once we have the dependancy graph
            - want to go in topological sort order to build up solutions
        
    - identify how we are going to cache subproblem solutions
        - data structure
        - dimensions
        - size etc.

        - here we have A + 1 subproblems and one single variant
        - so we will have a one dimensional cache, of size A + 1

        table = [None] * (A + 1)
        table[i] = the solution to the subproblem of size i (f(i))

        - we will fill in table by topological sort order
            - in this example, from left to right

    - write up DP algo
"""

# Number of Paths in a Matrix
"""
    problem statement:
        - given a matrix
            i.e. [[1,1,0,1], [1,1,1,1]]
        - return how many paths exist from top left to top right
        - you can take the path only of a 1 exists in that cell
        - you can only move right or down
            - the above example only has two paths
"""

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
            - can cut 2, 1 => product = 2 <-!!

        - i.e. length = 4
            - can cut 1, 1, 2 => product = 2
            - can cut 1, 3 => product = 3
            - can cut 2, 2 => product = 4 <-!!

        - i.e. length = 5
            - can cut 1, 1, 1, 1, 1 => product = 1
            - can cut 3, 2 => product = 6 <-!!
            - can cut 2, 2, 1 => product = 4
    
    - recurssive solution:
        - defining the function f(k) that gives us the max product for a rope of length k, 

        - from i = 1, to 1 = n:
            get max(i * (n - 1), f(n-i) * i)

        - symmetry: 
            once i = 1, the remaining is f(4)
            once i = 2, the remaining is f(3)
            once i = 3, the remaining is f(2) (already have)
            once i = 4, the remaining is f(1) (already have)
        
        - however our cache will help us with these overlapping subproblems

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