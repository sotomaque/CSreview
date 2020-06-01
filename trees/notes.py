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
                # trying to find the deepest such event where we follow a left child pointer, 
                # after which we only have right child pointers leading up to p
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

# BST Delete
"""
    - suppose we are given a refrence to the root node of a tree, and a key that we want to delete
    - this function should return the new node of the tree after we have deleted the key
        - there is no guarantee the root exists within the BST
    - the first thing we would want to do is search for the node containing the key

    - case 1:
        - node is a leaf
        - need to keep track of the previous pointer so we can set it to null
    - case 2:
        - node has exactly one child
        - if curr is a left child of its parent, we want to have the parent.left's pointer now point to curr's only child
        - if curr is a right child of its parent, we want to have parent.right's pointer now point to curr's only child
    - case 3:
        - node has two children
        - a good candidate would either have to be the predecessor of k, or the succesor of k

    - pseduocode:

        - def delet(TreeNode root, int key):
        
            cur = root
            prev = null

            while curr is not null:
                if key == curr.key:
                    break # it is possible prev stays null if we want to delete the node in a tree with only one node, as we would break here 
                elif key < curr.key:
                    prev = curr
                    curr = curr.left
                else: # key > curr.key
                    prev = curr
                    curr = curr.right
            
            # if curr is null or tree is empty, 
            if curr is null:
                print "KEY NOT IN TREE"
                return root
            
            # else curr is pointing to node we want to delete

            # case 1: node is a leaf
            if curr.left is null and curr.right is null:
                # edge case, single node tree where we want to delete that node
                if prev is null:
                    return null
                # otherwise
                if curr is prev.left:
                    prev.left = null
                else: # curr is prev.right
                    prev.right = null
                return root

            # case 2: node has one child
            child = null
            if current.left is null and current.right is not null:
                child = curr.right
            if current.left is not null and current.right is null:
                child = curr.left
            
            if child not null:
                # edge case
                if prev == null:
                    root = child
                    return root
                if current is prev.left:
                    prev.left = child
                else: // curr is prev.right:
                prev.right = child

                return root

            # case 3: node has two children 
            if curr.left is not null and curr.right is not null:
                # find successor
                succ = curr.right
                prev = curr
                while succ.left is not null:
                    prev = succ
                    succc = succ.left

                curr.key = succ.key
                if succ is prev.left:
                    prev.left = succ.right
                else: // succ is prev.right:
                    prev.right = succ.right
                return root

        - time-complexity: 
            - first search: O(log(n))
            - case 1 or case 2: update parent pointers: no added complexity: O(1)
            - case 3: copying value, etc, still constant tile, 
            - O(log(n))
"""

# Heirarchial Data
"""
    - second context in which trees arise
    - when data has a heirarchial element to it
        - i.e. the tree of life
        - i.e. a corporate structure
        - i.e. a file system
    - these trees are not restricted to two children like binary trees
        - called an n-ary tree
            - where arity is the limit on the number of children it could have

    - class TreeNode(self):
        int key
        Object value
        List<TreeNode> children // instead of two refrences to left / right child, we are now allowing for variable number of children

    - traversing children:
        -i.e.
        Node
        for child in node.children:
            // do stuff
"""

#BFS 
"""
    - Traversal:
        - a systematic way of visitng all the nodes of a given tree
        - trivial if an array is represented in a linear fashion (array or linked-list)
    - we will always begin our traversal from the root
    - one approach is to traverse the nodes level-by-level (called level-order traversal, or Breadth First Search)
    - another approach is to traverse the nodes path-by-path (called Depth First Search)

    - given a binary tree. print its nodes in level order
    - approach:
        
        - def levelOrder(TreeNode root):
            q = new Queue()
            q.push(root)

            while q is not empty:
                node = q.pop()
                print(node)
                if node.left is not null:
                    q.push(node.left)
                if node.right is not null:
                    q.push(node.right)

        - BFS is thus associated with using a queue data structure

    - to do this for an n-ary tree we would need to make a small modification

        - def levelOrderN_aryTree(TreeNode root):
            if root is null: return

            q = new Queue()
            q.push(root)

            while q is not empty:
                node = q.pop()
                print(node)
                
                for child in node.children:
                    q.push(child)

    - time-complexity: 
        - pushing nodes, poping nodes, printing values - O(1)
        - while loop -> O(n)
    - space-complexity: 
        - max size of queue:
            - number of nodes in the last level 
            - possible to have a tree where we just have a root node and everyone else is a child of it
            - therefore max size in worst case: O(n)
"""

