/**
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the
 * shortest path from the root node down to the nearest leaf node.
 *
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * time-complexity:
 *  - O(n) (bfs appraoch, must visit every node)
 *
 * space-complexity:
 *  - O(logn) (max height of recursive stack)
 *
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  let depth = 1;
  let queue = [root];
  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node === null) return 0;
      if (node.left === null && node.right === null) return depth;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    depth++;
  }
  return depth;
};
