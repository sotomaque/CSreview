/*
  given a BST, write a function that return the Kth smallest element
*/

/**
 * intutiion: we want to return the Kth left most element
 * if we do an inorder traversal, then we can return the Kth element in that list
 *
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(n)
 *
 * @param {*} node
 * @param {*} k
 */
function KthSmallestElementInBST(root, k) {
  // nums = [x, y] where x is where we are, and y = the kth smallest element
  let nums = [];
  inOrder(root, nums, k);
  return nums[1];
}

function inOrder(root, nums, k) {
  // base case
  if (root === null) return;

  inOrder(root.left, nums, k);
  if (++nums[0] === k) {
    nums[1] = root.val;
    return;
  }
  inOrder(root.right, nums, k);
}
