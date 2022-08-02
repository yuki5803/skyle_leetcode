// https://leetcode-cn.com/problems/plus-one/
// 66. 加一

// Done

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let needCarry = true;
  let index = digits.length - 1;
  function isSuper(num) {
    if (num === 9) {
      return true;
    }
    return false;
  }
  while (needCarry && typeof digits[index] === "number") {
    needCarry = isSuper(digits[index]);
    digits[index] = needCarry ? 0 : digits[index] + 1;
    index--;
  }
  if (needCarry) {
    digits.unshift(1);
  }

  return digits;
};
