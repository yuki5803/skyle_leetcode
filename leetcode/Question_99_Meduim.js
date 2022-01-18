// https://leetcode-cn.com/problems/recover-binary-search-tree/
// 99. 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let node1 = null
  let node2 = null
  let pre = null
  const inOrder = (root) => {
      if(!root){
          return 
      }
      inOrder(root.left)
      if(pre !== null && root.val <= pre.val){
          if(!node1){
              node1 = pre
          }node2 = root
      }
      pre = root
      inOrder(root.right)
  }
  inOrder(root)
  let temp
  temp = node1.val
  node1.val = node2.val
  node2.val = temp
  return 
};