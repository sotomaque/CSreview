/*
    You are a PM. Your latest build is broken. Each version is developed based on the previous version.
    if  something is broken, all the versions after it are broken as well.

    find the first bad version

    i.e.
        input array is binary array, true means broken, false means woring
        a = [false, true, true, true, true]
*/

/**
 * time-complexity:
 *  - O(log(n)) -> BINARY SEARCH!!
 */
function firstBadVersion(array) {

    // base case
    if (!array || !array.length) return -1

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let midpoint = Math.floor((left + (right - left)) / 2);
        // if we find a bad version
            // keep going back to find first bad version
        if (array[midpoint]) {
            if (left === midpoint) return left
            else right = midpoint;
        } else {
            left = midpoint + 1
        }
    }

    if (left === right && array[left]) return left
    else return -1
}

let a = [false, false, false, true, true] //3

let firstBadIndex = firstBadVersion(a)
console.log(firstBadIndex)
