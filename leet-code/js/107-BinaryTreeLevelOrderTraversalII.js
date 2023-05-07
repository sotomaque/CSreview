/*
  Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root)

  Regaular BFS
  before returning List of Lists , reverse it so that the list now has the level values reveresed 
  i.e. last level first, then second to last, etc.
*/

/**
 * time-complexity:
 *  - O(n) (must visit every node)
 *
 * space-complexity:
 *  - O(n) 
 * 
 * @param {*} node
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
    res.push(temp);
  }

  return res.reverse();
}
