/*
  suppose you are given a node
  find its predecessor

  a predecessor is a node with the next smallest key
*/

/*
  - if we are given a root node, the predecessor must be
  in the left subtree.
  - the predecessor is the next smallest key, so the predecessor
  of the root in the maximum element of the left subtree.

  - the only node that cannot have a predecessor is the minimum
  value of a tree
*/

/**
 * time-complexity:
 *  - O(log n) <- dictated by the height of the tree
 *
 * space-complexity:
 *  - O(n)
 *
 * @param {node} root
 * @param {node} node
 * @return {node} predecessor
 */
function predecessor(root, node) {
  if (root === null) return null;
  // root has left subtree
  if (root.left !== null) {
    let current = root.left;
    while (curent.right !== null) {
      current = current.right;
    }
    // Predecessor must be max value in left subtree
    return current;
  }
  // node does not have a left subtree
  // we must look back up the ancestoral chain
  else {
    // search from node starting from root
    // while we are searching for node, we
    // want to find out the deepest such event
    // where we follow a right child pointer, after which
    // we only have left child pointers to our node
    // that node that had a left child is our predecessor
    let ancestor = null;
    let current = root;
    while (current.val !== node.val) {
      // figure out whether to follow left or right children
      if (node.key < current.key) {
        // whenever we take the right child, we want to record
        // what ancestor that was
        ancestor = current;
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return ancestor;
  }
}
