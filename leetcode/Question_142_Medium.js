// https://leetcode-cn.com/problems/linked-list-cycle-ii/
// 142. 环形链表 II

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // hashMap存储法
  const hashMap = new Map();
  let slow = head;
  let fast = head;
  while (!hashMap.has(slow)) {
    if (!fast || !fast.next) {
      return null;
    }
    hashMap.set(slow, null);
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
