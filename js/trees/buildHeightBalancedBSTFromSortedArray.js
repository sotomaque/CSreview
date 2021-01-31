/*
  Given a sorted array (of all unique integers)
  return a Height Balanced BST
*/

// recursively
// pick middle element of the array to be the root
// left half of the array is all smaller than root and
//  all part of roots left subtree
// right half of the array is all larger than root and
//   all part of roots right subtree
// recurse down the tree repeating process

function constructTreeFromSortedArray(array) {
  let start = 0;
  let end = array.length - 1;
  helper(array, start, end);
}

/**
 * time-complexity:
 *  - O(nlogn)
 *
 * space-complexity:
 *  - O(logn)
 *
 * @param {*} array
 * @param {*} start
 * @param {*} end
 */
function helper(array, start, end) {
  // base case
  if (start > end) return;

  const midpoint = (end + start) / 2;
  // create new node from entry at midponit
  const root = new Node(array[midpoint]);
  // recurse
  root.left = helper(array, start, midpoint - 1);
  root.right = helper(array, midpoint + 1, end);

  return root;
}
