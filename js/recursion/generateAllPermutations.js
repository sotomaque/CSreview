/*

    Problem Statement:
        - given a string, i.e. taco
        - print out all possible permutations
            i.e. cato, taoc, toca, etc. 
        - you should also print out the existing string

    state:
        - current index
        - string (pattern so far)

    transition:
        - originally we are at index 0, string = _ (blank space * len(input))
        - we have the choice of where to put input[0], either at position 0, 1, 2, ..., len(input) - 1
            - we go down every path

        (0, _ _ _ _) =>
            (1, t _ _ _ ), (1, _ t _ _), (1, _ _ t _), (1, _ _ _ t) =>
                (2, t a _ _), (2, t _ a _), (2, t _ _ a), 
                (2, a t _ _), (2, _ t a _), (2, _ t _ a),
                (2, a _ t _), (2, _ a t _ ), (2, _ _ t a),
                (2, a _ _ t), (2, _ a _ _ t), (2, _ _ a t), 
                    ...

        as we can see this leaads to a n! runtime complexity:
            - first branching factor = 4, each one of those had a branching factor of 3, each on of those had a branching factor of 2
            ... 
                (n) * (n -1) * (n - 2) * ... * 1 = n!
            - this makes sense as there are n! permutations for an input of size n
        
*/


/**
 * time-complexity:
 *  - O(n!)
 * 
 * space-complexity:
 *  - O(n)
 *  
 * @param {*} inputString -> user defined string they wish to see permuted
 * @param {*} permutation -> current permutation (state)
 * @param {*} hasPlaced -> boolean array indicating whether we have placed char into permutation of not
 *  i.e. if we have used inputString[0] then hasPlaced[0] = true, false otherwise
 * @param {*} numPlaced -> count total number of chars we have placed in our permutation, once this reaches
 *  len(inputString), we are done permuting, print and return
 */
function printAllPermutationsOfAString(inputString, permutation = [], hasPlaced = new Array(inputString.length - 1), numPlaced = 0) {
    // base case
    if (numPlaced === inputString.length) {
        console.log(permutation)
        return
    }

    // transitions
    for (let i = 0; i < inputString.length; i++) {
        if (!hasPlaced[i]) {
            permutation[i] = inputString[numPlaced];
            hasPlaced[i] = true;
            printAllPermutationsOfAString(inputString, permutation, hasPlaced, numPlaced + 1)
            hasPlaced[i] = false;
        }
    }


}

let inputString = 'taco'
printAllPermutationsOfAString(inputString)