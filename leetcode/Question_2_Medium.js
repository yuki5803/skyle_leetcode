// https://leetcode.com/problems/add-two-numbers/
// 2. 两数相加

// Done

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let current = new ListNode();
  let result = current;
  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    current.next = new ListNode(sum % 10);
    sum = sum > 9 ? 1 : 0;
    current = current.next;
  }
  if (sum) {
    current.next = new ListNode(sum);
  }
  return result.next;
};
