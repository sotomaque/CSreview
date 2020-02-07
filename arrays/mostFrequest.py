"""
Most frequently occuring item in an array
"""

# Implement your function below.
# assumption -> single unique item that appears most frequest
# O(n) time
def most_frequent(given_list):
    max_count = -1
    max_item = None
    count = {}
    for item in given_list: 
        if item in count:
            count[item] += 1
        else:
            count[item] = 1
        if count[item] > max_count:
            max_count = count[item]
            max_item = item

    return max_item


def test():
    # NOTE: The following input values will be used for testing your solution.
    # most_frequent(list1) should return 1
    list1 = [1, 3, 1, 3, 2, 1]
    print('testing list 1: ')
    print('result ', most_frequent(list1), ' should be 1\n')

    # most_frequent(list2) should return 3
    list2 = [3, 3, 1, 3, 2, 1]
    print('testing list 2: ')
    print('result ', most_frequent(list2), ' should be 3\n')

    # most_frequent(list3) should return None
    list3 = []
    print('testing list 3: ')
    print('result ', most_frequent(list3), ' should be None\n')

    # most_frequent(list4) should return 0
    list4 = [0]
    print('testing list 4: ')
    print('result ', most_frequent(list4), ' should be 0\n')

    # most_frequent(list5) should return -1
    list5 = [0, -1, 10, 10, -1, 10, -1, -1, -1, 1]
    print('testing list 5: ')
    print('result ', most_frequent(list5), ' should be -1')


def main():
    test()
    

main()