// https://leetcode-cn.com/problems/valid-palindrome/
// 125. 验证回文串

// Done

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s
    .match(/[a-zA-Z0-9]/g)
    ?.join("")
    .toLowerCase();
  if (!str) {
    return true;
  }
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
