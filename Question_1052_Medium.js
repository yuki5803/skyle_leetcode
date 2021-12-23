// https://leetcode-cn.com/problems/grumpy-bookstore-owner/
// 1052. 爱生气的书店老板

// Done

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  let happyCustomer = 0;
  let dissatisfaction = 0;
  let killUnhappyCustomer = 0;

  let right = 0;
  let left = 0;
  while (right < customers.length) {
    let inner = customers[right];
    right++;
    if (grumpy[right - 1] === 1) {
      dissatisfaction += inner;
    } else {
      happyCustomer += inner;
    }
    while (right - left > minutes) {
      let outer = grumpy[left] === 1 ? customers[left] : 0;
      left++;
      dissatisfaction -= outer;
    }
    killUnhappyCustomer = Math.max(killUnhappyCustomer, dissatisfaction);
  }
  return happyCustomer + killUnhappyCustomer;
};
