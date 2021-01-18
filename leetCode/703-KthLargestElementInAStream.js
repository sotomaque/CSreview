/*

*/
class KthLargest {
  constructor(k, nums) {
    this.minHeap = new MinHeap(k);
    for (let n of nums) {
      this.minHeap.add(n);
    }
  }
  add(val) {
    this.minHeap.add(val);
    return this.minHeap.peek();
  }
}

class MinHeap {
  constructor(size) {
    this.size = size;
    this.minHeap = [];
  }
  add(val) {
    let heap = this.minHeap;
    if (heap.length < this.size) {
      heap.push(val);
      let i = heap.length - 1;
      let parent = ((i - 1) / 2) | 0;
      while (parent >= 0 && heap[i] < heap[parent]) {
        swap(heap, parent, i);
        i = parent;
        parent = ((parent - 1) / 2) | 0;
      }
    } else if (heap[0] < val) {
      heap[0] = val;
      this.heapify(0);
    }
  }
  heapify(i) {
    let heap = this.minHeap;
    let n = heap.length;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let smallest = i;
    if (left < n && heap[smallest] > heap[left]) smallest = left;
    if (right < n && heap[smallest] > heap[right]) smallest = right;
    if (smallest != i) {
      swap(heap, smallest, i);
      this.heapify(smallest);
    }
  }
  peek() {
    return this.minHeap[0];
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const x = ['KthLargest', 'add', 'add', 'add', 'add', 'add'];
const y = [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]];

console.log(KthLargest(x, y));
