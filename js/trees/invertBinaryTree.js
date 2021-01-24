/**
 * time-complexity:
 *  - O(n) <- visit all nodes
 *
 * space-complexity:
 *  - in place (no aux data structure)
 *  - recursive stack space
 *  - max recursive stack height = max height of tree
 *  - if balanced binary tree -> O(log(n))
 *
 * @param {*} node
 */
function invertTree(node) {
  // base case
  if (!node.left && !node.right) return;

  // swap
  const temp = node.left;
  node.left = node.right;
  node.right = temp;

  // recurse
  invertTree(node.left);
  invertTree(node.right);
}
