/*
    given one arrays
    print the longest increasing subsequence

    DP appraoch:
        - create two arrays
            - one will store the legnth of the longest subsequence 

*/

function LIS(array) {
    let lengths = new Array(array.length - 1).fill(1)
    let sequences = new Array(array.length - 1).fill(null)
    let maxLengthIdx = 0;

    for (let i = 0; i < array.length; i++) {
        let current_max = 0; 
        for (let j = 0; j < i; j++) {
            if (array[j] < array[i] && (lengths[j] + 1) > current_max) {
                current_max = (lengths[j] + 1) ;
                lengths[i] = current_max;
                sequences[i] = j
            }
        }
        if (lengths[i] >= lengths[maxLengthIdx]) {
            maxLengthIdx += 1
        }
    }

    return buildSequence(array, sequences, maxLengthIdx - 1)
}

function buildSequence(array, sequences, index) {

    let sequence = []

    while (index !== null) {
        sequence.push(array[index])
        index = sequences[index]
    }
    return sequence.reverse()
}

array = [5, 7, -24, 12, 10]
let res = LIS(array)

console.log(`longest increasing subsequence is `, res)