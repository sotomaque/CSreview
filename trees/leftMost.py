"""
problem statement:
print the left most node at ever level

mention of level must make us think of BFS

mention of BFS must make us think of a queue
"""
import queue 

def printLeftMostAtEveryLevel(someNode):
    q = queue.Queue()
    q.add(someNode)

    while not q.empty():
        size = q.qsize()
        printed = False
        for i in range(0, size, -1):
            node = q.get()
            if not printed: 
                print(node)
                printed = True
            if node.left:
                q.put(node.left)
            if node.right:
                q.put(node.right)
            
        
    



