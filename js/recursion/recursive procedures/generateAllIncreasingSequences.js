/*
    Problem Statement:
        - given an array of random numbers,
            i.e. [1, 8, 2, 32, 42, 3, 81]
        - you can pick any n elements from the array
            -> i.e. [], [1], [8], ..., [1, 8, 32, 3],
            [1, 2, 32, 42, 81]
        - return all such subsets, where the values of the 
        subset are all in increasing order
            -> i.e. you could return [], [1], [8], [2], [1, 8, 32],
            but not [1, 2, 32, 3]
        
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

*/



function printAll(array, index = 0, state_taken = []) {

    // base case:
    if (index === array.length) {
        console.log(state_taken)
        return
    }

    // not taken case
    printAll(array, index + 1, state_taken)

    // taken case
    // if we haven't take anything yet, or what we are considering taking >= what we have taken
    if (!state_taken.length || array[index] >= state_taken[state_taken.length - 1]) {
        printAll(array, index + 1, [...state_taken, array[index]])
    }
}

let array = [2, 4, 3, 9, 7, 11, 13, 8]

printAll(array)