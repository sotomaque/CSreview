/*
  This question is asked by Apple.
  Given two sorted linked lists, merge them together in
  ascending order and return a reference to the merged list

  Ex: Given the following lists...

  list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
  list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
  list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null
*/

/**
 * time-complexity:
 *  - O(n) where n is the number of nodes in both our lists
 *
 * space-complexity:
 *  - O(1)
 *
 * @param {*} head1
 * @param {*} head2
 */
function mergeTwoLinkedLists(head1, head2) {
  let temp = new ListNode(-1);
  let head = temp;

  while (head1 !== null && head2 !== null) {
    if (head1.val < head2.val) {
      temp.next = head1;
      head1 = head1.next;
    } else {
      temp.next = head2;
      head2 = head2.next;
    }
    temp = temp.next;
  }
  //Since the two lists can be of different lengths
  //once we’ve reached the end of one list we need to remember to append the remainder of the other list.
  if (head1 !== null) {
    temp.next = head1;
  } else {
    temp.next = head2;
  }

  return head.next;
}
