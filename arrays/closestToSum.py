"""
given two arrays, and an integer N,
find two numbers, one from either array, whose sum
is closest to N

assume both arrays of of same length - n
"""

# naive step 1: brute force solution
# checks every num of array 1 with every num of array2
# O(n^2) runtime
def bruteForceSolution(array1, array2, target):
    min_distance = target
    for a1_num in array1: 
        for a2_num in array2:
            current_sum = a1_num + a2_num
            current_distance = target - current_sum
            if current_distance < min_distance:
                min_distance = current_sum
                min_a1 = a1_num
                min_a2 = a2_num

    print("closest pair: (", min_a1, ", ", min_a2, ")")



def main():
    array1 = [-1, 3, 8, 2, 9, 5]
    array2 = [4, 1, 2, 10, 5, 20]
    target = 24

    bruteForceSolution(array1, array2, target)

main()