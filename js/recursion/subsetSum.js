/*
    Problem Statement:
        - given an array and a target sum, print out every
        possible subset of the input array that adds up to the
        target sum

    approach:
        - generate subsets recursively,
            - reduce target sum by value of next element in array
            - if target sum == 0, we have found a valid subset
                - print it out and return (break recursive call)
            - else if target sum < 0, or index exceeds bounds of our array, 
            we have added an element to our subset that now makes it invalid
                - return 
            - else we have two choices, add next element to subset or not,
                - recursive call where we chose to add it to subset in one call
                - and another recursive call where we do not add it to the subset

*/

function helper(array, subset, targetSum, index) {
    // perfect sum found when targetSum = 0
    // print and return
    if (targetSum === 0) {
        console.log(subset)
        return
    }
    
    // if we have exceeded our target sum (< 0) or 
    // could exceed the array length (index === array.length)
    // we no longer need to go down this path, return
    if (targetSum < 0 || index === array.length) {
        return
    }   

    // recursive case where we do add element to subset
    subset.push(array[index])
    helper(array, subset, targetSum - array[index], index + 1);

    // recursive case where we do NOT add element to subset
    subset = subset.filter(element => element !== array[index]) // only keep elements not equal to the one at given index
    helper(array, subset, targetSum, index + 1)


}

function subsetSum(array, targetSum) {
    let subset = []
    return helper(array, subset, targetSum, 0)
}


let a = [1, 2]
let target = 3
// subsetSum(a, target)