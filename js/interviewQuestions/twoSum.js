/*
    PROBLEM STATEMENT:
        - given an array and a target suum,
        return two numbers from the array which add up to the target sum

        - you can assume only two numbers (max) will add up to the target sum

        - you cannot adda  number to itself in order to obtain the target sum

        - the length of the list returned must either be 0 if no two values
        add up to the target sum, or 2

    -i.e. 
        - A = [3, 5, -4, 8, 11, 1, -1, 6]
        - target = 10
        - result = [-1, 11] (in any ordeer)

*/

// approach - two for loops

/**
 * time-complexity:
 *  -O(n^2)
 * 
 * space-complexity:
 *  - only auxilary space used is array of max length 2 to return
 *  - O(1)
 * 
 * @param {*} array 
 * @param {*} target 
 */
function solution1TwoSum(array, target) {
    let results = []

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                results.push(array[i], array[j])
                return results
            }
        }
    }

    return results
}

// go through array once, populating dictionary with 
//    key: value => element: count
// go through dictionary once, grabbing each key, and seeing 
// if targetSum - key is in dictionary
// if so, append to results and return

/**
 * time-complexity:
 *  - O(2n)
 * 
 * space-complexity:
 *  - dictionary of max size = unique number of elements in array
 *  - auxilary array to hold results = max length of 2
 *  - O(1) + O(k) where k = number of unique elments in array
 *  -> O(k)
 * 
 * @param {*} array 
 * @param {*} targetSum 
 */
function twoNumberSum(array, targetSum) {
    let results = []
      let myDictionary = {}
      
      for (let i = 0; i < array.length; i++) {
          if (array[i] in myDictionary) {
            myDictionary[array[i]] += 1
          } else {
            myDictionary[array[i]] = 1
          }
      }

      for (let i = 0; i < array.length; i++) {
        let key = array[i]
		myDictionary[key] -= 1
		let remainder = targetSum - key;
		if (remainder in myDictionary && myDictionary[remainder] !== 0) {
			results.push(remainder, Number(key))
			return results
		}
      }
    
      return results
}

let A = [3, 5, -4, 8, 11, 1, -1, 6]
let target = 10

let results = twoNumberSum(A, target)
console.log(results)