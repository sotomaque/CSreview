"""
youre given two arrays,
write a function that returns the common elements
for the given arrays;

assumption: arrays are sorted; not necessarily of same size
"""

# Implement your function below.
# O(n) time complexity -> run through arrays once using pointers that shift
# taking advantage of the fact the arrays are sorted
def common_elements(list1, list2):
    result = []
    p1 = 0
    p2 = 0
    while p1 < len(list1) and p2 < len(list2):
        if list1[p1] == list2[p2]:
            result.append(list1[p1])
            p1 += 1
            p2 += 1
        elif list1[p1] > list2[p2]:
            p2 += 1
        else:
            p1 += 1
        
    return result


def test():
    # NOTE: The following input values will be used for testing your solution.
    list_a1 = [1, 3, 4, 6, 7, 9]
    list_a2 = [1, 2, 4, 5, 9, 10]
    results = common_elements(list_a1, list_a2) #should return [1, 4, 9] (a list).
    print(results)

    list_b1 = [1, 2, 9, 10, 11, 12]
    list_b2 = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15]
    results = common_elements(list_b1, list_b2) #should return [1, 2, 9, 10, 12] (a list).
    print(results)

    list_c1 = [0, 1, 2, 3, 4, 5]
    list_c2 = [6, 7, 8, 9, 10, 11]
    results = common_elements(list_c1, list_c2) #should return [] (an empty list).
    print(results)

def main():
    test()


main()