/*
    

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

const bst = constructBST();
let res = bst.postOrder(); // [1,  2,  5,  5, 14, 13, 22, 15, 10]
console.log(res);
