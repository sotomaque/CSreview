/*
  Given a binary tree, count the number of univalue subtrees.

  a univalue subtree means all nodes of that subtree have the
  same value

  Bottom Up DFS
  - if parent recieves same props from all of its children, we
  increment count of univalue subtrees by 1
  - every leaf level node is a univalue subtree on its own


  Global problem:
    - Count # univalue subtrees

  Local problems:
    - each node must determine
    "is the subtree rooted at me
    univalue or not"

  Global answer = Sum of all local answers
*/

/**
 * time-complexity:
 *  - O(n) (dfs visits every node)
 *
 * space-complexity:
 *  - O(n) (max depth of call stack)
 *
 * @param {*} root
 */
function countUnivalSubtrees(root) {
  if (!root || root === null || typeof root === 'undefined') return 0;

  let count = 0;
  dfs(root, count);
  return count;
}

// bottom up dfs
// 1. satisfy parent by returning wheter node is
// univalue or not (i.e. pass it up)
// 2. my local answer is also am i a univalue or not
// 3. update global answer: if i am univalue, increment global answer
function dfs(node, count) {
  // base case: leaf node
  if (!node.left && !node.right) {
    count++;
    return true;
  }

  // recursive case: internal node
  let left, right;
  let amIUnivalue = true;
  if (node.left) {
    left = dfs(node.left, count);
    if (!left || node.val !== node.left.val) {
      // we know we are not univalue
      // we dont want to return false however, because if we do
      // we will skip the right subtree's recursive calls and
      // mess up our count
      amIUnivalue = false;
    }
  }
  if (node.right) {
    right = dfs(node.right, count);
    if (!right || node.val !== node.right.val) {
      amIUnivalue = false;
    }
  }

  // update global answer based on local answer
  if (amIUnivalue) {
    count++;
  }

  return amIUnivalue;
}

function countUnivalSubtreesAlt(root) {
  let count = 0;

  findAllSubTrees(root);

  return count;

  function findAllSubTrees(node) {
    if (node == null) return true;

    const left = findAllSubTrees(node.left);
    const right = findAllSubTrees(node.right);

    if (!left || !right) return false;

    if (node.left != null && node.left.val != node.val) return false;
    if (node.right != null && node.right.val != node.val) return false;

    count++;
    return true;
  }
}
