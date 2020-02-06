# intro 
"""
    Recursion

    - when we learn a programming feature, we normally have a
    - real life analogues / point of refrence to compare it to

    - i.e. for, while loops, = perform a tast repeatedly (iteration)
    - i.e. if-then-else = make decisions based on some condtion
    - i.e. top down design or stepwise refinements via functinos = 
        subdivide an overall high-level probelm into a set of lower-level
        steps 
            i.e. bake a cake: {get cookbook, get ingredients, follow instructions, etc.}
            additionally these tasks themselves can be broked into smaller, simpler tasks
    
    - however, recursion is different from the aformentioned programming features

    - recursion = solve large probem by reducing them to smaller problems of the same form
        - reduce a large problem to one or more sub-problems that are
            (1) identical in structure to the original problem
            (2) somewhat simpler to solve
        - then use the same decomposition technique to further divide the subproblems
        until they become trival
        - we then reassemble the solved componentes to obtain the complete solution 
        to the original problem
    
    - a crude real-life counterpart to recursion
        -lazy manager pseudocode:

            function raiseMoney(int n):
                if n <= 100:
                    collect the money from a single doner
                else:
                    find 10 volunteers
                    get each of them to collect (n / 10) dollars 
                        # this has the same form of the original problem
                        # the only diff is n is smaller than the original n
                    combine the money raised by the volunteers

        - same pseudocode with recursive call:

            function raiseMoney(int n):
                if n <= 100:
                    collect the money from a single doner
                else:
                    find 10 volunteers
                    for each volunteer: call raiseMoney(n/10)
                    combine the money raised by the volunteers

        - psudocode for general recursive solution:

            if (test for a simple condition):
                compute a simple solution without recursion
            else:
                divide and conquer or decrease and conquer
                break the problem into sub-problmes of teh same form
                solve each of these sub problems by calling this function recursively
                reassemble the subproblem solutions into a solution for the whole

"""

