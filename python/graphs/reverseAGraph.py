"""
    problem statement:
        given a (directed) strongly connected graph, build a new one with reverse edges

    rememebr: 
        a strongly connected graph -> a graph in which it is possible to react any node from any other node
        therefore we dont need to pass the whole graph to the funciton, just one single node

    if graph is represented as an adjacency list:
        i.e. a: b, c
             b: c
             c: d, e
             d: f
        we will look at connections of a, i.e. b, and add a to its list

    constraint: we want to create a new graph, not replace the edges in our graph

    1) create a new edge in reverse graph if not already in it
    2) have some sort of visited data structure to tell whether we visited a node
    3) dfs

"""

reversed_graph = {}

def built_reverse_graph(node):
    if not node:
        return node
    # helper
    def do_reverse(node):
        temp = Node(node.value)
        reversed_graph[node] = temp
        for n in node.neighbors:
            if not n in reversed_graph:
                do_reverse(n)
            reversed_graph[n].neighbors.append(temp)
    # call helper to create reverse graph
    do_reverse(node)
