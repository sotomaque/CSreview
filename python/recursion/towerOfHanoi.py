
# objective is to move all N diskts from tower -> to tower
# utilizing aux tower if necessary

# time-complexity: O(2^n)
def towerOfHanoi(n, source, destination, aux):
    if n == 1:
        print('moving disk 1 from ', source, ' to ', destination)
    else:
        towerOfHanoi(n-1, source, aux, destination)
        print('Moving disk ', n, ' from ', source, ' to ', destination)
        towerOfHanoi(n-1, aux, destination, source)

def test():
    n = 4
    towerOfHanoi(n, "A", "B", "C")


test()