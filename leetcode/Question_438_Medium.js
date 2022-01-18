// https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
// 438. 找到字符串中所有字母异位词
// Done

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let right = 0;
  let left = 0;
  let complete = 0;
  let window = new Map();
  let need = new Map();
  let result = [];

  for (let i = 0; i < p.length; i++) {
    let value = need.get(p[i]) ? need.get(p[i]) + 1 : 1;
    need.set(p[i], value);
  }

  while (right < s.length) {
    let newStr = s[right];
    right++;
    if (need.has(newStr)) {
      let value = window.get(newStr) ? window.get(newStr) + 1 : 1;
      window.set(newStr, value);
      if (window.get(newStr) === need.get(newStr)) {
        complete++;
      }
    }

    while (complete === need.size) {
      if (right - left === p.length) {
        result.push(left);
      }
      let reduceStr = s[left];
      left++;

      if (need.has(reduceStr)) {
        if (window.get(reduceStr) === need.get(reduceStr)) {
          complete--;
        }
        window.set(reduceStr, window.get(reduceStr) - 1);
      }
    }
  }
  return result;
};
