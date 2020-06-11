/*
    write a function that takes in a root node of a BST 
    and returns a list of its branch sums ordered from 
    leftmost branch sum to right most branchsum

    a branchsum is the sum of all the values in a BST branch. a BST branch is a
    path of nodes in a tree that starts at the root node and ends at a leaf node

*/

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * time-complexity: 
 *  - O(n) - traverse through all n nodes
 * 
 * space-complexity:
 *  - O(n) - returning list of branch sum of length = number of leafs in BT, ~ 1/2 * N = N
 * 
 * @param {*} node 
 * @param {*} runningSum 
 * @param {*} runningListOfBranchSums 
 */
function branchSums(node, runningSum = 0, runningListOfBranchSums = []) {
    // edge case where parent only had one child, called recursion on both, would break when computing new running sum
    if (node === null) return 

    // calculate new running sum
    const newRunningSum = runningSum + node.value;

    // if we are at leaf node, add running sum to list
    if (node.left === null && node.right === null) {
        runningListOfBranchSums.push(newRunningSum)
        return 
    }

    branchSums(node.left, runningSum, runningListOfBranchSums)
    branchSums(node.right, runningSum, runningListOfBranchSums)

}