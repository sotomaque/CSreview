/*
  Given preorder traversal of a BST, construct the binary tree.

  Note:
  You may assume that duplicates do not exist in the tree.


  preorder =  [8,5,1,7,10,12]
  -> compute the inorder since its a BST (by sorting preorder)
  i.e. inOrder = [1, 5, 8, 10, 12]
  
  Return the following binary tree:

     8
    / \
   5  10
  / \   \
 1   7   12

  key: 
     x
    / \
   L   R
    preorder: [x, ...preorder(Left), ...preorder(Right)];
    inorder: [...inorder(Left), x, ...inorder(Right)]

    L is defined as any elements that preceede x in the
    inorder input array
*/

// Tree Creation
// TOP DOWN:
// 1. figure out which element is root
//    (first element in preorder list)
// 2. recursively construct left subtree
//    recursively construct right subtree

// given a sorted array, root will be at 'middle' position

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
function buildBST(preorder) {
  if (!preorder.length) return null;

  // 0th index of preorder is root
  const [root, ...rest] = preorder;

  const rootNode = new TreeNode(root);
  rootNode.left = buildBST(rest.filter((n) => n < root));
  rootNode.right = buildBST(rest.filter((n) => n > root));

  return rootNode;
}

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

preorder = [8, 5, 1, 7, 10, 12];

const res = buildBST(preorder);
console.log(res);
