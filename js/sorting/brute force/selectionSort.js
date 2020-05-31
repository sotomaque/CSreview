/*
    logic -
    - scan array from left to right and keep track of the current iterations minimum
    updating it in each step
    
*/


/**
 * time-complexity: 
 * - nexted for-loop: 
 *      O(n^2)
 * space-complexity:
 * - variables:
 *      min_index, i, j
 * - second data structure (optional if you want to return a new array)
 * - total O(1)
 * - IN PLACE ALGORITHM
 * 
 * @param {array} someArray 
 */
function selectionSort(someArray) {
    // for every element in the array
    for (let i = 0; i < someArray.length; i++) {
        // assume the element is the smallest element
        let min_index = i
        // iterate through remaining elements trying to find a smaller num to swap
        for (let j = i + 1; j < someArray.length; j++) {
            // if smaller num is found, update min_index 
            if (someArray[j] < someArray[min_index]) {
                min_index = j
            }
        }
        // once we have gone through all remaining elements
        // preform a swap
        [someArray[i], someArray[min_index]] = [someArray[min_index], someArray[i]]
    }   

    return someArray
}

function test() {
    const testArray = [64, 25, 12, 22, 11]
    const result = selectionSort(testArray)
    console.log(result)
}

test()