# Preorder / Inorder / Postorder DFS
"""
    - Depth-first Search (DFS)
        - trace every path from root to leafs
    
    - pre-order
        - print each node before you print their subtrees

    - in-order
        - print left sub-tree then root then right subtree
        - in a BST, it will print all the nodes which are less than k (root), then k, then all the nodes greater than k

    - post-order
        -print subtrees before you print the root
        
    - all three can be done in O(n) time

    - pseudocode

        - def dfs(TreeNode root):
            // special case
            if root is null:
                return
            // print(root.key) here -> pre order
            if root.left not null:
                dfs(root.left)
            // print(root.key) here -> in order
            if root.right not null:
                dfs(root.right)
            // print(root.key) here -> post order

        - time-complexity: O(n) (proportionate to recursive calls / size of tress)
        - space-complexity: if tree is balanced O(log(n)), else O(n)
            
    - extend this to an n-ary tree

        - def dfs(TreeNode root):
            // special case
            if root is null:
                return
            // print(root.key) here -> pre order
            for child in root.children:
                defs(child)
            // print(root.key) here -> post order

        - in order is not so clear as the number of children can vary

        - time-complexity: O(n) (proportionate to recursive calls / size of tress)
        - space-complexity: if tree is balanced O(log(n)), else O(n)

    - pre-order example
        - given a tree that represents a table of contents, print out the table of content with appropriate tabs
            where the number of tabs is proportionate to the depth of the given node
            i.e.
                TOC
                    Chapter 1
                        sec. 1.1
                        sec. 1.2
                            sec. 1.2.1
                    Chapter 2
                    ...

        - this is a pre order traversal, as we are looking to print out the key before we print out its children
        - we simply have to modify it to have a way to keep track of the depth / amount of white space to print out

        -   def helper(TreeNode node, int level):
                if node is null: return
                print("" * level, node.key)
                for child in node.children:
                    helper(child, level + 1)

        -    dfs(TreeNode root):
                helper(root, 0)
    
    - post-order example
        - you are given a tree representing a file system an you wish to determine the amount of space occupied by a given directory
        - the treenode class also has an antribute representing the amount of space occupied
            - i.e. class TreeNode(self):
                    string name
                    int space
                    List<TreeNode> children
        - recursively sum disk usage of children, then add your space
            - require all of childrens space before being able to compute total for a given node

        - pseudocode:

            def helper(TreeNode node):
                diskUsage = node.space
                for child in node.children:
                    diskUsage += helper(child)
                return diskUsage
            
            helper(root)
"""

# Successor and Predecessor again
"""
    - since in-order traversal of a bst prints the nodes in 'sorted' order,
        we can call in-order traversal to find the successor, or the min element of the right sub-tree, 
        as it will be the node retured immediately after the given node
    - if you call a node without a right sub-tree, you go back up the ancestor chain until you take a "right turn", 
        hitting the successor of the given node
    - predecessor is the inverse
"""

# Reconstructing binary tree from traversals
"""
    - given the tree 
            A
          /   \
         B     C
    - its pre-order traversal will be: A B C
    - its in-order traversal will be: B A C
    - its post-order traversal will be: B C A

    - question is, if you are given the traversals, can you re construct the tree?
        i.e. we are only given the pre-order and the fact its a Binary Search tree
        - A B C can be the pre-order traversal of the above tree and of
            A
              \
                B
                  \ 
                    C
        - so pre-order is not enough
        - how about in-order?
            - B A C can be contructed to look like a different tree:
                  B
                    \
                      A
                        \ 
                          C
            - so the same in-order traversal results can map to multplie different BST's
        - how about post-order traversal?
             A
              \
               C
                \ 
                 B
            - not enought either
        
    - what if you are given two traversals, can we use these to reconstruct the tree?
        pre-order results: k[left subtree][right subtree]
        in-order results: [left subtree]k[right subtree]

        given the preorder results, we know the first value will be the root of the tree
            however we dont know where the boundry between L and R lie
            however we can look at the results of the in-order traversal and look for k
                from which we know the left subtree values lie before it
                and the right lie after it
            recurse on the left and right subtrees to achieve the final result

        i.e. preorder sequence = [3, 9, 20, 15, 7]
             inorder sequence = [9, 3, 15, 20, 7]

             we know 3 will be the root of the tree
             we know the left subtree will have the element 9
             and the right subtree will have the elements [15, 20, 7]

             out of the right subtree elements, we know 20 will be the root, as it appears
                first in the pre-order sequence
             since 15 appears before it in the in-order sequence, we know it is a left child
             and since 7 lies after it in the in-order sequence, it is a right child

    - what if we are given the in-order and post-order sequences?
        - in the post order sequence, the root node will come at the end of the sequence
        - everything lying to its left in the in-order sequence will be an element of a left subtree
        - everything lying to its right in the in-order sequence will be an element of a right subtree
         
    - so it is possible with either [pre-order + in-order] or [post-order + in-order]

    - what if we are given the pre-order and the post-order sequences?
        we know: 
            pre-order results: k[left subtree][right subtree]
            post-order results: [left subtree][right subtree]k
        
        figuring out the root node is trivial, however figuring out the boundry between the left and the right subtrees would not be possible

        ie. pre-order sequence: a, b, c
            post-order sequence: c, b, a

            it is not clear whether:
                a
               /
              b
             /
            c
            
            or

                a
                 \
                  b
                   \
                    c

        - therefore the in-order sequence is necessary
    
    - a special case is a BST where we know the in-order sequence is the sorted version of the pre-order sequence, so we can always deduce the in-order sequence

    BST:
        in-order by itself -> not sufficent
        pre-order -> can be used to deduce in-order -> combined suffiecent
        post-order -> can be used to deduce in-order -> combined suffiecent

    General Binary Tree:
        pre-order + in-order: sufficent
        post-order + in-order: sufficent
        pre-order + post-order: not sufficent
"""

# Trees Test Review
"""

"""