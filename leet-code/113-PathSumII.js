/*
  Given the root of a binary tree and an integer targetSum,
  return all root-to-leaf paths where each path's sum equals targetSum.

  A leaf is a node with no children.
*/

/**
 * time-complexity:
 *  - O(n) (must visit every node)
 *
 * space-complexity:
 *  - O(log(n)) (max depth of recursion)
 *
 * @param {*} root
 * @param {*} target
 */
var pathSum = function (root, target) {
  if (!root || root === null || typeof root === 'undefined') return [];
  const results = [];
  helper(root, target, [], 0, results);
  return results;
};

function helper(node, target, slate, slateSum, results) {
  //     base case
  if (!node.left && !node.right) {
    if (slateSum + node.val === target) {
      results.push([...slate, node.val]);
      return;
    }
  }

  //     recursive case
  if (node.left) {
    helper(
      node.left,
      target,
      [...slate, node.val],
      slateSum + node.val,
      results
    );
  }
  if (node.right) {
    helper(
      node.right,
      target,
      [...slate, node.val],
      slateSum + node.val,
      results
    );
  }
}
