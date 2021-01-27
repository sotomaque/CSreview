/*
  Given a binary tree, you need to compute the diameter of the tree.
  The diameter is the length of the longest path between any two nodes
  in a tree.

  This path may or may not pass through the root

  Bottom up DFS
    two conceptually diff tasks
    1. satisfy our parent (generate and return
      the expected return value) i.e. height info
      we will pass to our parent

    2. caluclate my local answer from information
    coming up from my children
    (used to tap into the global answer)

  local problem:
    - find the longest inverted v path for which
    i am the corner

  global problem:
    - max of all the local problems
*/

/**
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(lgn)
 *
 * @param {*} root
 */
function diameterOfBinaryTree(root) {
  if (!root || root === null || typeof root === 'undefined') return 0;

  let longestPath = 0;
  helper(root, longestPath);
  return longestPath;
}

function helper(root, globalMax) {
  // base case: leaf node
  if (!root.left && !root.right) {
    return 0; // height of a leaf = 0
  }
  let myDiameter,
    leftHeight,
    rightHeight = 0;
  // recursive case: internal node
  if (root.left) {
    leftHeight = helper(root.left);
    myDiameter += leftHeight + 1;
  }
  if (root.right) {
    rightHeight = helper(root.right);
    myDiameter += rightHeight;
  }
  const myHeight = Math.max(leftHeight, rightHeight) + 1;

  if (myDiameter > globalMax) {
    globalMax = myDiameter;
  }
  return myHeight;
}

function diameterAlt(root) {
  if (!root || root === null || typeof root === 'undefined') return 0;

  let longestPath = 0;
  helperAlt(root, longestPath);
  return longestPath;
}

function helperAlt(node, diameter) {
  if (!node) return 0;

  const left = dfs(node.left);
  const right = dfs(node.right);

  // update diameter at every node
  diameter = Math.max(diameter, left + right);

  // update the largest number of edge so far
  return Math.max(left, right) + 1;
}
