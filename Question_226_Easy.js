// https://leetcode-cn.com/problems/invert-binary-tree/

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  const arr = []
  arr.push(root)
  while(arr.length !== 0){
      let size = arr.length
      for(i=0;i<size;i++){
          let temp
          node = arr.shift()
          if(!node){
              continue
          }
          temp = node.left
          node.left = node.right
          node.right = temp
          arr.push(node.left)
          arr.push(node.right)
      }    
  }
  return root
};