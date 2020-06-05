/*
    PROBLEM STATEMENT:
        - given an array and a target sum,
        return three numbers from the array which add up to the target sum

        - you can assume that max one set of three numbers will add up to the target sum
        - you cannot add a number to itself in order to obtain the target sum
        - the length of the list returned must either be 0 if no three values
        add up to the target sum, or 3

    -i.e. 
        - A = [3, 5, -4, 8, 11, 1, -1, 6, 0]
        - target = 10
        - result = [-1, 11, 0] (in any order)

        current = 3


*/


/**
 * time-complexity:
 *  - O(2n) = O(n)
 * 
 * space-complexity:
 *  - dictionary of max size = unique number of elements in array
 *  - auxilary array to hold results = max length of 2
 *  - O(1) + O(k) where k = number of unique elments in array
 *  -> O(k)
 * 
 * @param {*} array 
 * @param {*} targetSum 
 */
function twoSum(array, target) {
    let results = []
    let myDict = {}

    for (let i = 0; i < array.length; i++) {
        if (array[i] in myDict) {
            myDict[array[i]] += 1
        } else {
            myDict[array[i]] = 1
        }
    }

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        myDict[current] -= 1
        let remainder = target - current;
        if (remainder in myDict && myDict[remainder] !== 0) {
            results.push(remainder, Number(current))
            return results
        }

    }

    return results
}


/**
 * time-complexity:
 *  - calls twoSum (which is O(n)) n times => O(n^2)
 *  - O(n^2)
 * 
 * space-complexity:
 *  - maintaines a dictionary of max size = unique number of elements in array
 *  - auxilary array to hold results = max length of 3
 *  - O(1) + O(k) where k = number of unique elments in array
 *  -> O(k)
 * 
 * @param {*} array 
 * @param {*} targetSum 
 */
function threeSum(array, target) {
    let results = []
    // populate dictionary with key: value => { element: count }
    let myDict = {}

    for (let i = 0; i < array.length; i++) {
        if (array[i] in myDict) {
            myDict[array[i]] += 1
        } else {
            myDict[array[i]] = 1
        }
    }

    // look at first element of array,
    // subtract it from target
    // do twoSum on remainder

    for (let i = 0; i < array.length - 1; i++) {
        let current = array[i]
        let remainder = target - current
        let newArray = array.slice(i + 1)
        let twoSumResults = twoSum(newArray, remainder);
        if (twoSumResults.length) {
            results.push(twoSumResults, current)
            return results.flat()
        }
    }

    return results
}


/***
 * Three pointer approach
 *  - first sort array
 *  - have three pointers, left, currrent, right
 * 
 * time-complexity:     
 *  - still approaches O(n^2)
 * 
 * space-complexity:    
 *  -O(k) where k is the total # of magic triplets * 3
 *      
 */
function threeSumAlt(array, target) {

    let results = []
    if (!array.length) return results

    array.sort((a, b) => {return a - b})
    let current_sum = 0;
    let R = array.length - 1;

    // if we change the second constraint to current < array.length instead
    // of current < array.lenght - 2, on the last iteration, current = the 
    // last element of the array, left will exceed the array bound, and right
    // right will still be the last element of the array
    for (let current = 0; current < array.length - 2; current++) {

        // since we only want to add unique magic triplets, 
        if (current > 0 && array[current] === array[current - 1]) continue

        let L = current + 1;

        while (L < R) {
            current_sum = array[L] + array[current] + array[R];

            if (current_sum === target) {
                results.push([array[L], array[current], array[R]]);
                break
            }
            
            else if (current_sum < target) {
                L += 1
            }

            // current_sum > target -> biggest number is too big -> R -= 1
            else {
                R -= 1
            }
        }
    }

    return results

}


let A = [10, 3, -4, -4, -4, 1, 1, 1, 1, -6, 9, 0, 0, 0]
let target = 0
console.log(A.sort((a, b) => {return a - b}))
// let results = threeSum(A, target)

// results.length 
//     ? console.log(`three numbers in [${A}] that add up to ${target} are: [${results}]`)
//     : console.log(`no three numbers in [${A}] add up to ${target}`)

let results = threeSumAlt(A, target)

results.length 
    ? console.log(`three numbers in [${A}] that add up to ${target} are:`, results)
    : console.log(`no three numbers in [${A}] add up to ${target}`)