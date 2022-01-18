// https://leetcode-cn.com/problems/count-and-say/
// 38. 外观数列

// Done

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let str = "1";
  for (let i = 1; i < n; i++) {
    let time = 0;
    let num = str[0];
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (num === str[i]) {
        time++;
      } else {
        newStr = newStr + time + num;
        num = str[i];
        time = 1;
      }
    }
    str = newStr + time + num;
  }
  return str;
};
