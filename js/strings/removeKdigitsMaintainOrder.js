
/*
    Find smalles number by removing 'k' digits while
    maintaining order of digits
*/

// i.e.
//   input = '3194' 
//   k = 2
//   output = 14

// bruteforce approach
//   enum all strings 
//   for each char choose whether to keep or remove the char
//   repeat until we have removed k elements
//   return min

let globalMin = Number.MAX_VALUE

function removeKandMaintainOrder(inputString, k, idx) {
    if (k === 0) {
        globalMin = Math.min(Number(inputString), globalMin);
        return
    } 

    removeKandMaintainOrder(inputString, k, idx + 1);
    inputString.remove(idx)
    removeKandMaintainOrder(inputString, k, idx + 1);
}

// sliding window approach
/*
    going from left to right side, 
    have a window of size k + 1
    find the smallest digit in the window
    drop everything to the left of that digit
    copy that digit to the output
    slide window

    O(n)
*/

