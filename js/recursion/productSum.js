/*

    Problem Statement:
        - Write a function that takes in a "special" array and returns its product sum. 
            - A "special" array is a non-empty array that contains either integers or other "special" arrays. 
            - The product sum of a "special" array is the sum of its elements, 
            where "special" arrays inside it are summed themselves and then multiplied by their level of depth.

        - For example, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is x + 2y + 2z.

        - you can assume the array will only consist of either integers or lists, no bad data.

*/


function productSum(array, multiplier = 1) {
    
    let runningSum = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'object') {
            runningSum += productSum(array[i], multiplier + 1)
        } else {
            runningSum += array[i]
        }
    }

    return multiplier * runningSum;
}

let array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]] // should be = 12
let result = productSum(array)

console.log(result)