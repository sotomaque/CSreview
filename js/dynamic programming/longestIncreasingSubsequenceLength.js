/*
    Problem Statement:
        - given an array of random numbers,
            i.e. [1, 8, 2, 32, 42, 3, 81]
        - you can pick any n elements from the array
            -> i.e. [], [1], [8], ..., [1, 8, 32, 3],
            [1, 2, 32, 42, 81]
        - return the length of the longst increaing subsequence
        
        - NOTE:
            - order matters, we cannot rearrange elements, we can only 
            make a decision, do we want to take this element or not
    
    state:
        - current index of the array
        - current subsequence

    transitions:
        - take number or dont take number

    guard: 
        - can i take this next number?
            - will it break the ascending requirement?
                - if so, dont
                - otherwise, do

    - DP APPROACH:
            parameters:
                i: 0 -> N (inclusive)
                j: 0 -> N (inclusive)

            therefore 
                dp: [i][j]

            our recursion looks like:
                    -------------------
    RETURN VALUE  ->|*|               |     
                    -------------------
                    |      |x|        |     - recursion always goes down bc we do i + 1 in our implementation           
                    --------|---------- (i)         
                    |       v         |
                    -------------------
                    |*|*|*|*|*|*|*|*|*| <- BASE CASE (where i === n)
                    -------------------
                            (j)

*/


/**
 * time-complexity:
 *  -
 * 
 * space-complexity:
 *  -
 * 
 * @param {ARRAY} array - given array
 * @param {int} index - index we are currently examining in our array
 * @param {int} prev - index of the previous element in the array that we picked for our subsequence
 */
function longestIncreasingSubsequence(array, index = 0, prev = -1) {

    // base case:
    if (index === array.length) {
        return 0
    }

    // dont take element at i = index
    let m = longestIncreasingSubsequence(array, index + 1, prev)

    // take element at i = index
    // if we haven't take anything yet, or what we are considering taking >= what we have taken
    if (prev === -1 || array[index] > array[prev]) {
        let didTakeI = longestIncreasingSubsequence(array, index + 1, index)
        m = 1 + Math.max(m, didTakeI)
    }

    return m
}

let array = [2, 4, 3, 9, 7, 11, 13, 8]

let res = longestIncreasingSubsequence(array)

console.log(res)