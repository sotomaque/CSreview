/*
  Given two BSTs
  return true if both are identical in structure and value
  falase otherwise

*/

function areBSTsTheSame(root1, root2) {}

// compare inorder traversals
/*
  Given two BSTs
  return true if their in-order traversals are identical
  false otherwise

  Note: do this without traversing the entire tree
*/

function areTwoBSTsInOrderTraversalsTheSame(root1, root2) {}

// Left subtree -> Node -> Right subtree
function inOrderDFS(root) {
  if (root === null) return;
  // print here -> pre order
  if (root.left) {
    preOrderDFS(root.left);
  }
  // print here -> in order
  console.log(root.value);
  if (root.right) {
    preOrderDFS(root.right);
  }
  //  print here -> post order
}
