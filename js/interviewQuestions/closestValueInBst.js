/*
  Write a function that takes in a Binary Search Tree (BST) and a target integer value
  and returns the closest value to that target value contained in the BST.
  
  You can assume that there will only be one closest value.

  Each BST node has an integer value, a left child node, and a right child node.

  A node is said to be a valid BST node if and only if it satisfies the BST property: 
      its value is strictly greater than the values of every node to its left; 
      its value is less than or equal to the values of every node to its right; 
      and its children nodes are either valid BST nodes themselves or None / null.

          10
        /    \
        5     15
      /  \   /  \
     2    5 13   22
    /         \
   1          14

  i.e. target value = 12; output should be 13
*/

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;

    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) return null;
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) return true;

      if (data < current.data) {
        current = current.left;
      } else current = current.right;
    }
    return false;
  }

  preOrder() {
    if (this.root === null) return null;
    else {
      let result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  inOrder() {
    if (this.root === null) return null;
    let result = new Array();
    function traverseInOrder(node) {
      node.left && traverseInOrder(node.left);
      result.push(node.data);
      node.right && traverseInOrder(node.right);
    }
    traverseInOrder(this.root);
    return result;
  }

  postOrder() {
    if (this.root === null) return null;
    let result = new Array();
    function traversePostOrder(node) {
      node.left && traversePostOrder(node.left);
      node.right && traversePostOrder(node.right);
      result.push(node.data);
    }
    traversePostOrder(this.root);
    return result;
  }
}

function constructBST() {
  const bst = new BST();
  let array = [10, 5, 15, 2, 5, 13, 22, 1, 14];
  for (let i = 0; i < array.length; i++) {
    bst.add(array[i]);
  }

  return bst;
}

function closestValueInBST(tree, target) {
  return findClosestValueInBSTHelper(tree, target, Number.MAX_SAFE_INTEGER);
}

/**
 * time-complexity:
 *  - avg: O(log(n)) on average we eliminate half the tree
 *  - worst-case: O(n) a tree with all left or all right childen requires iterating through whole tree
 *
 * space-complexity:
 *  - avg: O(log(n)) - space used on call stack
 *  - worst-case: O(n)
 *
 * @param {*} tree
 * @param {*} target
 * @param {*} closetValue
 */
function findClosestValueInBSTHelper(tree, target, closetValue) {
  // base case: reach leaf
  if (tree === null) return closetValue;

  if (Math.abs(target - closestValue) > Math.abs(target - tree.data)) {
    // update closestValue
    closestValue = tree.data;
  }

  if (tree.data > target) {
    // recursion on left subtree
    findClosestValueInBSTHelper(tree.left, target, closestValue);
  } else if (tree.data < target) {
    // recursion on the right subtree
    findClosestValueInBSTHelper(tree.right, target, closestValue);
  } else return closestValue;
}

/**
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(n)
 *
 * @param {*} tree
 * @param {*} target
 * @param {*} closest
 */
function findClosestValueIterative(
  tree,
  target,
  closest = Number.MAX_SAFE_INTEGER
) {
  let currentNode = tree.root;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.data)) {
      closest = currentNode.data;
    }
    if (currentNode.data > target) currentNode = currentNode.left;
    else if (currentNode.data < target) currentNode = currentNode.right;
    else break;
  }
  return closest;
}

const bst = constructBST();
let res = findClosestValueIterative(bst, 12); // should be 13
console.log(res);
