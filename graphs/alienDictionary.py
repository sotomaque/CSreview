"""
problem statement:
    given a sorted alien dictionary, find the sorted order of characters

    i.e. we find a dictionary of alien words
        - baa
        - abcd
        - abca
        - cab
        - cad
    - edge represents the "comes before" relationship
    
    - write a fucntion to get edges

    function getEdge(word, anotherWord) {
        minLen = min(word, anotherWord)
        for (let i = 0; i < minLen; i++) {
            if (word[i] !== anotherWord[i]) {
                return new Edge(word, anotherWord)
            }
        }
    }

    for (i = 0; i < n - 1; i++):
        getEdge(words[i], words[i + 1])
    
    now we have a graph of the sort
        b -> a
        b -> d
        d -> a
        a -> c
    
    so we want to preform a topological sort (only possible if there is no cycle)

    - time-complexity:
        - go through all the words: n words
            - O(n)
        - for each word, compare their characters
        - then preform topological sort:
            - O(V + E)
        - O(number of words * length of the words) + O(V + E) 
"""

def alienDictionary():
    pass




def test():
    pass


test()