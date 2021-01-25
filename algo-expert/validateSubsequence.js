/*
  Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

  A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array.
  For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array
  and the array itself are both valid subsequences of the array
*/


/**
 * Solution 1:
 *  iterate through input array, try to iteratively match subsequence
 *  use an index that is incremented whenever there is a match
 *  at the end of iteration, if index === inputSequence.length then return true
 * 
 * time-complexity:
 *  - O(n)
 * 
 * space-complexity:
 *  - O(1)
 * 
 * @param {*} array 
 * @param {*} sequence 
 */
function validateSubsequence(array, sequence) {
  if (!array.length || sequence.length > array.length) return false;

  let arrayIndex = 0;
  let sequenceIndex = 0;

  while (arrayIndex < array.length && sequenceIndex < sequence.length) {
    // only increment sequenceIndex if match is found
    if (array[arrayIndex] === sequence[sequenceIndex]) {
      sequenceIndex++;
    }
    // always increment arrayIndex
    arrayIndex++;
  }

  return sequenceIndex === sequence.length;
}

