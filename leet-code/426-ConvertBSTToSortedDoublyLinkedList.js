/*

  Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.

  You can think of the left and right pointers as synonymous to the predecessor and successor
  pointers in a doubly-linked list. For a circular doubly linked list, the predecessor of the
  first element is the last element, and the successor of the last element is the first element.

  We want to do the transformation in place. After the transformation, the left pointer of the
  tree node should point to its predecessor, and the right pointer should point to its successor.
  You should return the pointer to the smallest element of the linked list.

  Global Problem:
    - Build doubly linked list (sorted)

  Local Problem:
    - have my left pointer point at my inOrder predecesor
    - have my right pointer point at my inOrder successor

  However the predecesesor / successor data is not readily available
  and to get use we must traverse tree "bottom up" where as to get the
  other we need to go "top down"

  so neither top down nor bottom up will suffice, this is actually a boundry
  walk DFS pattern problem

  convert(node) {
    //initalize fake tree node
    fake = new TreeNode("fake")
    pred = fake

    dfs(node, pred);
    return node
  }


  function dfs(node, pred):
    if node.left is not null:
      df(node.left, pred)

    pred.right = node
    node.left = pred
    pred = node

    if node.right is not null:
      dfs(node.right, pred)

  when function terminates, pred is the last node in the inOrder sequence
  
  head = fake.right
  pred.right = head;
  head.left = pred;

  return head

  now we have to make our linked list circular by connecting the first to the last
  elements;

   
*/

/**
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(log n)
 *
 * @param {*} root
 */
function treeToDoublyList(root) {
  // temp tree node to
  const temp = new TreeNode('temp');
  let pred = temp;

  dfs(root, pred);

  const head = temp.right;
  pred.right = head;
  head.left = pred;

  return head;
}

function dfs(node, pred) {
  if (node.left) {
    dfs(node.left, pred);
  }

  // boundry walk logic
  pred.right = node;
  node.left = pred;
  pred = node;

  if (node.right) {
    dfs(node.right, pred);
  }
}
