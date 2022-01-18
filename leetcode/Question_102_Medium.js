// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
// 102. 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root){
      return []
  }
  const arr = []
  const result = []
  arr.push(root)
  while(arr.length !== 0){
      let size = arr.length
      let line = []
      for(let i=0;i<size;i++){
          let node = arr.shift()
          if(node.left){
              arr.push(node.left)
          }
          if(node.right){
              arr.push(node.right)
          }
          line.push(node.val)
      }
      result.push(line)
  }
  return result
};