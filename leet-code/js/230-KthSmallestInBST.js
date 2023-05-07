/**
 * time-complexity:
 *  - O(n + height)
 *
 * space-complexity:
 *  - O(height)
 *
 * @param {*} root
 * @param {*} k
 */
var kthSmallest = function (root, k) {
  let res = [];
  helper(root, k, res);
  return res[k - 1];
};

function helper(root, k, res) {
  if (root === null) return;

  helper(root.left, k, res);
  res.push(root.val);
  if (res.length >= k) return;
  helper(root.right, k, res);
}
