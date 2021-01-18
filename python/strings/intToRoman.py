"""
"""
def intToRoman(inputInt):
    val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ]
    syb = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ]
    string_value = ""
    i = 0
    while inputInt > 0:
        for _ in range(inputInt // val[i]):
            string_value += syb[i]
            inputInt -= val[i]
        i += 1
    return string_value

def test():
    result = intToRoman(1994)
    #print(result)
    print(94//100)

test()