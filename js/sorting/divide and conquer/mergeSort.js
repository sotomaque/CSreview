/**
 * time-complexity: 
 *  - height of recursion tree -> log(N)
 *  - problem size at the bottom of the tree -> 1
 *  -> O(nLog(n)) -> does not depend on whether the array is partially sorted or reverse 
 *     sorted
 *  - no distinction between best, worst, and average base times
 * 
 * space-complexity:
 *  - not in place as we need aux array's to store currently sorted arrays
 *  
 * stability:
 *  - STABLE
 * 
 * @param {array} someArray 
 */
function mergeSort(someArray) {
    if (someArray.length > 1) {

        const midPoint = someArray.length / 2
        const leftSubArray = someArray.slice(0, midPoint);
        const rightSubArray = someArray.slice(midPoint);

        // recursively call on each half
        mergeSort(leftSubArray);
        mergeSort(rightSubArray);

        // two iterators for traversing the two subproblems
        let i = 0;
        let j = 0;

        // iterator for the main list
        let k = 0;

        while (i < leftSubArray.length && j < rightSubArray.length) {
            if (leftSubArray[i] <= rightSubArray[j]) {
                someArray[k] = leftSubArray[i];
                i = i + 1;
            } else {
                someArray[k] = rightSubArray[j];
                j = j + 1;
            }
            k = k + 1;
        }

        // collect remaining values
        while (i < leftSubArray.length) {
            someArray[k] = leftSubArray[i];
            i = i + 1;
            k = k + 1;
        }
        while (j < rightSubArray.length) {
            someArray[k] = rightSubArray[j];
            j = j + 1;
            k = k + 1;
        }
    }

    return someArray
}


function test() {
    const inputArray = [5, 4, 3, 1, 7, 8]
    const result = mergeSort(inputArray);

    console.log(result)
}

test()