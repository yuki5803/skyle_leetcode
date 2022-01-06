// https://leetcode-cn.com/problems/integer-to-roman/
// 12. 整数转罗马数字

// Done

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let result = "";
  const map = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);

  for (let item of map) {
    let key = item[0];
    if (num === 0) break;
    while (num >= key) {
      num = num - key;
      result = result + map.get(key);
    }
  }
  return result;
};
