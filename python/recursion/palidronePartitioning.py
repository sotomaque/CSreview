"""
palidrone partitioning
-given a string
-how many ways can you partition the string such that every partition is a palidrone?


i.e.
    input: "ababbabb"
    output: [a, b, a, b, b, a, b, b], [aba, bbabb], [a, b, a, bbabb], etc

"""


def isPalidrone(givenString):
    for i in range(len(givenString)):
        if givenString[i] != givenString[len(givenString) - 1 - i]:
            return False
    return True

def palidronePartitioning(givenString):
    i = 0
    j = len(givenString)
    while i < j and i < len(givenString) and j > len(givenString):
        if isPalidrone(givenString[i:j]):
            print(givenString[i:j])
            if isPalidrone(givenString[j:]):
                print(givenString[i:j], givenString[j:])
        i += 1
        j -= 1

def test():
    inputString = "ababbabb"
    #palidronePartitioning(inputString)
    print(isPalidrone('aba'))

test()