/*
    PROBLEM STATEMENT:
        write a function to return the factorial of a given input
        i.e. function(6) = 6! = 720 (6*5*4*3*2*1)
    factorial definition:
        - base cases:
            1! = 0! = 1

        - general rule:
            n! = n * (n - 1) * (n - 2) * ... * 1
*/

/**
 * time-complexity:
 *  - O(n)
 * 
 * space-complexity:
 *  - recursive algorithm makes n calls
 *  - max recursive calls = n
 *  - O(n)
 * 
 * @param {*} n 
 */
function factorial_recursive(n) {
    if (n === 0) return 1
    
    return n * factorial_recursive(n - 1)
}


/**
 * time-complexity: 
 *  - O(n)
 * 
 * space-complexity:
 *  - O(1)
 * 
 * @param {*} n 
 */
function factorial_iterative(n) {
    let result = 1

    for (let i = 0; i < n; i++) {
        result += result * i
    }

    return result
}


const result1 = factorial_iterative(6)
const result2 = factorial_recursive(6)

console.log(result1, result2)