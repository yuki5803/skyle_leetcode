// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
// 103. 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
  if(!root){
      return []
  }
  let arr = []
  let result = []
  let turn = true
  arr.push(root)
  while(arr.length !== 0){
      let line = []
      size = arr.length
      for(let i=0;i<size;i++){
          let node = arr.shift()
          turn?line.push(node.val):line.unshift(node.val)
          if(node.left){
              arr.push(node.left)
          }            
          if(node.right){
              arr.push(node.right)
          }
      }
      turn = !turn
      result.push(line)
  }
  return result
};