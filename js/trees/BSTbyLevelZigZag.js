/*
  Given a binary tree, return the zigzag level order traversal of its nodes' values.
  (ie, from left to right, then right to left for the next level and alternate between).

  i.e. k = 2
    3
   / \
  9  20
    /  \
   15   7
  output = [
    [3],
    [20,9],
    [15,7]
  ]
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
  let res = [];
  queue.push(root);
  let ReverseOrder = false;
  while (queue.length) {
    let temp = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      temp.push(node.val);
    }
    !ReverseOrder ? res.push(temp) : res.push(temp.reverse());
    ReverseOrder = !ReverseOrder;
  }

  return res;
}
