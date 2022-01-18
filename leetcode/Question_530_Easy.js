// https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/
// 530. 二叉搜索树的最小绝对差

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
var getMinimumDifference = function (root) {
  let min = Infinity;
  let pre = null;
  const dfs = (root) => {
    if (!root) {
      return;
    }
    dfs(root.left);
    if (pre !== null) {
      let minTemp = Math.abs(pre - root.val);
      min = Math.min(minTemp, min);
    }
    pre = root.val;
    dfs(root.right);
  };
  dfs(root, null);
  return min;
};
