/*
    given the root of two binary trees, return a merged product of the two 

    merge rule - if two nodes overlap, sum the overlap


    class TreeNode {
        constructor(value, left, right) {
            this.value = value;
            this.right = right;
            this.left = left;
        }

    }

*/

function mergeTrees(t1, t2) {
  if (t1 === null) return t2;
  if (t2 === null) return t1;
  // both nodes have a value, pick one of them to hold
  // sum total, im picking t1 (this is the node we will return from the recursion)
  else {
    // set t1.value = t1.value + t2.value
    t1.value += t2.value;
    // recurse over left side of the tree
    t1.left = mergeTrees(t1.left, t2.left);
    // recurse over right side of the tree
    t1.right = mergeTrees(t1.right, t2.right);
    // return t1
    return t1;
  }
}
