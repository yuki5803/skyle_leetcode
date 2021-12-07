// https://leetcode-cn.com/problems/balanced-binary-tree/submissions/

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
var isBalanced = function(root) {
  let balance = true
  const dfs = (root,dep = 0) => {
      if(!root){
          return dep
      }
      dep++
      let leftDep = dfs(root.left,dep)
      let rightDep = dfs(root.right,dep)
      let height = leftDep - rightDep
      if(balance === true){
          if(height >= -1 && height <= 1 && balance === true){
              balance = true
          }else{
              balance = false
          }
      }
      return leftDep > rightDep ? leftDep : rightDep
  }
  dfs(root)
  return balance
};