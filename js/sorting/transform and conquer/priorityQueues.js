/*
    in a standard queue, we have access to the push / pop operations
    a queue also is defined to maintain the FIFO behavior

    a priority queue is queue that accepts a value (could be a primitive type or an obj) as well
    as a priority (the basis for comparing the elements within the P.Q.)
        a PQ supports:
            (1) insert 
            (2) extract-min / max (depending on what we desire)

    when passing an int to a P.Q. we can assume the magnitude is also the priority

    i.e.
        - Sort [6, 8, 2, 4, 1] using a Max-Priority Queue
        - put these 5 elements into max priroity queue
        - do 5 remove max operations placing removed elements into the
        sorted array from right to left

        pq.removeMax()
        result = [x, x, x, x, 8]
        pq.removeMax()
        result = [x, x, x, 6, 8]
        ...
        result = [x, 2, 4, 6, 8]
        pq.removeMax()
        result = [1, 2, 4, 6, 8]
    ----------------------------------------
                TIME COMPLEXITY
      cost of a remove operation: O(log(n))
    x
      n removes: O(n)
    ----------------------------------------
      total time-complexity: O(nLog(n))
    ----------------------------------------


    Data Structure:
        - a PQ can be implemented as:

            - Unsorted Array -> useless thats the same as the original input
                - insert -> O(1)
                - extract-max -> O(n)

            - Sorted Array
                - insert -> O(n)
                - extract-max -> O(1)

            - Unsorted List 
                - insert -> O(1)
                - extract-max -> O(n)

            - Sorted List
                - insert -> O(1)
                - extract-max -> O(n)

        - none of these four implementations give us O(log(n)) for insert / extract

        - this is where the binary Heap comes in

    
        MAX vs MIN Heap

            - Max heap -> max value on top, all children have a priority less than or equal to parent

            - Min heap -> min value on top, all childreen have a priority greater than or equal to parent
        
*/