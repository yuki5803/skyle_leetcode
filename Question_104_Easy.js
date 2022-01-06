// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
// 104. 二叉树的最大深度

// Done

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// DFS
var maxDepth = function (root) {
  let maxDep = 0;
  const dfs = (root, dep = 0) => {
    if (!root) {
      return dep;
    }
    dep++;
    let leftDep = dfs(root.left, dep);
    let rightDep = dfs(root.right, dep);
    return leftDep > rightDep ? leftDep : rightDep;
  };
  maxDep = dfs(root);
  return maxDep;
};

// BFS
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let queue = [];
  const bfs = (root) => {
    let depth = 0;
    queue.push(root);
    while (queue.length !== 0) {
      let size = queue.length;
      depth++;
      for (i = 0; i < size; i++) {
        let node = queue.shift();
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
    return depth;
  };
  return bfs(root);
};
