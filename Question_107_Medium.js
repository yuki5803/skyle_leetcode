// https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
// 107. 二叉树的层序遍历 II
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
var levelOrderBottom = function(root) {
  if(!root){
      return []
  }
  let arr = []
  arr.push(root)
  let result = []
  while(arr.length !== 0){
      let size = arr.length
      let line = []
      for(let i=0;i<size;i++){
          let node = arr.shift()
          line.push(node.val)
          if(node.left){
              arr.push(node.left)
          }
          if(node.right){
              arr.push(node.right)
          }
      }
      result.unshift(line)
  }
  return result
};