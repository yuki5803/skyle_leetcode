// https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
// 114. 二叉树展开为链表
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
var flatten = function(root) {
  const dfs = (root) => {
      if(!root || (!root.left && !root.right)){
          return root
      }
      let leftNode = dfs(root.left)
      let rightNode = dfs(root.right)
      
      root.left = null
      if(leftNode && rightNode){
          let tail = leftNode
          while(tail.right){
              tail = tail.right
          }
          root.right = leftNode
          tail.right = rightNode
      }else if(leftNode){
          root.right = leftNode
      }else{
          root.right = rightNode
      }
      return root
  }
  dfs(root)
};