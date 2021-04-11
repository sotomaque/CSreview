// given a linked list
// return true if the linked list is a palindrome
// otherwise return false

const isPalindrome = (head) => {
  // use two pointer approach to have one
  // pointer arrive at end of the linked list
  // while the other arrives at the mid pont
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the LL from the midpoint to the end of the linkedlist
  slow = reversed(slow);
  fast = head;

  // compare
  while (slow !== null) {
    if (slow.value !== fast.value) return false;
    slow = slow.next;
    fast = fast.next;
  }

  // we made it all the way through
  return true;
};

// reverese a linkedlist
const reversed = (head) => {
  let prev = null;

  while (head !== null) {
    const nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }

  return prev;
};
