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

# search trees 
"""
    - goal: arrive at a more efficient search complexity using a linked (contiguous) implementation of our 
        dictionary ADT
    - what if we gave direct access to the middle element of a list?
        - we could then implement binary search by comparing they key of the middle value with they searching key
            - if less than, the search value, if present, would lie right of the middle element
            - if greater than, the search value, if present, would lie left of the middle element
        - we no longer require head and tail pointers as we would always begin our search from the middle
        - with this change, we can speed up search, as a whole, however each of those two halfs still has to be searched sequentially
        - therefore, since O(n/2) is the same of O(n), we have not improved the overall time complexity
    - our linked structure no longer has a clean left to right structure, rather a tree structure, which allows us to implement binary search

    - Binary Search Tree (BST)
        - worst case search: follow the path from root to leaf -> O(n)
        - modifying our tree to be "complete" or almost complete give us the advantage of reducing the height
            - height of a complete / almost complete tree -> approx. log(n)
            - as long as this condition remains true for whatever tree we will look at, we are guaranteed the
            search will take O(log(n)) time
        - given these assumptions:
            - search: O(log(n))
            - must do insertion and deletion carefully to maintain complete tree structure
            - given we do these carefully:
                - insert: O(log(n))
                - delete: O(log(n))
        - defention: balanced tree- does not have a skewed shape, aka complete

    - recap of implementation of dictionary / set ADT:
        1. contiguous: Hash Table - i.e. HashMap / HashSet
            - search: O(1)
            - insert: O(1)
            - delete: O(1)
        2. linked: Balanced Binary Search Tree - i.e. Map / Set
            - search: O(log(n))
            - insert: O(log(n))
            - delete: O(log(n))
            
"""

# binary search tree - search foundations
"""
    - BST
        - keys: integers (associated values omitted) -> Set
    - given a tree where all the left sub-children are less than a given node and the right subchildren are greater then the given node
    - seach pseudocode (iterative not recursive):

        - def search(TreeNode root, int key):
            if root is null:
                return null
            
            curr = root

            while curr is not null:
                if key == curr.key:
                    return curr
                elif key < curr.key:
                    curr = curr.left
                else:
                    curr = curr.right
            
            return null

        - time-complexity: O(log(n))
"""

# binary search tree - insert foundations 
"""
    - tree class (ignoring the presence of an attribute / value field):
        class TreeNode(self, key):
            def __init__(self, key):
                self.key = key
                self.left = null
                self.right = null

    - insert pseudocode (iterative not recursive):

        - def insert(TreeNode root, int k):
            # first thing we want to do is take this integer k and create a new node containing that key
            newNode = new TreeNode(k)

            # ensure tree is not empty
            if root is null:
                return newNode

            # find the right place where node should go
            # unlike the previous search implementation, we need to keep track of the previous node so we can make the new node a child of it
            prev = null
            curr = root
            while curr is not null:
                if key == curr.key:
                    return "KEY ALREADY EXISTS"
                elif key < curr.key:
                    prev = curr
                    curr = curr.left
                else:
                    prev = curr
                    curr = curr.right

            # check whether curr jumped left or right when we ended up in null
            if key < prev.key:
                prev.left = newNode
            else:
                prev.right = newNode

            return root

        - time-complexity: O(log(n))
        - however, if we try to insert using this algo a set a keys in already sorted order, the tree will no longer be balnaced and will now have a height of n
        - we need to re balance the tree post insert
            
"""

# BST - Min / Max
"""
    - given a balances BST 
        - if looking for min, 
            - start from root, keep going left until a node does not have a left-child
        - if looking for max,
            - start from root, keep going right until a node does not have a right-child
    - by definition:
        - min element cannot have a left child
        - max element cannot have a right child

    - fining min pseudocode:

        - def findMin(TreeNode root):
            if root is null:
                return null
            curr = root
            while curr.left is not null:
                curr = curr.left
            return curr.key

        - time-complexity: O(log(n)) -> better than a hashtable where TC is O(n)
        
    - finding max pseudocode:
        
        - def findMax(TreeNode root):
            if root is null:
                return null
            curr = root
            while curr.right is not null:
                curr = curr.right
            return curr.key

        - time-complexity: O(log(n)) -> better than a hashtable where TC is O(n)
"""

# BST Successor
"""
    - suppose you are given a key that exists in a BST and you are asked to find its sucessor
        - the sucessor of a node is another node with the next largest key in the tree

    - approach:
        - successor must be found in the right subtree
        - since we want the smallest element bigger than the key provided, we thus want to find the minimum element of the right subtree
            - run findMin on right child of given key
        - however if asked to find the successor of a leaf node, we might be tricked into believing that node does not have a succeessor
            - however the only node without a successor in a tree is the maximum element
            - so the successor of a node can exist even if the node doesnt have a right subtree
            - we know that the successor in this scenario must be above this node and this node must be a left child of the potential sucessor
                - because if it were the right child, it would by definition be larger than its parent and thus not the sucessor

        - therefore, if there is a right subtree for a given node, k, the successor has to lie there
            - otherwise, we have to look up for the successor of k
            - if k happens to be the left child of its parent, the parent is the successor
            - if k happens to be the right child of its parent, we keep going up until the node is a left child of an ancestor
                - then we check that ancestor to see if its larget than k
        
        - one complicated case:
            - a chain where 

        - pseudocode:
            // find successor of p.key
            - def successor(TreeNode root, TreeNode p):
                if root is null:
                    return null
                
                # case p has a right subtree
                if p.right is not null:
                    # successor is the min elemnt of that right subtree
                    curr = p.right
                    while curr.left is not null:
                        curr = curr.left
                    return curr
                
                # p does not have a right subtree
                # search for p starting for the root so we can keep track of p's parents
                # trying to find the deepest such event where we follow a left child pointer, after which we only have right child pointers leading up to p
                ancestor = null
                curr = root
                while curr.key is not p.key:
                    if p.key < curr.key:
                        ancestor = curr
                        curr = curr.left
                    else:
                        curr = curr.right
                return ancestor
                
            - time-complexity: O(log(n)) -> better than a hashtable where TC is O(n)

"""


# BST Predecessor
"""
    - suppose you are given a key that exists in a BST and you are asked to find its predecessor
        - the predecessor of a node is another node with the next smallest key in the tree

    - approach:
        - predecessor must be found in the left subtree
        - since we want the largest element smaller than the key provided, we thus want to find the maximum element of the left subtree
            - run findMax on left child of given key

        - pseudocode:
            // find successor of p.key
            - def predecessor(TreeNode root, TreeNode p):
                if root is null:
                    return null
                
                # case p has a left subtree
                if p.left is not null:
                    # successor is the max element of that left subtree
                    curr = p.left
                    while curr.right is not null:
                        curr = curr.right
                    return curr
                
                # p does not have a left subtree
                ancestor = null
                curr = root
                while curr.key is not p.key:
                    if p.key < curr.key:
                        ancestor = curr
                        curr = curr.right
                    else:
                        curr = curr.left
                return ancestor

            - time-complexity: O(log(n)) -> better than a hashtable where TC is O(n)

"""