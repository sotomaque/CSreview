/*
  Given a binary tree, determine if it is height-balanced.
  For this problem, a height-balanced binary tree is defined as:
  
  Note: a binary tree in which the left and right subtrees of every
  node differ in height by no more than 1.

  Why do we need height balanced trees?
    if your tree is not height balanced, the logn
    traversal assumption does not hold

    i.e. a linked list is an unbalanced tree where
    all of its childredn can be thought of as either
    all left or all right children
*/

/*
  Approach:
    Bottom up DFS
    pass up the height of my left child and the height of my right child to my parent

    if a parent sees one of its children heights is > 1 + the other childs height -> return false
    else if we get to the root and the diff between its child heights <= 1 -> return true
*/
var isBalanced = function (root) {
  // base case
  if (!root || root === null || typeof root === 'undefined') return true;

  //  get height of children
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  // if height diff > 1 -> false; otherwise -> recurse
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  } else {
    return isBalanced(root.left) && isBalanced(root.right);
  }
};

function height(node) {
  if (node === null) return 0;
  return Math.max(height(node.left), height(node.right)) + 1;
}
