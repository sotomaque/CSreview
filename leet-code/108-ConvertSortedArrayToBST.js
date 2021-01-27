/*
  Given an array where elements are in sorted (asc) order,
  convert it to a height balanced BST.

  i.e.
    input = [-10, -3, 0, 5, 9]
    one possible output = [0,-3,9,-10,null,5], which represents the following height balanced BST:

        0
      / \
    -3   9
    /   /
  -10  5
*/

// Tree Creation
// TOP DOWN:
// 1. figure out which element is root
//    create node out of it
// 2. recursively construct left subtree
//    recursively construct right subtree

// given a sorted array, root will be at 'middle' position

/**
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(lgn) (call stack space is bounded by max height of tree log n)
 *
 * @param {*} nums
 */
function sortedArrayToBST(nums) {
  // base case
  if (!nums.length) return null;

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  // recursive case
  // subtrees are BSTs as well
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  // return root
  return root;
}
