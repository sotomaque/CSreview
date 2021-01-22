/*
  Given a binary tree, imagine you are standing to the
  right of the tree. 

  Return the values of the nodes you can see from top to bottom

  i.e.
    input = [1, 2, 3, null, 5, null, 4]
    output = [1, 3, 4]

    explaination
        1
      2   3
        5   4
*/

import Queue from '../data structures/Queue';

/*
  Thoughts:
    1. 'from top to bottom' -> important piece of information
        - implies BFS since we want to do level order traversal
    
    2. if we use BFS we will be using a queue. What we could
    do is figure out which is the 'last' element of each level (which would be the right most)
    elements.

  Summary: 
    Standard BFS + a list where we append the value of our current node whenever we are at the
    end of a certain level

*/
const rightSideView = (root) => {
  const visibleValues = [];
  if (root === null) return visibleValues;
  const queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const size = queue.size(); // size of things at current level
    for (let i = 0; i < size; i++) {
      // get current value
      const current = queue.dequeue();
      // check if its the last thing in the current level
      if (i === size - 1) {
        // add current node to list of visible values
        visibleValues.push(current.val);
      }

      if (current.left) {
        // if we have a left child, add it to the queue for the next iteration
        queue.add(current.left);
      }
      if (current.right) {
        // if we have a right child, add it to the queue for the next iteration
        queue.add(current.right);
      }
    }
  }

  return visibleValues;
};
