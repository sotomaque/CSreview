/*
given an array based heap and a real number, x, efficiently
determine whether the kth smallest element in the heap is
greater than or equal to x.

your algorithm should be O(k) in the worst-case.
*/

/**
 * time-complexity:
 *  - inserting each element -> O(log(n))
 *  - computing for each element -> O(1)
 *  - total time complexity: O(log(n)) per number
 *
 * space-complexity:
 *  - O(n) with current implementation as heap is not done in place
 *
 * @param {*} nums
 * @param {*} k
 * @param {*} x
 */
function isGreatherThanOrEqualToKthSmallestNumber(nums, k, x) {
  const minHeap = new MinHeap(nums);

  for (let n of nums) {
    minHeap.insert(n);
  }
  let i = minHeap.getSize();
  while (i > k) {
    minHeap.remove();
    i--;
  }
  return x >= minHeap.getMin();
}

class MinHeap {
  constructor() {
    /* Initialing the array heap and adding a dummy element at index 0 */
    this.heap = [null];
    this.size = 0;
  }

  getMin() {
    /* Accessing the min element at index 1 in the heap array */
    return this.heap[1];
  }

  insert(node) {
    /* Inserting the new node at the end of the heap array */
    this.heap.push(node);
    this.size += 1;
    /* Finding the correct position for the new node */

    if (this.heap.length > 1) {
      let current = this.heap.length - 1;

      /* Traversing up the parent node until the current node (current) is greater than the parent (current/2)*/
      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] > this.heap[current]
      ) {
        /* Swapping the two nodes by using the ES6 destructuring syntax*/
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }

  remove() {
    this.size -= 1;
    /* Smallest element is at the index 1 in the heap array */
    let smallest = this.heap[1];
    /* When there are more than two elements in the array, we put the right most element at the first position
          and start comparing nodes with the child nodes
      */
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (
        this.heap[leftChildIndex] &&
        this.heap[rightChildIndex] &&
        (this.heap[current] > this.heap[leftChildIndex] ||
          this.heap[current] > this.heap[rightChildIndex])
      ) {
        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
          [this.heap[current], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[current],
          ];
          current = leftChildIndex;
        } else {
          [this.heap[current], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[current],
          ];
          current = rightChildIndex;
        }

        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      /* If there are only two elements in the array, we directly splice out the first element */
      this.heap.splice(1, 1);
    } else {
      return null;
    }

    return smallest;
  }

  getSize() {
    return this.size;
  }
}

// is 7 greater than 2nd smallest number (6) -> yes
let arr = [4, 6, 11, 12, 10, 9, 14];
let k = 2;
let x = 7;

const res = isGreatherThanOrEqualToKthSmallestNumber(arr, k, x);
console.log(`is ${arr.sort((a, b) => a - b)[k - 1]} >= ${x} ? ${res}`);
