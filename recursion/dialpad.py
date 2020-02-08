
# i.e. given 911 -> return ['W ', 'X ', 'Y ', 'Z ']
# i.e. given 23 -> return ['AD', 'AE', 'AF', 'BD', 'BE', 'BF', 'CD', 'CE', 'CF']

def dialpad(givenInput):
    d = {
        '1': '',
        '2': 'ABC',
        '3': 'DEF',
        '4': 'GHI',
        '5': 'JKL',
        '6': 'MNO',
        '7': 'PQRS',
        '8': 'TUV',
        '9': 'WXYZ',
        '0': ''
    }
    for num in givenInput:
        print(num, d[num])


def test():
    a = '911'
    dialpad(a)


test()