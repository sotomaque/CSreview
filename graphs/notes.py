# How was graph theory invented?
"""
    - can one walk accross the seven bridges
    crossing each of them exactly once and come back home
        - no bridge should be repeated
        - each bridge should be crossed one

        - Euler was solicited to solve this problem
            - termed the 7 bridges of Konigsberg

        - Euler looked at the tookkit he had available at his time 
            and realized it could not be solved with geomentry, algebra,
            combinatorials
            - he then thought this isn't a mathematical problem

        - he published the solution to the problem in a paper
"""

# What is a graph
"""
    - today we would represent the map with a diagram where there are four
    vertecies (nodes, represenging land) and edges join the vertecies represent
    bridges
        - we would use an undirected graph
    - two vertecies are said to be adjacent if there is a path directly joining
    them
    - a path in a graph is a sequence of adjacent vertecies
    - a cycle in a graph is a path that ends at the same vertex where it started

    - this terminology was termed by Konig, 200 years after Euler looked at the problem
"""

# Degrees of a Vertex 
"""
    - the degree of a vertex is just the number of vertecies that are adjacent to a 
        given vertex
        - nothing but the number of edges sticking out of a given vertex
    - in general graphs we will look at wont have multiple edges going from the a vertex 
        to the same adjacent vertex
        - if we have this or we have a self loop, that graph is called a multigraph
    - An undirected graph is complete if there is an edge between every pair of vertices.
        If there are V vertices in such a graph, the degree of each vertex will be V -1 
"""

# Sum of Degrees
"""
    - a graph is generally expressed as: G(V, E) where V and E are sets of vertecies and edges
    - the sum of degrees of all the vertecies in an undirected graph is:
        2 * |E|
    - what if we ask the same question for directed graphs?
        - we cant then just talk about the degrees of these vertex
            - we must distinguish between outbound edges and inbound edges
            - out-degree
            - in degree
        => in this case we only count each edge once so the sum of the out-degrees -> number of edges
    - euler said the same thing about undirected graphs
    - An undirected airport graph has 200 airports, and each airport has a direct flight connection to 
        at least 5 other airports. Which of the following is the most precise statement we can make about
        the number of edges?
        - |E| is at least 500.
"""

# Modeling Eulerian Cycles
"""
    - Eularian path - covers every edge exactly once but does not necessarily leave you at starting vertex
    - Eularian cycle - coveres every edge exactly once and leaves you at starting vertex

    - say we wanted to visit a museum and do so in such a way where we visit every wall of the museum exactly once
        - we can model this as a graph where the vertex is a corner of a room and an edge is the wall
        - we would then be asking to traverse every edge exactly once
        - this is an NP hard problem
            - meaning there is no known polynomial time algorithm for this problem
        - called the Hamiltonian Cycle problem
    
    - this shows us that how we model our problem into a graph is important
    - want to do so in a way that allows us to solve in linear, nlog(n), quadratic time
"""

# Necessity of Even Degree
"""
    - a graph is said to be connected if you can start from any vertex and reach any other vertex
    - if we have an eularian cycle, every intermediate vertex must allow for us to exit it through an 
        uncrossed edge (by definition)
    - observation: every time we enter a vertex, we exit it along some unused edge.
    - so the degree of every verted must be even 
    - in other words, if the degree of any vertex is odd, the graph cannot have an eulerian cycle

    - in the graph of Konigsberg, every vertex has an odd degree -> therefore it cannot have a eularian cycle
"""

# Eulerian Cycle Construction
"""
    - we know that if a graph has a eulerian cycle, the degree of every vertex is even
    - is the converse true?
        -i.e. if the degree of every vertex is even does this necessarily mean that
        the graph has an eulerian cycle?
        - yes
    - therefore a connecte graph will have an eulerian cycle if and only if the degree of
    every vertex is even
"""

# Eulerian Path Problem
"""
    - assume the graph is connected for now
    - if there exists an eulerian path in a graph, either that path
     is an eulerian cycle, or it could start and end at two different
     vertecies
        - in a graph where we have all even degreed vertecies, and two 
        odd degreed vertecies, the even degreed vertecies must be an intermediate
        vertecie, as every time you enter it you must be able to exit it from some
        other unused edge. 

    - is it possible for a graph to have a single vertex with an odd degree?
        - we know that if we were to add up all the degrees of vertecies in a complete graph
        this number is 2|E| (even number). 
        - if we had a graph with only one odd degree, that means the remaining degrees are even
        so the equation looks like:
            (odd) + (even + even + ... + even) = 2|E| (even)
            - notice the sum of the left hand size is odd where as the sum of the
            right hand side is even so we have a contradiction
        - this can be extended to any odd number of vertecies with an odd degree
    
    - A graph is not allowed to have 1 vertex with an odd degree
                                        3 vertecies with an odd degree
                                        5 vertecies with an odd degree
                                        etc.
        - so the number of vertecies in a connected graph with an odd degree must be an even number!
    
    - if the number of vertecies in a connected graph is 0 -> Eulerian Cycle
    - if there is an Eulerian path in a graph, we know that the number of vertecies with odd degree == 2
    - if the number of vertecies with an odd degree is > 2, there cannot be an Eulerian cycle in the graph
    and there also cannot be an eulerian path in the graph
        - because if there is only the start and end are allowed to have an odd degree
    
    - if a connected graph has exactly 2 vertecies with an odd degree, does that necessairly mean
    there exists an Eulerian path in it?
        - if there are only 2 vertecies with an odd degree, we can always add an edge connecting those
        two edges
            - now ever vertecie will have an even degree
            - and we know that there will exist an Eulerian Cycle
        - then we can remove the added edge, and we should still be able to traverse every edge
            - however now the difference will be we will start at one odd degreed vertecie and end 
            at the other
        - meaning that yes, if a graph has exactly 2 vertecies with an odd degree, it necessairly
        implies there exists an Eulerian path
"""

