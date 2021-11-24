// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// 105. 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const rebuild = (preO,inO) => {
      if(preO.length===0){
          return null
      }
      const rootVal = preO[0]
      let rootIdx = inO.indexOf(rootVal)
      let lTreeLength = rootIdx
      let left = rebuild(preO.slice(1,lTreeLength+1),inO.slice(0,rootIdx))
      let right = rebuild(preO.slice(lTreeLength+1),inO.slice(rootIdx+1))
      return new TreeNode(rootVal,left,right)
  }
  return rebuild(preorder,inorder)
};