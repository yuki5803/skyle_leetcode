// https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
// 129. 求根节点到叶节点数字之和
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
var sumNumbers = function(root) {
  let sum = 0
  const dfs = (root,num = '') => {
      num = num+root.val
      if(!root.left && !root.right){
          sum += Number(num)
          return
      }
      if(root.left)dfs(root.left,num)
      if(root.right)dfs(root.right,num)
  }
  dfs(root)
  return sum
};