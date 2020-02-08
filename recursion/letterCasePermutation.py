# given a string, i.e. "a1b2", result = ['a1b2', A1b2', a1B2', 'A1B2']

def letterCasePermutation(S):
    ans = [""]
    for s in S:
        if s.isdigit():
            ans = [c+s for c in ans]
        else:
            tmp1 = [c+s.lower() for c in ans]
            tmp2 = [c+s.upper() for c in ans]
            ans = tmp1 + tmp2
    return ans


def test():
    print(letterCasePermutation('a1b2'))


test()