// https://leetcode-cn.com/problems/sum-of-left-leaves/

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
var sumOfLeftLeaves = function(root) {
  let count = 0
  const dfs = (root,left = false) => {
      if(!root.left && !root.right && left){
          count += root.val
          return 
      }
      if(root.left){
          dfs(root.left,true)
      }
      if(root.right){
          dfs(root.right)
      }
  }
  dfs(root)
  return count
};