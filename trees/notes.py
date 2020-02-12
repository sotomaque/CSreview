# intro
"""
    trees 1: Dictionaries:
        - think of a dictionary as a collection of n (words, meaning) pairs
            - called (key, value) pairs
        - given a key, dictionaries allow us to search for its value
        - if the search is unsucessful, that means the key is not found
        - just like we defined a priority queue as an abstract data type
            - we can define a Dictionary ADT that supports:
                - Search(Key)
        - if our dictionary is static, that means new keys wont be added / deleted
            - meaning our only operation is the Search option
        - more often the ADT will be dynamic,
            - meaning we will also have to support the addition of new pairs and deletion of pairs
                - Insert(Key: Pair)
                - Delet(Key)
            -if all they keys map to the same value, that dictionary is what we call a Set
        - a Set ADT would also allow us to search for a key, however the key is not associated with
            any value
        - just like out dictionary ADT, a set can be Static or Dynamic
            - again if dynamic, must support both search and insert + delete
        
    Implementation of a Dictionary Abstract Data Type:
        - data structure under the hood could be of two types:
            - contiguous -> all pairs are stored in contiguous memory 
                - i.e. array
            - linked data structure -> key value pair has a pointer to the next key value pair in a collection
                - i.e. linked list
        - suppose we went with the array (unsorted) under the hood approach
            - search time-complexity?
                - O(n) time because the key could appear anywhere in the array
            - insert time-complexity?
                - O(1) -> appending at the end of the array
            - delete time-complexity?
                - first search / locate key -> O(n)
                - then delete + left shift remaining elements -> O(n)
                - O(2n) -> O(n)
        - how about if we use a linked-list to implement the ADT:
            - search time-complexity?
                - O(n)
            - insert time-complexity?
                - O(1)
            - delete time-complexity?
                - first search -> O(n)
                - deletetion
                    - no need to left shift
                - O(n) + O(1)
        - now suppose we used a sorted array instead of an unsorted array
            - search time-complextiy:
                - O(log(n))
            - insert time-complexity:
                - find where to insert -> O(log(n))
                - right-shift remaining element -> O(n)
                => O(log(n) + n)
            - delete time-complexity:
                - find element -> O(log(N))
                - delete 
                    - left-shift remaining elements -> O(n)
        - now suppose we used a sorted linked list 
            - search time-complexity:
                - unlike an array, we cannot directly access the middle element
                    when doing binary search
                - must do sequential access
                => O(n)
            - insert time-complexity:
                - find the right place to insert -> O(n)
                - insert in constant time
                => O(n)
            - delete time-complexity:
                - find location of key -> O(n)
                - change pointers
                => O(n)
        - sorted array seems to allow for efficient search, 
            - if our dictionary had been static, and we did not require insert or delete,
            then a sorted array seems like the best approach
        - however most dictionaries do require insert / delete operations
            - we need to thus find a better data structure for implementing a dictionary ADT,
                - one that preserves O(log(n)) search time while improving insertion / deletion
        - Question: 
            - is it possible to use a contiguous data structure to have
            fast preformance on all three operations?
            - suppose you were told in advnace they keys you would store would
            be unique and of the type integer, from size 0 - n-1
                - since the keys fall between 0 - n-1, they can serve as indecies
                    - if K is not in our dictionary, A[k] = null
                    - if K is present in our dictionary, A[k] = value
                - given these assumptions:
                    - search: O(1)
                    - insert: O(1)
                    - delete: O(1)
                - the downside of this approach is our array could be huge and filled
                with a lot of null values, all to store a small amount of values
            - now lets drop this simplifying assumption
                - how could we draw some inspiration from this solution?
                - i.e. what of our keys are strings or floats or objects?
                    - we could attempt to convert the key to an int
                - we want to somehow map each key to an integer grom range (0, m - 1)
                in a way that the keys get distributed to different indexes (or at random)
                minimizing collisions
                    - we could map the first letter of the color to a rank(alphabetically)
                    - and then use a mod operator to keep them within our range
                - this is called a hash table
                    - hash table is a combination of a hash table + array / table
                - worst-case complexity -> linear O(n) bc it is hard to avoid collisions
                    and parsing through collisions to find out element might take O(n) time
                    - we could still have the expected time-compelxity be constant: O(1)
                        if we minimize hash collisions
                
            

            
"""             
