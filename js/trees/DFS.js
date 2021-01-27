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

export { preOrderDFS, inOrderDFS, postOrderDFS };
