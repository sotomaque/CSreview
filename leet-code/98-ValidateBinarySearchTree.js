/*
  Given the root of a binary tree, determine if it is a valid binary search tree (BST).

  A valid BST is defined as follows:

  The left subtree of a node contains only nodes with keys less than the node's key.
  The right subtree of a node contains only nodes with keys greater than the node's key.
  Both the left and right subtrees must also be binary search trees.
*/

/**
 * time-complexity:
 *  - O(n) (must visit every node)
 *
 * space-complexity:
 *  - O(log n) (max depth of recursion)
 *
 * @param {*} root
 * @param {*} min
 * @param {*} max
 */
function isValidBST(root, min, max) {
  // guard(s)
  if (!root) {
    return true;
  }
  // base case(s)
  if (min !== undefined && root.val <= min) {
    return false;
  }
  if (max !== undefined && root.val >= max) {
    return false;
  }
  // return && of both children
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}
