// https://leetcode.com/problems/binary-tree-inorder-traversal/
// 94. 二叉树的中序遍历

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
var inorderTraversal = function (root) {
  let out = [];
  const getInorderTraversal = (root) => {
    if (!root) {
      return;
    }
    getInorderTraversal(root.left);
    out.push(root.val);
    getInorderTraversal(root.right);
  };
  getInorderTraversal(root);
  return out;
};
