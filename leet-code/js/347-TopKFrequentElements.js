/*

*/

function topKFrequentElements(nums, k) {
  // frequency count
  const myMap = new Map();
  // O(n)
  for (let i = 0; i < nums.length; i++) {
    // O(1)
    if (myMap.has(nums[i])) {
      // O(1)
      myMap.set(nums[i], myMap.get(nums[i]) + 1);
    } else {
      // O(1)
      myMap.set(nums[i], 1);
    }
  }
  const res = [];
  myMap.forEach((count, element) => {
    res.push({ element, count });
  });

  // put frequency counts into maxHeap
  const maxHeap = new MaxHeap();
  for (let n of res) {
    maxHeap.insert(n);
  }
  let i = maxHeap.getSize();
  // only keep k elements in maxHeap
  // so maxHeap will now have k most frequent elements
  while (i > k) {
    maxHeap.remove();
    i--;
  }
  // empty maxheap
  let output = [];
  while (i > 0) {
    output.push(maxHeap.getMax());
    maxHeap.remove();
    i--;
  }
  // return the elements which had the max freqencies, not the frequencies themeselves
  return output.map((e) => e.element);
}

class MaxHeap {
  constructor() {
    /* Initialing the array heap and adding a dummy element at index 0 */
    this.heap = [null];
    this.size = 0;
  }

  getMax() {
    /* Accessing the max element at index 1 in the heap array */
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
        this.heap[Math.floor(current / 2)].count > this.heap[current].count
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
        if (this.heap[1].count > this.heap[2].count) {
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
        (this.heap[current].count > this.heap[leftChildIndex].count ||
          this.heap[current].count > this.heap[rightChildIndex].count)
      ) {
        if (
          this.heap[leftChildIndex].count < this.heap[rightChildIndex].count
        ) {
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

const arr = [1, 2, 2, 3, 3, 5];
const k = 2;
const result = topKFrequentElements(arr, 2);
console.log(
  `kth most frequent elements in arr when k = ${k}, arr = `,
  arr,
  ` = ${result}`
);
