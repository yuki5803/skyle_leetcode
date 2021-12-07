// https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
// 700. 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    let result = null
    function dfs(root){
        if(!root || result){
            return
        }
        if(root.val === val){
            result = root
            return
        }
        if(root.val > val){
            dfs(root.left)
        }else{
            dfs(root.right)
        }
    }
    dfs(root)
    return result
};