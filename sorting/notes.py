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


    Hybrid algorithms 
    i.e. TimSort
        -combines merge-sort and insertion-sort for worst-case O(n logn) and
        best-case O(n) time
            -python standard sorting algorithm since Py v.2.3
            -switch to insertion sort when array is almost sorted

    - in merge sort, we divided the arrays based on a trivial notion, position
    this lead to efficient division however it left the real work to the combination phase
    - meaning the computationally expensive part was taking the sorted subarrays and combining
    them 
    - a work around could be to pick a non trivial parameter based off which we will divide
    sub arrays
        - such as value
    - we then shift the computationally expensive part to the division as opposed to the 
    combination phase of the algorithm

    - this divide and conquer based approach is called QuickSort

    QuickSort(A) psudocode:
        if len(A) <= 1:
            return
        pick some x = A[i] at random (call this the pivot)
        partition the rest of A into:
            L (less than x) and
            R (greater than x)
        replace A with [L, x, R] (re arrange A in this order)
        QuickSort(L)
        QuickSort(R)

    how do you pick the pivot?
        - you could pick a random index,
        - you could pick the first, last, middle index

    -What is the running time of QuickSort on a sorted array? Assume that the first
    element is always chosen as the pivot. 
        - since array is sorted, we will have a division where the element we pick
        as the pivot is already in its place
        - meaning we will thus have the worst case time compelexity -> O(n^2)
        - same is true if the array is reverse sorted (still picking the first element
        as the pivot)
        - same is true on an array if all the elements are equal and we pick the pivot
        at random
    
    -If the input array for Quicksort is expected to have a lot of duplicate elements, 
    it is better to do two-way partitioning instead of three-way partitioning. 
        - false
            - three way partitioning -> O(n)
            - two way partitioning -> O(n^2)

    -MergeSort runs in O(n Log(n)) for the best, worst, and average cases
    -QuickSort runsi in O(n Log(n)) for the best and average case, however in the wrost case
        runs in O(n^2) time
    -Does this mean merge sort is better?
        -Must consider the fact QuickSort is an in-place algorithm
        -both are recursive algorithm, meaning they do use additional call stack space

    -what is stability in terms of sorting?
        -irl a record will have multiple fields, i.e. name, id, address, grade, etc.
        -you will often sort records across multiple fiels
            -i.e. first sort records by name alphabetically,
                then sort by section number
                -however there are often multiple records with the same section number
                -after the second sorting, the alphabetical sorting might not hold
                for the records with similar section numbers
        - a sorting algorithm that preserves the original relative ordering, is called a stable
        sorting algorithm
        -   selection sort -> NOT STABLE
        -   bubble sort -> STABLE
        -   insertion sort -> STABLE (depending on implementation) ( < vs <= )
        -   merge sort -> STABLE (depending on implementation) ( < vs <= )
        -   quick sort -> NOT STABLE (swap during partition have the tendancy to throw elements 
        out of relative order)

        -java -> primitive types -> quicksort 
            -> objects (with possible multiple keys) -> mergesort

        -python -> timsort is the standard

        -C++ -> default uses quicksort, if you want stabilty you have to call stable_sort()


"""


# design strategy 4 - Transform and Conquer
"""

Design Strategy # 4: 
    -Transform and Conquer
    
    - so far we have assumed input is given to us in an array, and works with 
    that one data structure to achieve a sorted arraay
    - this design strategy will look at transforming the input to alternative
    data structures to achieve the desired result

    - want to represent the input as an Abstract Data Type (ADT)
        - think of ADT as a black box that tells us, (1) what kind of data it is,
        (2) the operations that will be preformed on the data
            - description is calle the interface, it is what the user of the ADT will see,
            not how it would be implemented under the hood.
            - there could be different under the hood implementations of the same ADT
                - i.e. a stack is an ADT, two operations, push, pop, however there are different
                implementations of stacks (i.e. linked lists or dynamic arrays)
    
    - we desire a black box interface that allows us to (1) insert and (2) extract-minimum,
    very efficiently
        - called a priority queue
            - unlike a regular queue (FIFO) order that it comes out is determined by the 
            priority value (in this case min value)
            - in general the data itself can be assumed to be a simple int, or it  could be any 
            type of object with a well defined comparsion operator
    
    - two kinds of priority queues:
        -min priority queue (lower the value the more important aka higher priority)
        -max priority queue (higher the value, higher the priority)

    - priority queues are not just useful for sorting
        -i.e. determining what order to serve patients at an emergency room
            - prioritize based on severity of symptoms
                - priorities are dynamic and can change
        -i.e. a printer might have a bunch of printing jobs, can order these 
            with a priority queue
        -i.e. scheduler for an OS 
    
    - how the ADT is implemented under the hood:
        -a Priority Queue ADT can be implemented as a:
            - Unsorted Array
                -insertion -> O(1)
                -extraction -> O(n)
            - Sorted Array
                -insertion -> O(n)
                -extration -> O(1)
            - Unsorted List
                -insertion -> O(1)
                -extration -> O(n)
            - Sorted List
                -insertion -> O(n)
                -extration -> O(1)
            
            better way: want insert / extract in log(n) so that n operations take O(n Log(n)) time
            - a complete binary tree with n elements is log(n)
                - since the only element directly accesible for a binary tree is the root, 
                it makes sense to sowmhow have the item with the highest priority as the root
            - a binary heap is the most popular data structure that can do this
                - structural property: complete binary tree
                - heap property: priotiy of any node >= priority of its children
            -terminology: heapify up -> same as bubbling node value up to maintain heap property
            
            -insert -> ~ log(n)

            -increase/decrease key is very similar to an insert execpt an insert starts from the very bottom
                and an increase key can start with a random node 
                -> also O(log n)

            -extract(min/max) -> grab the root node, erase the value for a variable, replace variable
            with right most ground level node, ensure the heap property is preserved
                -if heap property is violated for both children of a node, we have to check which
                of the two children are bigger, and bring that one up as a parent
                -time complexity is limited by the height of the tree 
                -> log(n) -> O(log n)

            - build heap procedure manages to build heap in O(n) as opposed to O(n Log(n)) time
                - traverse tree from right to left
                    - whenever we reach a non leaf node invoke heapify onto it ensure everything beneath that node
                    obeys the heap property
                -> O(n)
            - so far, time-complexity: insert t.c. + extract t.c. + build t.c. => O(log n) + O(log n) + O(n)

            - if we used this heap as our ADT, we would still have to do n extractions, therefore
                the total time complexity of heapsort = the time complexity of heap + the time compelexity of n extractions,
                = O(nlog n) + O(n) = O(n Log(n))
    
    - heapsort -> Yes
    - stable -> No, heapify distrubs relative ordering of like-valued nodes


"""
