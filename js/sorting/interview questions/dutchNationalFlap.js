/*

    PROBLEM: Dutch National Flag

    - Given some balls of three colors arranged in a line, rearrange them such that all the red balls go first, then green and then blue ones.
    - Do rearrange the balls in place. A solution that simply counts colors and overwrites the array is not the one we are looking for.
    - This is an important problem in search algorithms theory proposed by Dutch computer scientist Edsger Dijkstra. Dutch national flag has three colors (albeit different from ones used in this problem).

    - Example
        - Input: [G, B, G, G, R, B, R, G]
        - Output: [R, R, G, G, G, G, B, B]



    - There are a total of 2 red, 4 green and 2 blue balls. In this order they appear in the correct output.

    - Constraints:
        - 1 <= n <= 100000
        - Do this in ONE pass over the array - NOT TWO passes, just one pass.
        - Solution is only allowed to use constant extra memory.

    - approach:
        [G, B, G, G, R, B, R, G]
        -> replace letters with numbers for simlicity
            -since we want R first 
                R -> 1
                G -> 2
                B -> 3

        input is now [2, 3, 2, 2, 1, 3, 1, 2]

        !!! we know we will want to pivot around 2
        
        have three pointers, low (= 0), current (= 0), and high (= len(a) - 1)

         [2, 3, 2, 2, 1, 3, 1, 2]
          ^                    ^
     low, current             high

        -> condition (1)

         [2, 3, 2, 2, 1, 3, 1, 2]
          ^  ^                 ^
         low current          high

         -> condition (3)

         [2, 2, 2, 2, 1, 3, 1, 3]
          ^  ^              ^
         low current       high

         -> condition (1)

         [2, 2, 2, 2, 1, 3, 1, 3]
          ^     ^           ^
         low    current    high

         -> condition (1) x 2

         [2, 2, 2, 2, 1, 3, 1, 3]
          ^           ^     ^
         low         current|   
                          high
         
         -> condition (2)

         [1, 2, 2, 2, 2, 3, 1, 3]
             ^           ^  ^
            low       current   
                          high

         -> condition (3)

         [1, 2, 2, 2, 2, 1, 3, 3]
             ^           ^
                         ^
            low       current,  
                        high
         
         -> condtion (2)

         [1, 1, 2, 2, 2, 2, 3, 3]
                ^           ^
                low      ^ current, 
                        high
        
         -> BREAK LOOP, return array

    in psudocode:

        while cur <= high:
            // first condition, current points to pivot, increment current
            if a[cur] === pivot:
                cur += 1;
            // second condition, current < pivot, swap low with cur, increment current and low
            if a[cur] < pivot:
                swap(a[cur], a[low])
                cur += 1
                low += 1
            // third condition, current > pivot, swap cur with high, decrement high
            if a[cur] > pivot:
                swap(a[cur], a[high])
                high -= 1
            
*/

/**
 * function swaps two elemetns of a given array in place
 * using es6 list deconstruction 
 * 
 * @param {array} list 
 * @param {index1} iA 
 * @param {index2} iB 
 */
function swap(list, iA, iB){
    [list[iA], list[iB]] = [list[iB], list[iA]];
    return list;
}



/**
 * time-complexity:
 *  - achieves this in one pass through the array
 *  - O(n)
 * 
 * space-complexity:
 *  - swaps in place; 
 *  - no recursive calls
 *  - O(1)
 * 
 * @param {array} data 
 */
function DutchNationalFlag(data) {

    if (!data) return;

    let pivot = 2; 

    let low = 0; // will end up pointing at first 2 in array
    let current = 0; // will point to element we are currently processing
    let high = data.length - 1; // will end up point at last 2 in array

    while (current <= high) {

        // condition 1: data[currnet] === pivot
        // - incrememnt current
        if (data[current] === pivot) current++;

        // condition 2: data[current]  < pivot
        // - swap(data[current], data[low])
        // - increment current and low
        else if (data[current] < pivot) {
            [data[current], data[low]] = [data[low], data[current]]
            current++;
            low++;
        }

        // condition 3: data[current] > pivot
        // - swap(data[current], data[high])
        // - decrement high
        else if (data[current] > pivot) {
            [data[current], data[high]] = [data[high], data[current]]
            high--;
        }
    }

    return data

}


let data = [2, 3, 2, 2, 1, 3, 1, 2, 1, 1, 2, 1, 2, 3, 2, 1]
// expected result = [1, 1, 2, 2, 2, 2, 3, 3]

let result = DutchNationalFlag(data);

console.log(data)