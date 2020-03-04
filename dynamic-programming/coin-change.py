
# Coin Change
"""
    - problem statement:
        - you are a cashier instructed to give out change using the fewest possible number of coins
            - all the change you give out is given out strictly in coins
        - given:
            - coins of diff denominations
                i.e. [1, 2, 5] (unlimited supply of each such coin)
            - and a total "amount" of money
                i.e. amount = 11
                => output [5, 5, 1] == 3 coins
        - compute the fewest number of coins that you need to make up that amoung.
        - if there is no valid answer, return -1        
"""
import math

# time-complexity:
    # in terms of amount, a, and number of coins, k
    # O(a*k)
def coinChange(coinList, amount):
    # initialize cache array of size amount + 1
    cache = [math.inf] * (amount + 1)

    # base case:
    # cache[0] = 0 because if you want to construct an amount = 0 you dont need any coins
    cache[0] = 0
    # cache[1] = 1 if one of the coin denomination = 1, otherwise this stays as undefined / null
    if 1 in coinList:
        cache[1] = 1

    # traverse the array systematically
    for i in range(1, amount + 1):
        # compute and cache the solution to the subproblem of size i
        # since we will have k subproblems, where k is the size of the coins array
        # it is possible that some of these subproblems lead to negative indecies, in which case we want
        # to ignore those subproblems

        # i.e. when we are just starting and want to know how many optimal way of making change for 2 cents
        # but our coins array has [1, 3, 4, 5], we doint want to consider 3, 4, or 5 as subproblems
        for coin in coinList:
            if i - coin >= 0:
                cache[i] = min(cache[i], cache[i-coin])
        # we have now looked at the solution of all of our subordiantes and determined which is the best
        # now we can finalize the optimal solution value by adding one to the previous optimal value
        cache[i] += 1

    # return cahce[amount]
    return cache[amount]

def test():
    coins = [1, 5, 7]
    amount = 10
    result = coinChange(coins, amount)
    print(result)

test()