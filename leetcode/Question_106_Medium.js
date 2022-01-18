// https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// 106. 从中序与后序遍历序列构造二叉树

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  function rebuild(inO, postO) {
    if (inO.length === 0) {
      return null;
    }
    const rootVal = postO[postO.length - 1];
    const rootIdx = inO.indexOf(rootVal);
    let left = rebuild(inO.slice(0, rootIdx), postO.slice(0, rootIdx));
    let right = rebuild(
      inO.slice(rootIdx + 1),
      postO.slice(rootIdx, postO.length - 1)
    );
    return new TreeNode(rootVal, left, right);
  }

  return rebuild(inorder, postorder);
};
