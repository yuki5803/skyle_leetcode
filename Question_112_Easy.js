// https://leetcode-cn.com/problems/path-sum/

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if(!root){
      return false
  }
  const dfs = (root,targetSum) => {
      let sum = targetSum - root.val
      if(!root.left && !root.right){
          return sum === 0
      }
      if(root.left){
         if(dfs(root.left,sum)){
             return true
         }
      }
      if(root.right){
          if(dfs(root.right,sum)){
              return true
          }
      }
      return false
  }
  return dfs(root,targetSum)
};