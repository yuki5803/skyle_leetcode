// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
// 24. 两两交换链表中的节点

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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let virtual = new ListNode(0);
  virtual.next = head;
  let curr = virtual;
  while (curr.next && curr.next.next) {
    let temp = curr.next;
    let temp1 = curr.next.next;
    let temp2 = curr.next.next.next;
    curr.next = temp1;
    curr.next.next = temp;
    curr.next.next.next = temp2;
    curr = curr.next.next;
  }
  return virtual.next;
};