# Conclusion by Euler
"""
    - if given a connected graph, look at number of vertecies with odd degree
    - if that number is more than 2, there cannot exist a eulerian path or cycle
    - if the number of vertecies with an odd degree is exactly 2, then the graph
    will have an eulerian path that starts from one of these 2 vertecies and ends
    at the other vertex
    - if there are no vertecies with an odd degree, the graph will have an eulerian
    cycle
"""

# How to Represent Graphs on a Computer
"""
    - we will use the letter n to denote the number of vertecies ( |v| )
    - likewise the variable m will denote the number of edges ( |E| )
    - max number of edges in a connected undirected graph -> O(n^2)

    - Edge List
        - idea: since G is just a set of vertecies and a set of edges, why dont we maintain
        both V and E as lists
        - if you are given a vertex and asked for all of its neighbors, that would take a lot of time
        because we will have to traverse the whole edge list and see which of those edges mention our given
        veretex, then we would have to see what its corresponding neighbors are
            - time-complexity: O(|E|) (aka O(m)) because he have to look at all the edges in this unsorted list
                - if we have to look at every vertex: O(m*n), however since m can be as large as n^2,
                    -> O(n^3)
            - space-complexity: we need O(n) to store vertex info; O(m) for the edge info
                -> O(n + m)

    - Adjacency List
        - i.e. {vertex id} -> {[list of id's for its neighbors]}
                0 -> [1, 6, 8]
                1 -> [0, 4, 6, 9]
                2 -> [4, 6]
                etc.
        - here it would take O(degree of the vertex) to get all of its neighbors
            - much better than O(m)
        - in an undirected graph, the same edge, from vertex u to vertex v, would be stored twice
            - once in the adjacency list for u, once in the list for v
        - in a directed graph, we can store it only once if we only store outgoing edges in a given
        vertecies list
        - space-complexity:
            O(n) id's map to O(m) edges in adjacency lists

    - Adjacency Matrix
        - if vertex i has an edge to vertex j, 
            - then in row i, column j, there would be a 1 in this matrix (0 otherwise)
        - this leads to an n x n matrix representation of our edges,
        - an undirected graph has a symmetry across the diagonal (where diagonal is all 0's)
        - time to find all the neighbors of a vertex?
            - i would have to go to a particular row,
            - scan the entire row, figure out where there are 1's
            -> O(n) as the whole row must be scanned
        - space complexity: O(n^2) even in a graph with no edges as space allocation is fixed
        - this kind of representation is good only if the graph is a dense graph
            - a dense graph is defined as a graph where the number of edges is of the same magnitude of
            the square of the number of vertecies
        - if you have to frequently tell if there exists an edge between (u,v) an adjacency matrix
            allows this operation in O(1)
            - where as an adjacency list takes O(deg(u))
        - what if each edge has an associated weight?
            - instead of storing a 0 / 1, we can store the weight at the corresponding entry
            - in an adjacency list, we can modify to list of id's for its neigbors to be tuples
             of the form [[neighborId, weight], ...]
    
    - Adjacency Map
        - much like adjacency lists, adjacency maps will map us from a vertex to something
            - instead of maping us to a list of its neighbors
            - an adjacency map will map us to a map that stores key value pairs, where they keys
            are the neihbors, and the values are edge info (weights, edge id, etc.)
        - advantage
            - retrain advantages of adjacency list
                - allows you to iterate over the neighbors 
            - also allows us to find out if two vertecies are nighbors in O(1) expected time
        - rememebr an adjacency matrix provided lookup in O(1) time, so in some senses adjacency map
        combines the advantages of adjancency lists (in space) and adjacency matricies (in time)
"""

# Pseudocode Implementation
"""
    class Graph {
        list<int>[] adjList;
        int V;

        // constructor
        Graph(int size) {
            V = size;
            adjList = new list<int>[V];
        }

        void addEdge(int start, int end, bidir=true) {
            adjList[start].add(end);
            if (bidir == true):
                adjList[end].add(start)
        }

        bool hasEulerianCycle() {
            odd = 0; // no. of verticies with odd degree 
            for vertex in adjList:
                if (adjList[vertex].size() % 2 == 1):
                    odd += 1
            
            if (odd == 0):
                return True
            else:
                return False
        }

        
        bool hasEulerianPath() {
            odd = 0; // no. of verticies with odd degree 
            for vertex in adjList:
                if (adjList[vertex].size() % 2 == 1):
                    odd += 1
            
            if (odd == 0) || (odd == 2):
                return True
            else:
                return False
        }
    }

    g = new Graph(10);
    g.addEdge(0,1);
    g.addEdge(0,6);
    g.addEdge(0,8);
    g.addEdge(1,4);

    
"""