/*
  Given a BST and an integer k, which represents a level,
  return all the nodes in that level of the tree.

  i.e. k = 2
    3
   / \
  9  20
    /  \
   15   7
  output = [9, 20]
*/

/**
 * time-complexity:
 *  - O(n) (must visit every node)
 *
 * space-complexity:
 *  - O(n) (max size of queue)
 *
 * @param {*} node
 */
function BFS(root, k) {
  if (root == null) {
    return [];
  }
  let queue = [];
  queue.push(root);
  let currentLevel = 1;
  while (queue.length) {
    let temp = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      temp.push(node.val);
    }
    if (currentLevel === k) return temp;
  }
}

// Same problem however this time we
// will use DFS to solve it

/**
 * time-complexity:
 *  - O(n) (must visit every node)
 *
 * space-complexity:
 *  - O(k) (max size of queue)
 *
 * @param {*} root
 * @param {*} k
 */
function DFS(root, k) {
  const res = [];
  helper(root, k, res);
  return res;
}

function helper(root, k, globalRes) {
  if (root === null || k < 1) return;
  if (k === 1) {
    globalRes.push(root.value);
  }

  helper(root.left, k - 1, globalRes);
  helper(root.right, k - 1, globalRes);
}
