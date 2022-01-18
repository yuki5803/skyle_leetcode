// https://leetcode-cn.com/problems/diameter-of-binary-tree/
// 543. 二叉树的直径

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
var diameterOfBinaryTree = function (root) {
  let maxPath = 0;

  const getMaxPath = (root) => {
    if (!root) {
      return -1;
    }
    let left = root.left ? getMaxPath(root.left) + 1 : 0;
    let right = root.right ? getMaxPath(root.right) + 1 : 0;
    maxPath = Math.max(left + right, maxPath);
    return Math.max(left, right);
  };
  getMaxPath(root);
  return maxPath;
};

/*************************************************************** */
// Approach 2 (bad approach)
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
var diameterOfBinaryTree = function (root) {
  let maxPath = 0;

  const getDeep = (root, deep = 0) => {
    if (!root) {
      return deep;
    }
    let left = getDeep(root.left, deep + 1);
    let right = getDeep(root.right, deep + 1);
    return Math.max(left, right);
  };

  const getMaxPath = (root) => {
    if (!root) {
      return;
    }
    getMaxPath(root.left);
    maxPath = Math.max(getDeep(root.left) + getDeep(root.right), maxPath);
    getMaxPath(root.right);
  };
  getMaxPath(root);
  return maxPath;
};
