/*
  Given preorder and inorder traversal of a tree, construct the binary tree.

  Note:
  You may assume that duplicates do not exist in the tree.

  For example, given

  inorder = [9,3,15,20,7]
  postorder = [9,15,7,20,3]

  Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

  key: 
     x
    / \
   L   R
    inorder: [...inorder(Left), x, ...inorder(Right)]
    postorder: [...postorder(Left), ...postorder(Right), x];

    root will be last element of post order array
*/

// Tree Creation
// TOP DOWN:
// 1. figure out which element is root
//    (first element in preorder list)
// 2. recursively construct left subtree
//    recursively construct right subtree

/**
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(n)
 *
 * @param {*} preorder
 * @param {*} inorder
 */
function buildTree(inorder, postorder) {
  function callDFS(arr) {
    if (!arr.length) return null;
    const val = postorder.pop();
    const idx = arr.indexOf(val);
    const node = new TreeNode(val);
    node.right = callDFS(arr.slice(idx + 1));
    node.left = callDFS(arr.slice(0, idx));
    return node;
  }

  return callDFS(inorder);
}

// improvement -> dont do indexOf (O(n) op) every iteration
function buildTreeAlt(inorder, postorder) {
  const map = new Map();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  function callDFS(start, end) {
    if (start > end) return null;
    const val = postorder.pop();
    const idx = map.get(val);
    const node = new TreeNode(val);
    node.right = callDFS(idx + 1, end);
    node.left = callDFS(start, idx - 1);
    return node;
  }

  return callDFS(0, inorder.length - 1);
}

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

inorder = [9, 3, 15, 20, 7];
postorder = [9, 15, 7, 20, 3];

const res = buildTreeAlt(inorder, postorder);
console.log(res);
