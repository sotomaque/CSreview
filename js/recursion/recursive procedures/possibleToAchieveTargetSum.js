/*
    Problem Statement:
        - given an array and a target, return true if there exists a combination 
        of the elments in the array that sum up to the target, false otherwise
        - input is array of integers, not only positive integers!

    - i.e. A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 14]
           target = 12
           output => true

    - state: state_taken, remaining target, index
    - tranistion: take next element or not

    - appraoch 1:
        - generate all possible subsets -> get their sums,
        if any of the sums === target, return true, 
        otherwise return false
            - time-complexity to generate all subsets:
                O(2^n)
            - time complexity to compare each subsets sum to target:
                O(n)
            - total time-complexity: O(2^n * n) 
            - space-complexity: O(2^n * n)
*/

/**
 * time-complexity: 
 *  -O(2^n)
 *      - for all we know we have to exhaustively search all possible subsets
 *      - so in the worst case we have 2^n subsets to search for
 * 
 * space-complexity:
 *  -O(n)
 *      - recursivion -> stack height = n 
 * 
 * @param {*} array - user input
 * @param {*} target - what we want our running sum to add up to
 * @param {*} index - current index we are looking at - default 0
 * @param {*} subset - subset current recursive stack is considering adding an element to - default []
 */
function possibleToAchiveTargetSum(array, target, index = 0, subset = []) {
    // base cases
    if (target === 0 && subset.length > 0) return true
    if (index === array.length) return false

    // dont take element
    let res1 = possibleToAchiveTargetSum(array, target, index + 1, subset)
    if (res1) return true; // if that previous recursive stack returned true, no need to continue

    // take elment
    let res2 = possibleToAchiveTargetSum(array, target - array[index], index + 1, [...subset, array[index]] )
    if (res2) return true; // if that previous recursive stack returned true, no need to continue
}

let A = [1,2,3,4,5]
let target = 0
let result = possibleToAchiveTargetSum(A, target)
result ? console.log(result) : console.log(false)