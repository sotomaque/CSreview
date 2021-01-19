/**
 * time-complexity:
 *   - O(nLogn)
 *
 * space-complexity:
 *   - NOT IN PLACE
 *   - O(n) + O(log(n))
 *
 * @param {*} nums
 */
function mergeSort(nums) {
  if (nums.length > 1) {
    // get a midpoint
    const midpoint = nums.length / 2;
    // split array at midpoint
    const left = nums.slice(0, midpoint);
    const right = nums.slice(midpoint);
    // recurse on either half
    mergeSort(left);
    mergeSort(right);
    // combine results (aka mergeing part of merge sort)
    let i = 0;
    let j = 0;

    // iterator for the auxilary array
    let k = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        nums[k] = left[i];
        i++;
        k++;
      } else {
        nums[k] = right[j];
        j++;
        k++;
      }
    }
    // collect remaining values
    while (i < left.length) {
      nums[k] = left[i];
      i++;
      k++;
    }
    while (j < right.length) {
      nums[k] = right[j];
      j++;
      k++;
    }
  }

  return nums;
}

const inputArray = [5, 4, 3, 1, 7, 8];
console.log(mergeSort(inputArray));
