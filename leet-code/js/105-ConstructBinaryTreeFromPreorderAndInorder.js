/*
  Given preorder and inorder traversal of a tree, construct the binary tree.

  Note:
  You may assume that duplicates do not exist in the tree.

  For example, given

  preorder = [3,9,20,15,7]
  inorder = [9,3,15,20,7]
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
 *  - O(lgn) (call stack space is bounded by max height of tree log n)
 *
 * @param {*} nums
 */
function buildTree(preorder, inorder) {
  // base case
  if (preorder.length <= 0 || inorder.length <= 0) return null;

  // recursive case
  const root = new TreeNode(preorder[0]);
  const rootIndex = inorder.indexOf(preorder[0]);

  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);
  const leftPreorder = preorder.slice(1, rootIndex);
  const rightPreorder = preorder.slice(rootIndex + 1);

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
}

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
function buildTreeAlt(preorder, inorder) {
  return helper(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );
}

function helper(preorder, startP, endP, inorder, startI, endI) {
  //     base case
  if (startP > endP) {
    return null;
  }

  //     recursive case
  const root = new TreeNode(preorder[startP]);
  const rootIndex = inorder.indexOf(preorder[startP]);
  //     parse left and right subtrees
  const numLeft = rootIndex - startI;

  // recurse on left and right subarrays
  root.left = helper(
    preorder,
    startP + 1,
    startP + numLeft,
    inorder,
    startI,
    rootIndex - 1
  );
  root.right = helper(
    preorder,
    startP + numLeft + 1,
    endP,
    inorder,
    rootIndex + 1,
    endI
  );

  return root;
}

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

preorder = [3, 9, 20, 15, 7];
inorder = [9, 3, 15, 20, 7];

const res = buildTreeAlt(preorder, inorder);
console.log(res);
