/*
  Given the root node of a BST,
  return the sum of values of 
  all nodes with values between L and R inclusive

  the bst is guaranteed to have unique values
*/
/*
    

*/

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    // adding element to the queue
    this.items.push(element);
  }

  dequeue() {
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    if (this.isEmpty()) return 'Underflow';
    return this.items.shift();
  }

  front() {
    // returns the Front element of
    // the queue without removing it.
    if (this.isEmpty()) return 'No elements in Queue';
    return this.items[0];
  }

  isEmpty() {
    // return true if the queue is empty.
    return this.items.length == 0;
  }

  printQueue() {
    var str = '';
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + ' ';
    return str;
  }
}

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

  getRootNode() {
    return this.root;
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
}

/**
 * time-complexity:
 *  - O(n) must visit every node (BFS)
 *
 * space-complexity:
 *  - O(n) (stack)
 *
 * @param {*} node
 * @param {*} left
 * @param {*} right
 */
function valuesInBSTinRange(node, left, right) {
  let sum = 0;
  if (node === null) return sum;

  // BFS -> touch every node
  const queue = new Queue();
  queue.enqueue(node);
  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    if (node.data >= left && node.data <= right) {
      sum += node.data;
    }
    if (node.left !== null && node.data <= right) {
      queue.enqueue(node.left);
    }
    if (node.right !== null && node.data <= left) {
      queue.enqueue(node.right);
    }
  }

  return sum;
}

const bst = new BST();
let array = [10, 5, 15, 3, 7, 19];
for (let i = 0; i < array.length; i++) {
  bst.add(array[i]);
}

const root = bst.getRootNode();

const newRes = valuesInBSTinRange(root, 7, 12);
console.log(newRes);
