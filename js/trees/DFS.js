/**
 * time-complexity:
 *   - O(n) <- must visit every node
 *
 * space-complexity:
 *   - O(log n) <- no explicit aux space,
 * implicit stack space (capped by height of tree)
 *
 * @param {*} root
 */
function preOrderDFS(root) {
  if (root === null) return;
  // print here -> pre order
  console.log(root.value);
  if (root.left) {
    preOrderDFS(root.left);
  }
  // print here -> in order
  if (root.right) {
    preOrderDFS(root.right);
  }
  //  print here -> post order
}

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

function postOrderDFS(root) {
  if (root === null) return;
  // print here -> pre order
  if (root.left) {
    preOrderDFS(root.left);
  }
  // print here -> in order
  if (root.right) {
    preOrderDFS(root.right);
  }
  //  print here -> post order
  console.log(root.value);
}

function DFS(root) {
  if (root === null) {
    return -1
  }
}

function DFSHelper(node) {
  // print here -> preOrder
  if (node.left !== null) {
    DFSHelper(node.left)
  }
  // print here -> inOrder
  if (node.right !== null) {
    DFSHelper(node.right)
  }
  // print here -> postOrder
}
 
export { preOrderDFS, inOrderDFS, postOrderDFS };
