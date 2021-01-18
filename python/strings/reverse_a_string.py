"""
# approach 1: 
    initialize an empty string at the begining; start traversing given string from end
    and append characters one by one from the end to start.
        -- resulting in reversed string
"""
def approach1(inputString):
    result = ''

    for i in range(len(inputString) - 1, -1, -1):
        result = result + inputString[i]
    
    return result

'''
# approach 2: use in-built reverse function
'''
def approach2(inputString):
    reveresedChars = reversed(inputString)
    return ''.join(reveresedChars)

'''
# approach 3: extended splicing
    first parameter - from what index? == -1 => moving from last character of string
    second parameter - to what index? == no parameter -> traverse full legth of inputString
    third parameter - step logic == -1 -> go from last parameter, to second to last, etc. until string is traversed
'''
def approach3(inputString):
    return inputString[-1:: -1]


def test():
    inputString = 'enrique'

    outputString1 = approach1(inputString)
    outputString2 = approach2(inputString)
    outputString3 = approach3(inputString) 


    print('1: ', outputString1)
    print('2: ', outputString2)
    print('3: ', outputString3)

test()