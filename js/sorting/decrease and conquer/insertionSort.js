/**
 * time-complexity: 
 *  - best case: O(n)
 *  - worst case: O(n^2)
 *  - average case: O(n^2)
 * 
 * space-complexity:
 *  - variables -> i, j, last
 *  - recursive heap calls ~ n - 1 times
 *  - O(n-1) + 3*O(1) = O(n)
 *  - IN PLACE ALGORITHM
 * 
 * @param {[int]} someArray - array we want sorted
 * @param {int} n - represents the length of the array 
 */
function insertionSortRecursive(someArray, n) {
    // base case
    if (n <= 1) return;

    // sort first n-1 elements
    insertionSortRecursive(someArray, n - 1);

    // insert last element into its correct position in sorted array
    let last = someArray[n - 1]
    let j = n - 2

    while (j >= 0 && someArray[j] > last) {
        // swap
        someArray[j + 1] = someArray[j]
        j = j - 1;
    }
    someArray[j + 1] = last
    return someArray
}

/**
 * time-complexity: 
 *  - best case: O(n)
 *  - worst case: O(n^2)
 *  - average case: O(n^2)
 * 
 * space-complexity:
 *  - variables:
 *      i, currentValue, position
 *  - O(1)
 *  - IN PLACE ALGORITHM
 * 
 * @param {[int]} someArray - array we want sorted
 * @param {int} n - represents the length of the array 
 */
function insertionSortIterative(someArray, n) {
    // base case
    if (n <= 1) return

    // bottom up approach
    for (let i = 1; i < n; i++) {
        let currentValue = someArray[i] // 11
        let position = i // 1
        
        while (position > 0 && someArray[position - 1] > currentValue) {
            // put larger value on the 'right'
            someArray[position] = someArray[position - 1]
            position = position - 1
        }
        // put smaller value on the 'left'
        someArray[position] = currentValue
    }
    
    return someArray
}

function test() {
    const testArray = [1, 2, 3, 4] 
    const n = testArray.length
    const result = insertionSortIterative(testArray, n)
    console.log(result)
}

test()