"""
given two arrays, a and b, asked to return the intersection
"""

def intersection(array1, array2):
    result = [value for value in array1 if value in array2]
    return result

#assume arrays are sorted
def intersectionWithPointers(array1, array2):
    i = 0
    j = 0
    result = []
    while i < len(array1) and j < len(array2):
        if array1[i] == array2[j]:
            result.append(array1[i])
            i += 1
            j += 1
        elif array1[i] < array2[j]:
            i += 1
        else:
            j += 1
    return result


def test():
    lst1 = [4, 9, 1, 17, 11, 26, 28, 54, 69] 
    lst1.sort()
    lst2 = [9, 9, 74, 21, 45, 11, 63, 28, 26] 
    lst2.sort()
    #print(intersection(lst1, lst2)) 
    print(intersectionWithPointers(lst1, lst2))

test()