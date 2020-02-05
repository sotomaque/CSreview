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
        - n! = n * (n - 1) * (n - 2) * ... * 2 * 1
        - arise in combinatorix 
            -i.e. arrange the four different letters, (a, b, c, d), in a straight
            line. in how many ways can this be done?
                4! = 4 * 3 * 2 * 1 = 24

            - previously, repetition was not allowed
            - now we will allow repetition:
                    -i.e. number of binary strings of length n = ?
                    -i.e. number of 4 digit passcodes = ?

            - when repetition is allowed, we call the ordering as an arrangment
            - when repetition is not allowed, we call the ordering as a permutation
            
            

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

    
"""

# quizzes
"""
MCQ:

(1) which of the following can be determined in a single scan 
of an array if the numbers are sorted?
    -find a specific number
    -find all duplicates
    -find the median
    -find the mode

(2) You are given an array of unsorted numbers. Which of the 
following quantities can be computed in a single scan of the 
array without needing to sort the numbers? (Assume that beyond 
a few local variables, you cannot use any extra space) 
    -mean
    -range
    -NOT median
    -NOT mode
"""
