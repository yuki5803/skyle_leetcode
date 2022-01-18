// https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/
// 559. N 叉树的最大深度

// Done

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let max = 0;
  if (root.children.length !== 0) {
    for (let i = 0; i < root.children.length; i++) {
      console.log(root.children[i], i, root.children.length);
      max = Math.max(maxDepth(root.children[i]), max);
    }
  }
  return max + 1;
};
