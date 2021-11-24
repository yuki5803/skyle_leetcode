// https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
// 109. 有序链表转换二叉搜索树
// Done

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  const buildTree = (start) => {
      if(!start){
          return null
      }
      if(!start.next){
          return new TreeNode(start.val)
      }
      let slow = start.next
      let prev = start
      let fast = start.next.next
      while(fast !== null && fast.next !== null){
          slow = slow.next
          prev = prev.next
          fast = fast.next.next
      }
      prev.next = null
      root = new TreeNode(slow.val,buildTree(start),buildTree(slow.next))
      return root
  }
  return buildTree(head)
};