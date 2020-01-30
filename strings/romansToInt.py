"""
"""
def romanToInt(inputString):
    romans = {
        "I": 1,
        "V": 5, 
        "X": 10, 
        "L": 50, 
        "C": 100, 
        "D": 500,
        "M": 1000
    }
    integer_value = 0
    for i in range(0, len(inputString)):
        if i > 0 and romans[inputString[i]] > romans[inputString[i - 1]]:
            integer_value += romans[inputString[i]] - 2 * romans[inputString[i - 1]]
        else:
            integer_value += romans[inputString[i]]
    return integer_value



def test():
    result = romanToInt("IV")
    print(result)


test()
