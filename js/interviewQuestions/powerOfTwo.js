/*
    given a number N, return true if N is a power of 2
*/

function powerOfTwo(n) {
    let powersOfTwo = 1;

    while (powersOfTwo < n) {
        powersOfTwo *= 2;
    }

    return n === powersOfTwo
}

let n = 32
console.log(powerOfTwo(n))