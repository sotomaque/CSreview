/*
  suppose you are given a node
  find its successor

  a successor is a node with the next largest key
*/

/*
  - if we are given a root node, the sucessor must be
  in the right subtree.
  - the successor is the next largest key, so the successor
  of the root in the minimum element of the right subtree.

  - the only node that cannot have a successor is the maximum
  value of a tree

  - so how do we find the successor of leaf nodes, since
  they can have successors?

  - if a given node has a right subtree, then the successor
  of the node must in that subtree

  - if a node is a leaf node, and a left child of its parent,
  then the parent may be the successor

  in general:
    - if there is a right subtree: 
      - the minimum value of that subtree is the successor
    - else if K is the left child of its parent?
      - the parent of K is its successor
    - else if K is the right child of its parent:
      - look up until we find a node that is an ancestor of K and a left
      child of its parent 

  in other words:
    - do you have a right subtree? the minimum value of that subtree is the successor
    - else, go up until we "turn right"
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
 * @return {node} successor
 */
function successor(root, node) {
  if (root === null) return null;
  if (root.right !== null) {
    let current = root.right;
    while (curent.left !== null) {
      current = current.left;
    }
    return current;
  }
  // node does not have a right subtree
  // we must look back up the ancestoral chain
  else {
    // search from node starting from root
    // while we are searching for node, we
    // want to find out the deepest such event
    // where we follow a left child pointer, after which
    // we only have right child pointers to our node
    // that node that had a left child is our successor
    let ancestor = null;
    let current = root;
    while (current.val !== node.val) {
      // figure out whether to follow left or right children
      if (node.key < current.key) {
        // whenever we take the left child, we want to record
        // what ancestor that was
        ancestor = current;
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return ancestor;
  }
}
