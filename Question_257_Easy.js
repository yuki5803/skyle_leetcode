// https://leetcode-cn.com/problems/binary-tree-paths/

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const resultArr = []
  const dfs = (root,path) => {
      if(!root.left && !root.right){
          resultArr.push(path + `${root.val}`)
          return
      }
      path += `${root.val}->`
      if(root.left){
          dfs(root.left,path)
      }
      if(root.right){
          dfs(root.right,path)
      }
  }
  dfs(root,'')
  return resultArr
};