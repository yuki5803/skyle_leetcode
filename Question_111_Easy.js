// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

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
 * @return {number}
 */
var minDepth = function(root) {
  if(!root){
      return 0
  }
  let queue = []
  let minDep = 1
  queue.push(root)
  while(queue.length !== 0){
      for(let i = 0;i < queue.length;i++){
          let node = queue.shift()
          if(!node.left && !node.right){
              return minDep
          }
          if(node.left){
              queue.push(node.left)
          }
          if(node.right){
              queue.push(node.right)
          }
      }
      minDep++
  }
  return minDep
};