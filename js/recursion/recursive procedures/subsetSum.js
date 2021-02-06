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
function* subsetSum(nums, sum, subsets = []) {}

const nums = [1, 2, 4, 20, 5, 19, 6, 14, 13, 21];
const target = 17;

console.log([...subsetSum(nums, 25)]);
