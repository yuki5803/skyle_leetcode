// https://leetcode-cn.com/problems/rotate-list/
// 61. 旋转链表

// Done

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) {
    return head;
  }
  let visioHead = new ListNode(head.val);
  visioHead.next = head;
  let prev = head;
  let curr = head;
  let length = 1;
  while (k !== 0) {
    if (curr.next === null && length > 1) {
      // 到链表末尾则证明取到链表长度,可进行优化位移量
      // 用将位移量K对链表长度length取模,缩减成最终实际位移
      k = k % length;
      if (k === 0) {
        break;
      }
      curr = head;
    } else if (curr.next) {
      curr = curr.next;
      length++;
    }
    k--;
  }
  while (curr.next !== null) {
    curr = curr.next;
    prev = prev.next;
  }
  curr.next = head;
  visioHead.next = prev.next;
  prev.next = null;
  return visioHead.next;
};
