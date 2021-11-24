// https://leetcode-cn.com/problems/same-tree/

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q,res = false) {
  //
  if(!p && !q){
      return true
  }
  if((p === null && q !== null) || (p !== null && q === null)){
      return false
  }
  if(p.val !== q.val)return false
  res = isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
  return res 
};