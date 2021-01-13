/**
 *
 * @param {ARRAY} array we want to build a heap out of
 * @param {INT} length of the array we want to build our heap from
 * @param {INT} index of the parent that we are heapifying
 */
function heapify(arr, length, i) {
  let largest = i;
  let left = i * 2 + 1;
  let right = left + 1;

  // check if parent is larger than the left child.
  // If it isn’t, we are going to assign our variable largest to the left child, because it will currently be the largest!
  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  // compare largest to the right child, we will know which is actually the largest.
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  // check to see if largest is still referring to the parent element.
  // If it isn’t then, we will swap the largest element with the parent, putting them into their appropriate places.
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // recursive call to ensure lower elements are still in order
    heapify(arr, length, largest);
  }

  return arr;
}

/**
 * time-complexity:
 *  - insert:
 *      - determined by the length of the bubbling up path
 *      - max length of that path will be log(n)
 *  - extract:
 *      - pop root element -> O(1)
 *      - put right most child node in its place
 *      - re-heapify tree
 *      - therefore also determined by length of bubbling up path -> log(n)
 *  - in total: O(log(n))
 *
 * space-complexity:
 *  - sorts array in place
 *  - O(1)
 *
 * stability:
 *  - NOT STABLE
 *
 * @param {*} arr
 */
function heapSort(arr) {
  let length = arr.length;
  let i = Math.floor(length / 2 - 1); // last parent node in our heap -> always at (index arr.length / 2) - 1
  let k = length - 1; // last child ->  end of the array

  // builds our max heap so that max element is always on top
  while (i >= 0) {
    heapify(arr, length, i);
    i--;
  }

  // swaps root with 'last child', popping last child, then re-heapifying
  // last child is always min so we are popping the smallest element left of in our heap
  // and then ensuring our data structure maintains the desired structure + heap qualities
  while (k >= 0) {
    [arr[0], arr[k]] = [arr[k], arr[0]];
    heapify(arr, k, 0);
    k--;
  }

  return arr;
}

function test() {
  const array = [1, 6, 7, 4, 5, 3, 2, 8];
  const result = heapSort(array);

  console.log(result);
}

test();
