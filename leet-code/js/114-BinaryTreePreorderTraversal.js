/*
  Given the root of a binary tree, return the preorder traversal of its nodes' values.
  Solve this both recursively and iteratively

  iterative solution requires an explicity stack (instead of implicit recursive stack)
  
  idea:
    initialize empty stack
    
*/

function preOrderSequence(root) {
  if (!root || root === null || typeof root === 'undefined') return [];
  const s = new Stack();
  s.push(root);
  const result = [];
  while (!s.isEmpty()) {
    const node = s.pop();
    result.push(node.val);
    // first check right child
    if (node.right) {
      s.push(node.right);
    }
    // then left child (so we can pop left child first)
    if (node.left) {
      s.push(node.left);
    }
  }
  return result;
}
