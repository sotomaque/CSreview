"""
given an int array, arr, of size n, find all the magic tuples in it.

a magic triplet is one that sums to 0

i.e. 
input -> [10,3,-4,1,-6,9]
output -> [[10, -4, -6], [3, -4, 1]]

# each magic triplet must be unique 

"""

# approach:
#   use multiple pointers
#   sort the array first so we know what way to shift the pointers
#   have a pointer at the left bound (call it 'i'), one to the right of it (call it 'l'), 
#   and one at the right bound (call it 'r')

#   while the l < r:
#       compute the current sum
#       if the current sum is < 0 -> we have to shift 'l' to the right ( += 1 )
#       elif current sum > 0 -> we have to shift 'r' to the left ( -= 1 )
#       else -> we found a magic triplet
#           add it to our magic_triplets array




def threeSum(array):
    magic_triplets = []
    if not array: return magic_triplets
    array.sort()
    # len - 2 to account for the fact we have 3 pointers
    for i in range(len(array) - 2):
        # ensure we are only adding unique magic triplets
        if i > 0 and array[i] == array[i-1]:
            continue
        l = i + 1
        r = len(array) - 1
        while l < r:
            current_sum = array[i] + array[l] + array[r]
            if current_sum < 0:
                l += 1
            elif current_sum > 0:
                r -= 1
            else:
                magic_triplets.append([array[i], array[l], array[r]])
    return magic_triplets



def test():
    arr = [10, 3, -4, 1, -6, 9]
    print(threeSum(arr))

test()