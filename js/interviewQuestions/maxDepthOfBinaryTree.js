/*
    given a root node, return the max depth of a tree
*/

/**
 * time-complexity:
 *  - O(n), must visit every node
 *
 * space-complexity:
 *  - O(log(n)), recursion
 *
 * @param {*} root
 */
function heightOfTree(root) {
  if (root === null) return 0;

  let leftDepth = heightOfTree(root.left);
  let rightDepth = heightOfTree(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}
