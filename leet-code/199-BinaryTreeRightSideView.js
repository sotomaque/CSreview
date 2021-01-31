/*
  Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

  Regualar BFS, with small change
  at the end of traversing each level, we only care about
  the last element from each level instead of all of them
*/

/**
 * time-complexity:
 *  - O(n) (must visit every node)
 *
 * space-complexity:
 *  - O(n) (potentially 1/2 the nodes are at the leaf level,
 * meaning queue will be of size ~ 1/2 (n) where n is the total
 * number of nodes in the tree during the last iteration)
 *
 * @param {*} root
 */
function BFS(root) {
  if (root == null) {
    return [];
  }
  let res = [],
    queue = [];
  queue.push(root);

  while (queue.length) {
    let temp = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      temp.push(node.val);
    }
    res.push(temp.splice(-1));
  }

  return res;
}
