// https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/
// 501. 二叉搜索树中的众数

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
 * @return {number[]}
 */
var findMode = function (root) {
  let result = [];
  let maxTime = 0;
  let current = 1;
  let preVal = null;
  const dfs = (root) => {
    if (root) {
      dfs(root.left);
      if (preVal === root.val) {
        current++;
      } else {
        current = 1;
        preVal = root.val;
      }
      if (current === maxTime) {
        result.push(root.val);
      } else if (current > maxTime) {
        result = [root.val];
        maxTime = current;
      }
      dfs(root.right);
    }
  };
  dfs(root);
  return result;
};
