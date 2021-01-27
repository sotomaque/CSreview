/*
  Given a binary tree and a sum, determine if the tree
  has a root-to-leaf path such that adding up
  all the values along the path equals the given sum
*/

/**
 * time-complexity:
 *  - worst case, must visit every node
 *  - O(n)
 *
 * space-complexity:
 *  - recursive stack = height of tree = O(log(n))
 *  - aux space required for stack,
 *      - again worst case, stack depth = number of nodes in a tree -> O(n)
 *  - = O(n) + O(log(n))
 *  - O(log(n))
 *
 * @param {*} root
 * @param {*} sum
 */
function pathSum(root, target) {
  if (!root || root === null) return false;
  if (!root.left && !root.right) {
    return target === root.val;
  } else {
    return (
      pathSum(root.left, target - root.val) ||
      pathSum(root.right, target - root.val)
    );
  }
}
