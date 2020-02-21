"""
Problem Statement: 
    build a balanced binary tree given an array of elements
        elements are given in sorted order
    
    number of elements in the right subtree & the number of elements
    in the left subtree can be off by 1 at most

    solution:
        - we know the middle element will be the root node


"""

def buildBalancedBinaryTree(someArray, startIndex, endIndex):
    if startIndex > endIndex:
        return
    middleIndex = startIndex + ((endIndex - startIndex) / 2 )
    middleElement = someArray[middleIndex]
    print(middleIndex, middleElement)

    x = CreateNode(middleElement)
    
    left = buildBalancedBinaryTree(someArray, 0, middleIndex)
    right = buildBalancedBinaryTree(someArray, middleIndex, len(someArray))



def test():
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 19, 20]
    buildBalancedBinaryTree(a, 0, len(a))

test()