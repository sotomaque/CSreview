"""
given two arrays,
assume there are no duplicates

write a function (is_rotation) that takes both arrays,
and returns true if one of them is a rotation of the other.

rotation -> same elements, same order, starting at different
indecies

assumption: no duplicates, both arrays are of same length

"""

# O(2n) -> O(n) time | O(1) space
def is_rotation(list1, list2):
    if len(list1) != len(list2):
        return False
    else:
        key = list1[0]
        key_index = -1
        # find position of first element of list a in list b
        for i in range(0, len(list2)):
            if list2[i] == key:
                key_index = i
                break
        # after for-loop, if key_index is still -1, that means we didnt find the key in list b
        if key_index == -1:
            return False
        # go through entire list1 with a for loop
        for i in range(0, len(list1)):
            j = (key_index + i) % len(list1)
            if list1[i] != list2[j]:
                return False
        return True



def test():
    # NOTE: The following input values will be used for testing your solution.
    list1 = [1, 2, 3, 4, 5, 6, 7]
    list2a = [4, 5, 6, 7, 8, 1, 2, 3]
    result = is_rotation(list1, list2a) #should return False.
    print(result)

    list2b = [4, 5, 6, 7, 1, 2, 3]
    result = is_rotation(list1, list2b) #should return True.
    print(result)
    
    list2c = [4, 5, 6, 9, 1, 2, 3]
    result = is_rotation(list1, list2c) #should return False.
    print(result)
    
    list2d = [4, 6, 5, 7, 1, 2, 3]
    result = is_rotation(list1, list2d) #should return False.
    print(result)
    
    list2e = [4, 5, 6, 7, 0, 2, 3]
    result = is_rotation(list1, list2e) #should return False.
    print(result)
    
    list2f = [1, 2, 3, 4, 5, 6, 7]
    result = is_rotation(list1, list2f) #should return True.
    print(result)
    
    list2g = [7, 1, 2, 3, 4, 5, 6]
    result = is_rotation(list1, list2g) #should return True.
    print(result)


def main():
    test()


main()