# Recursive Mathematical Functions
"""
    - Factorials:
        - definition:
            n! = n * (n - 1) * (n - 2) * ... * 2 * 1
        - arise in combinatorix 
            -i.e. arrange the four different letters, (a, b, c, d), in a straight
            line. in how many ways can this be done?
                4! = 4 * 3 * 2 * 1 = 24

            - previously, repetition was not allowed
            - now we will allow repetition:
                    -i.e. number of binary strings of length n = ?
                    -i.e. number of 4 digit passcodes = ? = 10^4 (10 options for each digit, 4 times)

            - when repetition is allowed, we call the ordering as an arrangment
            - when repetition is not allowed, we call the ordering as a permutation
        
        - pseudocode for factorial -> decrease-and-conquer strategy:

            def fact(n):
                if n == 0:
                    return 1
                else:
                    # chip away at the problem by reducing it to size n - 1
                    # ask a worker clone to solve the smaller problem
                    # construct the solution to the overall problem using that
                    return n * fact(n - 1)
            
    - Rule of Sum:
        - if an action can be perfomred by choosing one of A different options,
        OR one of B different options, then that choice can be made in 
        A + B different ways.
            -i.e. I have 4 short-sleeved shirts and 6 long-sleeved shirts
                  I can chose a shirt in 10 ways
        
    - Rule of Product:
        - if an action can be performed by choosing one of A different options
        FOLLOWED BY one of B different options, then it can be perfomred in 
        A x B ways
            -i.e. 10 shirts, 8 pants -> 80 ways

    - Power Function:
        - suppose we want to compute N^k
            - defined as n * n * n * ... * n, k-times
            - make a sub-problem of size k-1
                - when we get that answer, multiply that result by n
                - if k = 0, we know we can return 1 (decrease-and-conquer)

        - pseudocode:

            int RaiseIntToPower(int n, int k):
                if k == 0: 
                    return 1
                else:
                    return n * RaiseIntToPower(n, k - 1)
            
            - time-complexity: O(k)

        - iterative pseudocode:

             int RaiseIntToPower(int n, int k):
                result = 1
                for i in range(1, k):
                    result *= i
                return result
        
            - time-complexity: O(k) howeverunlike the recursive implementation,
                the iterative solution does not push recursive calls onto the 
                stack

        - in general, when we do a decrease and conquer implementation, 
            there exists a bottom up iterative alternative as well
        
    - Subsets of a Set:
        - given a set of size n, how many subsets are there?
            -i.e. 
                given n = 1 -> {a} -> {a}, {}, therefore 
                    output => 2
                given n = 2 ->  {a, b} -> {a}, {b}, {a, b}, {}, therefore 
                    output => 4
                given n = 3 ->  {a, b, c} -> {a}, {b}, {c}, {a, b}, {a, c}, {b, c}, {a, b, c}, {}, therefore 
                    output => 8
                
                in general output = 2^n

        - pseudocode:

            def subsets(n):
                if n == 0:
                    return 1
                else:
                    return 2 * subsets(n - 1)

            # time-complexity: O(n) -> linear time 

            alternative:
                def subsets(n):
                    if n == 0:
                        return 1
                    else:
                        return subsets(n - 1) + subsets(n - 1)
                        # the above line makes two recursive calls where as the 
                        # original implementation only made one recursive call

                # time-complexity: O(2^n) -> way worse! -> exponential time 
        
    - there is anther way to implement decrease and conquer,
        instead of going from n -> n - 1
        we can go from n -> n / 2
        - as is the case with binary search
        - in other words, we will decrease our problem by a constant factor
        instead of decreasing by 1

        - so for the power function, instead of going from 2^20 -> 2^19,
            we can go from 2^20 -> 2^10 and then multiply that result with itself
            
        - the advantage is we would cut down the chain of recursive calls by
            roughly n/2
        
        - so the time-complexity goes from O(n) -> O(log n)

        - this is only possible if when we split the problem in half, both halfs are
            identical. 
            - in the case of n!, if we try to split the prob in half, the two halfs
            are not identitical, so we cannot take advantage of splitting the problem 
            by a constant factor like we could for taking a number and raising it to 
            a power
        
"""

# Computing Time-Complexity
"""
    - in general, you dont want to trace the chain of execution for every
    problem. Focus instead on a single level of recursion.

    - assume that any recursive call automatically gets the right answer as long
    as the arguments are simpler than the original arguments.

    - if you really want a formal proof, the combination of a base case and an 
    analysis of the move from n-1 -> n can both be used to build up a proof
    by mathematical induction.
    
"""

# quizzes
"""
MCQ:

    (1) What will happen if your recursive implementation does not have a base case?
        - the decomposition process will keep making more and more calls, giving rise to the
        recursive analogue of the infinite loop (non-terminating recursion).

    (2) What will happen if your recursive implementation does not make the subproblem
            simpler (of a slightly smaller size)?
        - the decomposition process will keep making more and more calls, giving rise to the 
        recursive analogue of the infinite loop (non-terminating recursion).

    (3) if fact(0) was defined to be 0, instead of 1, then calling fact(n) on any
        positive integer n will return:
        - 0

    (4) The number of ways of seating 6 students in a row of 6 chairs is:
        - 6! = 720

    (5) The number of ways of seating 6 students in a row of 4 chairs is: 
        (only one student can sit on a single chair, so not everyone will find
        a chair to sit on) 
        - 360
            - how many differnet ways can i pick 4 students out of 6?
                - 6 choose 4 = 15
            - out of the 4 picked, how many different ways can i arrange them?
                - 4! = 24
            - therefore final answer is 15 * 24 = 360

    (6) A traveling salesman needs to travel to n cities to sell his products. 
        He wants to consider all possible routes to pick the shortest one. 
        How many different routes does he need to evaluate? 
        - n!

    (7) The maximum number of activation records on the call stack in the execution 
        of the recursive code for fact(10) is: (assume that the first activation 
        record is for n=10)
        - 11

    (8) X^Y can be computed efficiently in time:
        -O(log y) -> when splitting the problem in half
        -O(y) -> if we are not splitting the problem in half

    (9) The recurrence equation for the time complexity of binary search is:
        - T(n) = T(n / 2) + 1
"""

