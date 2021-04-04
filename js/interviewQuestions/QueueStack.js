/*
Design a class to implement a stack using only a single queue. Your class, QueueStack, should support the following stack methods: push() (adding an item),
pop() (removing an item), peek() (returning the top value without removing it), and empty() (whether or not the stack is empty).

To solve this problem we must implement the most common stack methods, push(), pop(), peek(), and empty() using a single queue.
Queues are normally a FIFO (first in first out) data structure but to implement a stack we must change its behavior to be LIFO (last in first out),
therefore mirroring the behavior of a stack. To do this, for our push() operation, we should be sure to allow our last added item to be at the front of the queue;
however queues at items to the back. To deal with this, inside our push() method, we must remove every item from the queue and re-add them at the back every
time a new item is added. This will ensure that the last added item is always at the front of the queue (like being at the top of the stack).
For our pop() method, this can now be as simple as calling remove on our queue allowing us to access the “top” item in constant time.
For our peek() method, which returns the value of the top item of the stack (but does not remove it). we can check if our queue is empty and if it is we can
return null or the value at the front of the queue otherwise. For empty() we simply need to return whether or not our queue has any elements.
*/
import Queue from '../data structures/Queue';

/**
 * Runtime: All of our operations run in constant time except push() which is O(M)
 *  where M is the current number of elements in our QueueStack (because every time
 *  we add a new item we must iterate through our entire queue)
 *
 * Space complexity: O(N) where N is the total number of items we are allowed to hold in our queu
 */
// LIFO Datastructure
class QueueStack {
  queue;

  constructor() {
    queue = new Queue();
  }

  // add item
  push(val) {
    const size = this.queue.getSize();
    this.queue.enqueue(val);
    for (let i = 0; i < size; i++) {
      this.queue.enqueue(this.queue.dequeue());
    }
  }

  // remove top of the queuestack
  pop() {
    if (this.empty()) {
      return -1;
    }
    return this.queue.dequeue();
  }

  // return top of the queuestack without removing it
  peek() {
    if (this.empty()) {
      return -1;
    }
    return this.queue.peek();
  }

  empty() {
    return this.queue.getSize() === 0;
  }
}
