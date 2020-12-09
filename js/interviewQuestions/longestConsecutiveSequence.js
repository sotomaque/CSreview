/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 *
 * i.e.
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation:
 *  - The longest consecutive elements sequence is [1, 2, 3, 4].
 *  - Therefore its length is 4.
 *
 * i.e 2
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 * Explanation:
 *  - The longest consecutive elements sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8]
 *  - Therefore its length is 9.
 */

/**
 * approach 1:
 *   - sort
 *   - traverse array
 *   - return longest consequitive subset of numbers
 *
 */

// O(nLog n) sort if i use tim sort
// O(n) to return longest consecutive subset of numbers

// therefore O(2nLog(n)) -> 2O(nLog(n)) -> O(nLog(n)) time-complexity
// worst case O(n) space-complexity if all items are in increasing order
function longestConecutiveSequence(arrayOfIntegers) {
  if (!arrayOfIntegers.length || !arrayOfIntegers.length > 0) return;
  if (arrayOfIntegers.length === 1) return 1;
  //
  arrayOfIntegers.sort((a, b) => (a < b ? -1 : 1));

  //
  let runningConsecuitiveNums = [];
  arrayOfIntegers.forEach((num, index) => {
    if (index === 0) {
      runningConsecuitiveNums.push(num);
    } else {
      if (
        num ===
        runningConsecuitiveNums[runningConsecuitiveNums.length - 1] + 1
      ) {
        runningConsecuitiveNums.push(num);
      }
    }
  });
  return runningConsecuitiveNums.length;
}

function longestConecutiveSequenceV2(arrayOfIntegers) {}

const input = [100, 4, 200, 1, 3, 2];
const res = longestConecutiveSequence(input);

console.log(`longest consecutive sequence in array: ${res}`);
