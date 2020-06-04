/*
    Problem Statement:
        - given a menu,
            i.e. salad, burger, cookie, soda, etc.
        - write a function that prints all the menu options that exist

    - approach:
        - for every element in the menu, we can either choose to include it 
        in our subset or not
            - so we will do both, we will, at every element, branch out and 
            generate two subsets, one where we chose to include it
            and one where we do not
*/


function helper(array, index, state_taken) {

    if (index === array.length) {
        console.log(state_taken)
        return
    }

    helper(array, index + 1, [...state_taken, array[index]])
    helper(array, index + 1, state_taken)
}

/**
 * time-complexity:
 *  -
 * 
 * space-complexity:
 *  -
 * 
 * @param {*} array 
 */
function printAllSubsets(array) {
    return helper(array, 0, [])
}


let menu = ['salad', 'cheeseburger']
console.log(`all possible menu combinations for the menu [${menu}]`)
printAllSubsets(menu)