/*
    -------------------------------------------------------------------------------------------------------------------------------
                                                    Algorithm Overview                                                 
    -------------------------------------------------------------------------------------------------------------------------------
                           Worst Case             Stability          Average Case        In Place?          Space Complexity       
    -------------------------------------------------------------------------------------------------------------------------------
     Selection Sort         O(n^2)               NOT STABLE           O(n^2)               YES                 O(1)
     Bubble Sort            O(n^2)               STABLE               O(n^2)               YES                 O(1)
     Insertion Sort         O(n^2)               STABLE               O(n^2)               YES                 O(n)****
     Merge Sort             O(nlog(n))           STABLE               O(nlog(n))           NO                  O(n) + O(log(n))***
     QuickSort              O(n^2)               NOT STABLE           O(nlog(n))           YES                 O(log(n))***
     HeapSort               O(nlog(n))           NOT STABLE           O(nlog(n))           YES                 O(1)
     CountingSort           O(n+k)*              Possible**           O(n+k)*              NO                  O(k)*
    -------------------------------------------------------------------------------------------------------------------------------
        * let k be the range of the values in the array (i.e. max - min)

        ** Possible if implemented with a data structure that abides by FIFO

        *** due to recursive nature, space-complexity proportional to max height of 
        recursion stack in heap which in this case = log(n)

        **** due to recursive nature, space-complexity proportional to max height of 
        recursion stack in heap which in this case = n - 1 ~ n
    --------------------------------------------------------------------------------------------------------------------------------

    is there a lowerbound in the worst case complexity of sorting algorithms?
        - in other words is there anyway to beat O(nlog(n)) or is it theoretically as good as we can expect?

    any comparison based sorting algorithm can be represented with a decision tree where the root node
    represents the first comparision quesion, i.e. is a < b for an input array [a, b, c], and the leafs
    represent every possible sorted outcome, i.e. [ a < b < c ], [ a < c < b ] ...

    using this decision tree representation of an algorithm, we see there are n! child leaf nodes,
        which makes sense if we think about the fact there are n! different ways to un-sort an array
    
    we also know the worst-case time-complexity by an algorithm is governed by the longest path in a tree
        aka the height of the tree

    so to derive a lower bound on a sorting algorithms complexity, we are trying to derive the answer to 
        "what is the shallowest height a binary tree with n! leaf nodes can be"
    - turns out be some constant * nlog(n)
    - so the theoretical lowerbound on comparision based sorting algorithms cannot beat nlog(n)
*/