// https://leetcode-cn.com/problems/path-sum-ii/
// 113. 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const result = []
  const dfs = (root,sum,path = []) => {
      if(!root){
          return 
      }
      sum = sum - root.val
      path.push(root.val)
      if(sum === 0 && !root.left && !root.right){
          result.push([...path])
      }
      dfs(root.left,sum,[...path])
      dfs(root.right,sum,[...path])
  }
  dfs(root,targetSum)
  return result
};