/*
    inspiration:
        - in merge sort, the real work came in combining the two subarrays once they were
        each sorted

        - for quick sort, the idea is to not split the subarrays based on position within
        the master array, but rather split them based on a certain value
            - the value we split them on is called the pivot

        -psuedocode:

            QuickSort(A):
                if (len(A) <= 1):
                    return
                pick some x = A[i] at random <- call this the pivot
                partion the rest of A into:
                    L (less than x) and
                    R (grateer than x)
                replace A with [L, x, R] (that is rearrange A into this order)
                QuickSort(L)
                QuickSort(R)

        - once the two subarrays are sorted, the master array is sorted, 
        therefore avoiding the costy combine step of merge sort

        - in quicksort, the method you chose to partion the array is what can make this a valuable
        sorting algorithm;

            - Lomuto's Partitioning: O(n) time, in place - Gold Standard
                - look at array[0], that value will be the pivot
                - have two pointers start at array[1]; 
                    - if the element you are looking at is greater than the pivot element
                        - mark that cell so that we know it will belong in the right subarray
                    - else mark the cell so we know it will belong in the left subarray
                    - fast pointer advances on every iteration, and will end the loop pointing at
                    the end of the array
                    - slow pointer only advances when we mark something that belongs to the 
                    left subarray
                        - should always point at last element of left subarray
                    - also, whenever the fast pointer encounters something that is < value of pivot,
                    advance slow pointer, swap element slow pointer is pointing at with element 
                    fast pointer is pointing at to avoid having discontigous regions

            i.e.
                A = [4, 2, 1, 7, 8, 3, 5, 6, 3]

                step (0): set A[0] as the pivot
                    - anything less than 4 will be in the left subarray
                    - anything greater than 4 will be in the right subarray
                
                step(1): pointer iteation
                    [4, 2, 1, 7, 8, 3, 5, 6, 3]
                        ^^
                    - two pointers first begin looiking at A[1] (ignoring A[0])
                        2 < 4 so we mark it as a left subarray
                        [4, 2(L), 1, 7, 8, 3, 5, 6, 3]
                    
                    - advance fast pointer
                    [4, 2(L), 1, 7, 8, 3, 5, 6, 3]
                        ^     ^

                    - (same as above, element is < pivot, mark as left, advance both pointers this time)
                    [4, 2(L), 1(L), 7, 8, 3, 5, 6, 3]
                                ^   ^

                    - now fast pointer envounters something greater than pivot
                        - mark as right subarray
                        - keep moving right pointer
                    [4, 2(L), 1(L), 7(R), 8, 3, 5, 6, 3]
                                ^         ^

                    - (same as above, element > pivot, mark as right, advance fast pointer)
                    [4, 2(L), 1(L), 7(R), 8(R), 3, 5, 6, 3]
                                ^               ^

                    - now fast pointer sees something smaller than pointer
                        - slow pointer moves up one position
                        - swaps values with fast pointer
                        - preserves contiguous nature of subarrays
                        - fast pointer advances again
                    [4, 2(L), 1(L), 3(L), 8(R), 7(R), 5, 6, 3]
                                     ^                ^

                    - fast pointer encountered something < pivot
                      1. increment slow pointer
                      2. swap slow and fast pointers
                    [4, 2(L), 1(L), 3(L), 8(R), 7(R), 5(R), 6(R), 3]
                                     ^                            ^
                1.  [4, 2(L), 1(L), 3(L), 8(R), 7(R), 5(R), 6(R), 3]
                                          ^                       ^
                2.  [4, 2(L), 1(L), 3(L), 3(L), 7(R), 5(R), 6(R), 8(R)]
                                          ^                       ^

                    - repeat until fast pointer hits end of array
                    [4, 2(L), 1(L), 3(L), 3(L), 7(R), 5(R), 6(R), 8(R)]
                                            ^                      ^

                    - now every element in left subarray < pivot && every element 
                    in the right subarray > pivot
                        - swap pivot (A[0]) with slow pointer
                    [4, 2(L), 1(L), 3(L), 3(L), 7(R), 5(R), 6(R), 8(R)]
                                          ^                       ^

                    - now call quickSort recursively on left and right subarrays

*/

/**
 * function returns a random int in range [min, max] inclusive
 *
 * @param {*} min
 * @param {*} max
 */
function getRandomInt(a, b) {
  let min = Math.ceil(a);
  let max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min + 1;
}

/**
 * function swaps two elemetns of a given array in place
 * using es6 list deconstruction
 *
 * @param {array} list
 * @param {number} i
 * @param {number} j
 */
function swap(list, i, j) {
  [list[i], list[j]] = [list[j], list[i]];
  return list;
}

/**
 * function which recursively calls itself to complete quicksort algo
 *
 * @param {} someArray
 * @param {*} startIndex
 * @param {*} endIndex
 */
function helper(someArray, startIndex, endIndex) {
  // base case
  if (startIndex >= endIndex) return;

  // get random pivot index
  const pivot_index = getRandomInt(startIndex, endIndex);

  // swap that element with first element of array
  someArray = swap(someArray, startIndex, pivot_index);

  // initialize pointers to begin iterating array
  let slow_pointer = startIndex;

  for (
    let fast_pointer = startIndex;
    fast_pointer <= endIndex;
    fast_pointer++
  ) {
    // advance fast pointer every iteration,
    // if fast pointer points at something smaller than what the slow pointer points at
    // incremement slow poitner and swap
    if (someArray[fast_pointer] < someArray[startIndex]) {
      slow_pointer = slow_pointer + 1;
      someArray = swap(someArray, slow_pointer, fast_pointer);
    }
  }
  // slow pointer now points at last element < pivot value
  // fast pointer now points at end of array

  // take pivot and insert it into its right place (where the slow pointer is pointing)
  someArray = swap(someArray, startIndex, slow_pointer);

  // recursively call quickSort on left / right partitions
  helper(someArray, startIndex, slow_pointer - 1); // left partition
  helper(someArray, slow_pointer + 1, endIndex); // right partition

  return;
}

/**
 * time-complexity:
 *  - best-case:  O(nLog(n))
 *  - worst-case:  O(n^2)
 *  - average-case: O(nLog(n))
 *
 * space-complexity:
 *  - in place (unlike merge sort)
 *  - recursive algorithm -> using space in call stack
 *
 * stability:
 *  - NOT STABLE
 *
 * @param {*} someArray
 */
function quickSort(someArray) {
  helper(someArray, 0, someArray.length - 1);
  return someArray;
}

function test() {
  let testArray = [4, 2, 1, 7, 8, 3, 5, 6];
  const result = quickSort(testArray);
  console.log(result);
}

test();
