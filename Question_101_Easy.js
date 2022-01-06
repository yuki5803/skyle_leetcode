// https://leetcode-cn.com/problems/symmetric-tree/
// 101. 对称二叉树

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  if (!root.right && !root.left) return true;
  if (!root.left || !root.right) return false;
  function dfs(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    return dfs(left.right, right.left) && dfs(left.left, right.right);
  }
  return dfs(root.left, root.right);
};
