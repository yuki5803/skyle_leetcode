// https://leetcode-cn.com/problems/merge-two-sorted-lists/
// 21. 合并两个有序链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let resultList = new ListNode();
  let resultHead = resultList;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      resultList.next = list2;
      list2 = list2.next;
    } else {
      resultList.next = list1;
      list1 = list1.next;
    }
    resultList = resultList.next;
  }
  resultList.next = list1 ? list1 : list2;
  return resultHead.next;
};
