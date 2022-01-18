// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// 235. 二叉搜索树的最近公共祖先

// Done

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) {
    return null;
  }
  if (root === p || root === q) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) {
    return root;
  }
  if (left === null && right === null) {
    return null;
  }
  return left === null ? right : left;
};
