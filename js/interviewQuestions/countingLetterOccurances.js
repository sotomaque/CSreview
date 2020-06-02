/**
 * function takes in a string and returns a map, where the key is a unique letter of the string, and
 * the value is the number of times that letter occurs in the string
 * 
 * time-complexity: 
 *  O(n) -> requires one single pass through the string
 * 
 * space-complexity:
 *  - auxilary space needed for resulting hashmap
 *  - local variables such as i, currentLetter 
 * 
 * possible improvement:
 *  - use an in-place sorting algorithm to sort the string, then 
 * iterate through sorted string to output the count of each letter
 *  - would save you space, might cost you time
 * 
 * @param {STRING} someString 
 */
function letterOccurances(someString) {

    if (!someString) return;

    let result = {}

    for (let i = 0; i < someString.length; i++) {
        let currentLetter = someString[i]
        if (result[currentLetter]) {
            result[currentLetter] = result[currentLetter] + 1
        } else {
            result[currentLetter] = 1
        }
    }

    return result
}


let input = 'interview kickstarter'
let result = letterOccurances(input)

console.log(result)