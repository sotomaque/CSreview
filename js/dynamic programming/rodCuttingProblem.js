/*
    Problem Statement:
        - say there is a market for rods, where their length dicate their market value
            i.e. a rod of length 1 = $3, length 2 = $5, length 3 = $9, etc.
        - given a rod of length n, partition it into integer pieces such that you maximize the
        sum of the market value for each individual partition

        - recursive solution:
            if (n === 0):
                return 0
            else:
                return Math.max(
                    for (i in range 1, n):
                        price(i) + bp(n - i)
                )
*/

/**
 * time-complexity:
 *  - O(N^N) where N === param passed in (length)
 * 
 * space-complexity:
 *  - height of our recursive stack 
 *  - O(N)
 * 
 * @param {*} length 
 * @param {*} prices 
 */
function rodCutting(length, prices) {
    if (length === 0) return 0
    let result = -1
    for (let i = 1; i <= length; i++) {
        result = Math.max(result, prices[i] + rodCutting(length - i, prices))
    }
    return result
}

/**
 * time-complexity: 
 *  - O(N^2)
 * 
 * space-complexity:
 *  - O(N)
 * 
 * @param {integer} length 
 * @param {array} prices 
 * @param {array} memo - cached array; memo[i] => maximum price we can obtain for a rod of length i using
 *            our price structure
 */
function rodCuttingDP(length, prices, DP = new Array(length + 1).fill(-1)) {
    if (length === 0) return 0
    if (DP[length] !== -1) return DP[length]
    let result = -1
    for (let i = 1; i <= length; i++) {
        result = Math.max(result, prices[i] + rodCuttingDP(length - i, prices, DP))
        DP[length] = result
    }

    return DP[length]
}


let L = 6
let prices = [0, 1, 3, 3, 8, 8, 10] 

console.log(rodCuttingDP(L, prices)) // should be 11
