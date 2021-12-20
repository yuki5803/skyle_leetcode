// https://leetcode-cn.com/problems/permutation-in-string/
// 567. 字符串的排列
// Done

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let left = 0;
  let right = 0;
  let complete = 0;
  let targetLen = s1.length;
  let need = new Map();
  let window = new Map();
  for (let i = 0; i < s1.length; i++) {
    let value = need.get(s1[i]) ? need.get(s1[i]) + 1 : 1;
    need.set(s1[i], value);
  }

  while (right < s2.length) {
    let newStr = s2[right];
    right++;
    if (need.has(newStr)) {
      let value = window.get(newStr) ? window.get(newStr) + 1 : 1;
      window.set(newStr, value);

      if (window.get(newStr) === need.get(newStr)) {
        complete++;
      }
    }

    while (complete === need.size) {
      let reduce = s2[left];
      left++;
      if (need.has(reduce)) {
        if (window.get(reduce) === need.get(reduce)) {
          complete--;
          if (targetLen - 1 === right - left) {
            return true;
          }
        }
        window.set(reduce, window.get(reduce) - 1);
      }
    }
  }
  return false;
};
