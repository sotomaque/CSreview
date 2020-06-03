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

let A = [3, 5, -4, 8, 11, 1, -1, 6, 0]
let target = 121

let results = threeSum(A, target)

results.length 
    ? console.log(`three numbers in [${A}] that add up to ${target} are: [${results}]`)
    : console.log(`no three numbers in [${A}] add up to ${target}`)