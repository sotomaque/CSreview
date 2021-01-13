/*
    Given an array of input,
    return a BST representation of the input

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

function constructBST(array) {
  const bst = new BST();

  for (let i = 0; i < array.length; i++) {
    bst.add(array[i]);
  }

  console.log('pre order: ', bst.preOrder());
  console.log('post order: ', bst.postOrder());
  console.log('in order: ', bst.inOrder());
}

let array = [10, 5, 15, 2, 5, 13, 22, 1, 14];
constructBST(array);
