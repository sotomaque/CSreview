/*
    if you know that the values in an array are all within a relatively 'small' window, 
        i.e. students age 
    then we can sort our array without using a comparision based approach, and instead take
    a counting based appraoch.

    i.e. assume you have a DB of student records. You are asked to sort the array based on the
    students age. You know the students age range is between 1-9 (inclusive).

    You can have a table (hash map), and use it to keep track of the number of students of each age.
    You would use this table (hash map), once filled in, to generate the sorted array.

    i.e. 

        input = [9, 6, 3, 5, 2, 1, 2]
        
        hashmap = {
            1: 1,
            2: 2,
            3: 1,
            4: 0,
            5: 1,
            6: 1,
            7: 0,
            8: 0,
            9: 1
        }

        sortedArray = [1, 2, 2, 3, 5, 6, 9]
          
*/

/**
 * time-complexity:
 *  - let k be the range of the values in the array (i.e. max - min)
 *  - initialization + filling in age counts in hashmap: O(n) + O(k)
 *  - generating sortedArray from hashmap: O(n) + O(k)
 *  - total: O(n + k) <- linear time sorting algorithm when k is confined to a narrow range
 *
 * space-complexity:
 *  - O(k) auxilary space
 *  - no recursion
 *
 * stability:
 *  - current implementation -> no stability
 *  - if implemented with a data structure with FIFO attribute instead of dictionary, it is
 *    possible to be stable
 *
 * @param {*} someArray
 * @param {*} minRange
 * @param {*} maxRange
 */
function countingSort(someArray, minRange, maxRange) {
  let j = 0;
  let count = [];

  for (let i = 0; i <= maxRange; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < someArray.length; i++) {
    count[someArray[i]] += 1;
  }
  // iterate through 'count' array,
  // printing counts for given index in
  // right place in input array
  for (let i = minRange; i <= maxRange; i++) {
    while (count[i] > 0) {
      someArray[j] = i;
      j++;
      count[i]--;
    }
  }
  return someArray;
}

function test() {
  const array = [1, 2, 5, 8, 4, 2, 2, 4, 2, 9, 4, 3, 7, 8, 1];
  const result = countingSort(array, 0, 9);

  console.log(result);
}

test();
