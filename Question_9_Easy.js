// https://leetcode-cn.com/problems/palindrome-number/
// 9. 回文数

// Done

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let str = x.toString();
  let left = 0;
  let right = str.length - 1;
  while (str[left] === str[right] && right >= left) {
    left++;
    right--;
  }
  if (left === right || right < left) {
    return true;
  }
  return false;
};
