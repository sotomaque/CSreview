/*
  given a binary tree, print out its nodes in level order
*/
import Queue from '../data structures/Queue';

function BFS(treeNode) {
  const queue = new Queue();
  queue.enqueue(treeNode);
  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    // do something with node.value
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
