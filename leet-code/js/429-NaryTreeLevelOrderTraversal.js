/*
  Given an n-ary tree, return the level order traversal of its nodes' values.
*/

/**
 * time-complexity:
 *  - O(n) (must visit every node)
 * 
 * space-complexity:
 *  - O(n) (potentially 1/2 the nodes are at the leaf level,
 * meaning queue will be of size ~ 1/2 (n) where n is the total
 * number of nodes in the tree during the last iteration)
 * 
 * @param {*} root 
 */
function BFS(root) {
  if (root == null) {
    return []
  } 
  let res = [], queue = []
  queue.push(root)

  while (queue.length) {
      let temp = []
      let len = queue.length
      for (let i = 0; i < len; i++) {
          let node = queue.shift()
          queue.push(...node.children)
          temp.push(node.val)
      }
      res.push(temp)
  }

  return res
}

