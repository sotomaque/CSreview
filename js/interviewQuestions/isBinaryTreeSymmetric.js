/*
    Given a binary tree, return true if a tree is symmetric, false otherwise

*/

function isSymmetric(t1, t2 = t1) {
  if (!t1 && !t2) return true;
  if (!t1 || !t2) return false;

  return (
    t1.value === t2.value &&
    isSymmetric(t1.left, t2.right) &&
    isSymmetric(t1.right, t2.left)
  );
}
