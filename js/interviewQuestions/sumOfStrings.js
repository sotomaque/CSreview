/*
    PROBLEM STATEMENT:
    - write a function that takes in two strings, and
    returns the sum of them, as a string
*/

/**
 * function returns a string representation of the sum of the two inputs
 * 
 * PROBLEM: 
 *  naive because if we pass in a huge parameter, the result will be something
 *  in scientific notation
 * 
 *  not the desired result
 * 
 * @param {STRING} a 
 * @param {STRING} b 
 */
function sumNaive(a, b) {
    let result = Number(a) + Number(b);
    return result.toString();
}


/**
 * function returns a string representation of the sum of the two inputs
 * 
 * PROBLEM: 
 *  it works, however it does not convey a deep problem solving ability
 *  question can easily be modified to say 'assume you cannot use BigInt'
 * 
 * @param {STRING} a 
 * @param {STRING} b 
 */
function sumNaive2(a, b) {
    let result = BigInt(a) + BigInt(b);
    return result.toString();
}

/**
 * function returns a string representation of the sum of the two inputs
 *    
 *   123
 * + 456
 * -----
 *   579
 * 
 * - approach, start with last digit of each param
 * - while params have a length
 *   - cast them to nums, and sum, if result is >= 10, set boolean 'isCarrying' to true
 *   - modify resulting string with current sum incorporated
 *   - remove last digit from each param
 * - return result (potentially concatonating a 1 in front of the result if isCarrying is still true)
 * 
 * time-complexity:
 *  - O(max(a.length, b.length))
 * 
 * space-complexity:
 *  - variables:
 *      result, isCarrying, num
 *  - not recursive
 *  - therefore => O(1)
 * 
 * @param {STRING} a 
 * @param {STRING} b 
 */
function sum(a, b) {
    let result = '';
    let isCarrying = false;

    while (a.length || b.length) {
        // either last digit of param or 0 bc loop continues while either of the two digits has a length
            // or not and
        // therefore when we are adding 10000 and 1, we wont have digits for 1 after 1 iteration
        // so we can simply have a 0 in its place
        let num = 
            parseInt(a.substring(a.length - 1) || 0) + 
            parseInt(b.substring(b.length - 1) || 0) +
            isCarrying; // will be 1 if true, 0 otherwise
                
        isCarrying = num >= 10;

        // if num is a two digit number, we only want the last number 
            // max be 2 digits as biggest sum would be 9 + 9 = 18
        // i.e. if num = 14, we only want the 4, the one will he incorporated with iscarrying and adding the next round of digits
        result = `${num.toString().split('')[1] || num}${result}`
        
        // remove last two digits of both params
        a = a.slice(0, -1);
        b = b.slice(0, -1);
    }

    return isCarrying ? `1${result}` : result;

}


console.log(sumNaive('12345235235235351235125235239', '56'))
console.log(sumNaive2('12345235235235351235125235239', '56'))
console.log(sum('12345235235235351235125235239', '56'))