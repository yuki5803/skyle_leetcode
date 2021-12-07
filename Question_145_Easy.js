// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/

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
var postorderTraversal = function(root) {
  const arr = []
  const postTraversal = (root) => {
      if(!root){
          return 
      }
      postTraversal(root.left)
      postTraversal(root.right)
      arr.push(root.val)
  }
  postTraversal(root)
  return arr
};