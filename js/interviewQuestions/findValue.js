/*
This question is asked by Google. Given the reference to the root of a binary search tree
and a search value, return the reference to the node that contains the value if it exists
and null otherwise. Note: all values in the binary search tree will be unique.
*/

/**
 * Runtime: O(log(N)) where N is the number of nodes in our binary search tree(assuming our tree is balanced).
 * Space complexity: O(log(N)) where N is the number of nodes in our binary search tree (assuming our tree is balanced).
 *
 * This extra space is as a result of the recursive calls on the stack.
 */
const findValue = (root, val) => {
  if (!root) return null;
  else if (root.val === val) return root;
  else if (val < root.val) return searchBST(root.left, val);
  else return searchBST(root.right, val);
};
