/*
    Problem Statement:
        - given a menu,
            i.e. salad, burger, cookie, soda, etc.
        - write a function that prints all the menu options that exist

    - approach:
        - for every element in the menu, we can either choose to include it 
        in our subset or not
            - so we will do both, we will, at every element, branch out and 
            generate two subsets, one where we chose to include it
            and one where we do not
*/

/**
 * time-complexity:
 *  - O(2^n)
 *
 * space-complexity:
 *  - O(2^n) (require all subsets of length 2 to generate a subset of length 3)
 *  - can be improved
 *
 * @param {array} array
 * @param {number} index
 * @param {array} state_taken
 */
function subsetsNaive(array, index = 0, state_taken = []) {
  if (index === array.length) {
    return console.log(state_taken);
  }

  helper(array, index + 1, [...state_taken, array[index]]);
  helper(array, index + 1, state_taken);
}

/**
 * time-complexity:
 *  - O(2^n)
 *
 * space-complexity:
 *  - O(n) this implementation achieves a DFS approach which helps us improve upon the
 * previous times. at any given time the maximum depth of the recursive stack is bound
 * by the height of the recursive tree (height = n).
 *
 * @param {array} array
 * @param {number} index
 * @param {array} state_taken
 */
function subsetsImproved(nums, state_taken = []) {
  if (nums.length === 0) {
    return console.log(state_taken);
  }
  // recurse passing array[1:] to two subcalls
  // dont add nums[0] to state taken -> pass same state_taken, and remove nums[0] from nums as new list to pick from
  subsetsImproved(nums.slice(1), state_taken); // exclude case
  subsetsImproved(nums.slice(1), [...state_taken, nums[0]]); // include cases
}

function printAllSubsets(array) {
  return subsetsImproved(array);
}

let nums = ['1', '2'];
console.log(`all possible subsets from our array [${nums}]`);
printAllSubsets(nums);
