/*
write a function that finds the bode at which
the intersection of two singly linked lists begins.
*/

/**
 * time-complexity:
 *  - O(n) where n is the total number of elements in both of our linked lists
 *
 * space-complexity:
 *  - O(n) (worst case visit every node)
 *
 * @param {*} headA
 * @param {*} headB
 */
function intersection(headA, headB) {
  // add all elements of headA to a set
  // try adding elements from headB to the set
  // it it already exists in set, we found the intersection

  const visited = new Set();

  while (headA !== null) {
    visited.add(headA);
    headA = headA.next;
  }

  while (headB !== null) {
    if (visited.has(headB)) {
      return headB;
    } else {
      headB = headB.next;
    }
  }

  return null;
}

const list1 = [2, 6, 4];
const list2 = [1, 5];

const res = intersection(list1, list2);
console.log(res);
