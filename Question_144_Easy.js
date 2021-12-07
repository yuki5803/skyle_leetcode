// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/

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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let array = []
  const preTraversal = (root) => {
      if(!root){
          return 
      }
      array.push(root.val)
      preTraversal(root.left)
      preTraversal(root.right)
  }
  preTraversal(root)
  return array
};