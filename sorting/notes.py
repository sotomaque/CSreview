# intro 
"""
why sort?

- searchihng for a value is faster in a sorted array 
- finding duplicates is easier
- matching items in two or more files is possible
- can find median, k smallest, k largest, etc easily
- the truncated top of an immense sorted list is the 
universal UI (presumably in order of revelance to user)

other benefits

- learn how to attack programming problems in general
    e.g. algorithm design stratieis like
        decrease and conquer, divide and conquer, etc.
- sorting provides an excellent illustration of how to analyze
algorithms to analyze their preformance
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

# design strategy 1 - Brute Force
"""

Design Strategy #1:
    - Brute Force
        -algorithm:
            -locate the smallest item and put it in the first place
            -then select the next smallest item, and put it in the second place
                -repeat
            -sorting by repeated selection: "Selection sort"
            -final result grows by one character at a time

    -selection sort pseudocode
    
        function selectionSort(a):
            for i in 1 to n:
                #find the ith smallest element and swap it with a[i]
                min = i
                during a linear scan of a[i:n]:
                    if you find a smaller element than a[min]:
                        update the index of the min element
                swap the min with a[i]

    -instead of scanning the array from left to right, we could have scanned
        the array from righ to left and looked at pairs of adjacent elements.
        - whenever we see the smaller element appears on the right and the 
            larger element appeared on the left, we could have swapped them
        - this is the inspiration for bubble sort
        - minimum element keeps getting swapped until it reaches the first position
        - repeat n iterations until array is sorted

    bubble sort pseudocode:

        repeat n times:
            while scanning the array from right to left:
                if A[i-1] > A[i], swap
            
        or

        function BubbleSort(A):
            for i in 1 to len(a):
                for j in len(A) down to i:
                    if A[j - 1] > A[j]:
                        swap

"""

# design strategy 2 - Decrease and Conquer
"""

Design Strategy # 2:
    -Decrease and Conquer
        -given a computational problem on a dataset of size n, 
        assume you have solved the problem for the dataset of size n - 1,
        -solve the problem of size n using the solution to the problem of 
        size n-1
        -recursive (if top-down) and iterative (if bottom-up)

    -recursive solution strategy (top down)
        -solution to n = solution to n - 1 + extension

    -iterative soltuion strategy (bottom up)
        -solution to 1 takes me to 2
        -solution to 2 takes me to 3
        - ...
        -solution to n - 1 takes me to n

    i.e. [1, 2, 4, 5, 6, 7, 8, 3]
        - n - 1 elements are already sorted
        - how do we incorporate this solution to apply to the last element

        -solution is similar to how we would insert a new card into a hand that
        has already been sorted
            -possible soltution: 
                -start with the n-1th element, keep looking further and futher
                behind until we find an element that is smaller than the value
                of the new card
                    -so that we end up with A[j - 1] <= A[j] <= A[j + 1]
                    where A[j] represents the new card that needs to be inserted
        -this is the inspiration for "insertion sort"

        resursive insertion sort pseudocode
            def insertionsort(A, n): // array A[1...n]
                    if (n <= 1): return;
                    insertsort(A, n - 1);
                    // now insert the nth element into its place
                    j = n - 1
                    while j >= 1 and A[j] > A[j+1]:
                        swap(A[j+1], A[j])
                        j = j - 1
                    return

        -alternative solution
            -copy n to a temp variable,
            -iterate throught the array, from A[n-1] -> A[0] (right to left)
            -so long as the element we are looking at is > the value of the temp variable
                -shift the element we are looking at to the right one
            -when it fails we know we found the spot to insert our temp variable value

        variant insertion sort pseudocode:
            def insertionsort(A, n): // array A[1...n]
                if (n <= 1): return;
                insertionsort(A, n - 1);
                // now insert the nth element into its place
                j = n - 1
                while j >= 1 and A[j] > A[n]:
                    A[j+1] = A[j]
                    j = j - 1
                // once while loop fails, insert nth element into blank spot
                A[j+1] = A[n]
                return

        iterative pseudocode: // bottom up
            def insertionsort(A, n): //array A[1...n]
                if (n <= 1): return;
                for i = 2 to n:
                    ith = A[i]
                    j = i - 1
                    while j >= 1 and A[j] > ith:
                        A[j + 1] = A[j]
                        j = j - 1

                    A[j+1] = ith
                return

            lines 160-166 are exactly the same as the
            recursive version,
            the only difference is we have replaced
            n with the variable ith
            ith comes from i which is instanciated in a
            bottom up way (line 158)

"""


# design strategy 3 - Divide and Conquer
"""

Design Strategy # 3:
    -Divide and Conquer
        -divide the problem into several smaller instances of the problem
        (most often two), generally of the same size
        -solve the smaller instnaces (typically using recursion)
        -combine the solutions to the smaller instances to get the solution to
        the original problem

    - i.e. given an array of size 8 -> [6, 4, 3, 8, 1, 5, 2, 7]
        - divide array into 2 sub arrays
            => [6, 4, 3, 8] , [1, 5, 2, 7]
        - assume subarrays have been sorted
        - magic comes in combining solutions to the subarrays
            => [3, 4, 6, 8] , [1, 2, 5, 7]
        - finalArray = [ ]
        - first element will either be the first element from first subarray,
        or first element from second subarray
        => finalArray = [1]
        => [3, 4, 6, 8] , [2, 5, 7]
        - repeat
        => finalArray = [1, 2]
        => [3, 4, 6, 8] , [5, 7]
        - repeat
        => finalArray = [1, 2, 3]
        => [4, 6, 8] , [5, 7]
        ...
        => finalArray = [1, 2, 3, 4, 5, 6, 7]

        


"""