# fibonacci sequence
"""
    - origin: 
        - Liber Abaci, chapter 12
        - "a man put one pair of newborn rabbits into a certain place entirely
            surrounded by a wall. how many pairs of rabbits can be produced from that pair
            in a year, if the nature of these rabbits is such that every month, each pair
            bears a new pair which from the second month on become productive?
            (assume no rabbits die) 
        - fibonacci sequence
        - the number of adults at the end of month i == the population at the 
            month i - 1 
            - the adults from the previous month continue to be adults the next month
            and the children grow to be adults
            - the num of new born rabbits in month i == the number of adults in the
            previous month
                - however recallthe number of adults in a given month is just the 
                population 2 months before
            - therefore the pop at month i = pop month(i - 1) + pop month (i - 2)
        - fib(N) = fib(N - 1) + fib(N -2)
            - since it requires fin(N - 1) and fib(N - 2) we need two base cases
            - assume fib(0) = 0 and fib(1) = 1
    
    - psudeocode:
        def fib(n):
            if n == 0 or n == 1:
                return n
            else:
                return fib(n - 1) + fib(n - 2)
        
        -thie issue is this will make a call to compute fib(i) several times
        in trying to calculate fib(n)
            -i.e. fib(4) = fib(3) + fib(2)
                --------------------
                left-side of the tree
                --------------------
                    fib(3) = fib(2) + fib(1) = fib(2) + 1
                    fib(2) = fib(1) + fib(0) = 1 + 0 = 1
                ---------------------
                right side of the tree
                ----------------------
                    fib(2) = fib(1) + fib(0) = 1 + 0 = 1

            - notice we computed fib of 2 multiple times

    - the fib sequence can be abstracted and reasoned about as a general additive
    sequence

        - given an arbitrary additive sequence:
            - i.e. a, 3, 4, 8, 13, 21

        - psuedocode:
            def addSeq(n, b1, b2):
                if n == 0:
                    return b1
                else:
                    return addSeq(n - 1, b2, b1 + b2)
            
            fib(n) = addSeq(n, 0, 1)
        
        - time-complexity: 
            O(n)
                
"""

# combinations
"""
    - recall:
        - previously we have seen how to count ordered arrangments
            - aka permutations
            - there were two different types:
                - repetition allowed
                - repetition not allowed
    - combinations -> number of ways to choose k objects out of n, where
        repetition is not allowed and order is also not important
        - in other words, {a, b, c} is identical to {b, a, c}, etc.
        - C(n, n) = ? = 1 -> original set itself
        - C(n, 0) = ? = 1 -> empty set
        - C(n, 1) = ? = n -> each of the n elements as individual sets
        - C(n, k) === C(n, n-k) -> because when we pick k out of n, we can either pick
            the k that will be in the set, or pick the n - k that wont be in the set
        
    - C(n, k) = n Choose k = (n! / (k!(n-k)!))
        - read as: the number of subsets of size k that can be formed out of a set 
            of size n

    - def C(n, k):
        return factorial(n) / (factorial(k) * factorial(n - k))

    - if you want to directly calculate this, without relying no the factorial function
        we can use a decrease and conquer strategy
        - for each student, we can decide whether that element will go into the set or not
            - two options
            - if you chose to include it in the set, we have n - 1 elements remaining, out of 
                which we need to pick k - 1 elments
            - if you chose to not include it in the set, we have n - 1 elements remaining, out of
                which we have to pick k elements
            - once these two sub-answers are solved, we will add their results and return it as the
                final result
        - recurrance equation:
            - C(N,K):
                if n <= 1 or k == 0 or k == n:
                    return 1
                else:
                    reutrn C(N - 1, K) + C(N - 1, K - 1)
        
"""