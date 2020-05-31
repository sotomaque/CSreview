// controlling set is a set of letter
// that appear in a string

// i.e. controling set = { 'l', 'r', 'w' }
//  string = 'lettersw' 
// our controlling set controls the string as there 
// bc there is at least one instance of 'l', 'r', and 'w' in the string
//


// problem statement: given a string, what is the shortest substring constolled by the set
// i.e. controling set = { 'l', 'r', 'w' }
// i.e. string = 'helloworld'
// findSmallestSubStr(inputString, controllingSet) = 4 => 'worl'

// brute force complexity for finding all substrings -> n^2 + n to check the substring => overall => n^3

function findSmallestSubStrBruteForce(inputString, controllingSet) {

    let smallestLen = Number.MAX_VALUE;

    // enum all substrings
    for (i = 0; i < inputString.length; i++) {
        // for each substring, check to see if controlled by set
        for (j = i; j < inputString.length; j++) {
            let temp = new Set(controllingSet);
            // itereate over the string
            for (k = i; k <= j; k++) {
                temp.delete(inputString[k]);
            }

            if (temp.size === 0) {
                // we have found every char from the CS input in our string input
                // therefore the string is controlled by the set

                // update global minimum
                // minimum of either the previous smallest len or the length of the substring we looked at
                // + 1 bc if i and j point to same char in a string, that string has a length of 1
                smallestLen = Math.min(smallestLen, j - i + 1)
            }
        }
    }

    return smallestLen === -1 ? -1 : smallestLen
}

// optimization -> n^2
function findSmallestSubStr1(inputString, controllingSet) {

    let smallestLen = Number.MAX_VALUE;

    // enum all substrings
    for (i = 0; i < inputString.length; i++) {

        let temp = new Set(controllingSet);

        // for each substring, check to see if controlled by set
        for (j = i; j < inputString.length; j++) {
            // itereate over the string
            temp.delete(inputString[j]);
        
            if (temp.size === 0) {
                // we have found every char from the CS input in our string input
                // therefore the string is controlled by the set

                // update global minimum
                // minimum of either the previous smallest len or the length of the substring we looked at
                // + 1 bc if i and j point to same char in a string, that string has a length of 1
                smallestLen = Math.min(smallestLen, j - i + 1)
            }
        }
    }

    return smallestLen === -1 ? -1 : smallestLen
}

// optimization -> n -> sliding window
function findSmallestSubStr1(inputString, controllingSet) {

    let smallestLen = Number.MAX_VALUE;

    // enum all substrings
    for (i = 0; i < inputString.length; i++) {

        let temp = new Set(controllingSet);

        // for each substring, check to see if controlled by set
        for (j = i; j < inputString.length; j++) {
            // itereate over the string
            temp.delete(inputString[j]);
        
            if (temp.size === 0) {
                // we have found every char from the CS input in our string input
                // therefore the string is controlled by the set

                // update global minimum
                // minimum of either the previous smallest len or the length of the substring we looked at
                // + 1 bc if i and j point to same char in a string, that string has a length of 1
                smallestLen = Math.min(smallestLen, j - i + 1)
            }
        }
    }

    return smallestLen === -1 ? -1 : smallestLen
}


function test() {
    const inputString = 'helloworld'
    const controllingSet = new Set();
    controllingSet.add('l')
    controllingSet.add('r')
    controllingSet.add('w')
    console.log(`input string: ${inputString}`)
    console.log('input controlling set: ', controllingSet.keys())
    const output = findSmallestSubStr1(inputString, controllingSet)

    console.log(`result: ${output}`)
}

test()