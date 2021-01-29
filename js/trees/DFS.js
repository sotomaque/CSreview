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

//  Node -> Left subtree -> Right subtree
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

// Left subtree -> Node -> Right subtree
function inOrderStack(root) {
  if (root === null) return;

  const s = new Stack();
  pushLeft(root, s); // by the time this is done, we have pushed all left items onto our stack
  while (!s.isEmpty()) {
    const current = s.pop();
    console.log(current.data);
    pushLeft(current.right, s);
  }
}

function pushLeft(node, stack) {
  while (node !== null) {
    stack.push(node);
    node = node.left;
  }
}

// Left subtree -> Right subtree -> Node
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
