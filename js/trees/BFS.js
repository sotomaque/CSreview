/*
  given a binary tree, print out its nodes in level order

  pseudo code:
    - put node in queue
    - while queue is not empty:
      - dequeue node
      - print node
      - if it has a left child: add it to queue
      - if it has a right child: add it to queue
    - return
*/
import Queue from '../data structures/Queue';

/**
 * time-complexity:
 *  - O(n) (visits every node)
 *
 * space-complexity:
 *  - O(n) (size of queue at bottom level ~n/2 in a complete balanced binary tree)
 *
 * @param {*} treeNode
 */
function BFS(treeNode) {
  if (!treeNode || treeNode === null || typeof treeNode === 'undefined') return;

  const queue = new Queue();
  queue.enqueue(treeNode);
  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    console.log(node);
    if (node.left !== null) {
      queue.enqueue(node.left);
    }
    if (node.right !== null) {
      queue.enqueue(node.right);
    }
  }
  return;
}

export default BFS;
