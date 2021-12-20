// https://leetcode-cn.com/problems/minimum-window-substring/
// 76. 最小覆盖子串

// Done

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const window = new Map();
  const need = new Map();
  let left = 0;
  let right = 0;
  let complete = 0;
  let minLen = Infinity;
  let start = 0;
  for (let i = 0; i < t.length; i++) {
    let value = need.get(t[i]) ? need.get(t[i]) + 1 : 1;
    need.set(t[i], value);
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
      if (right - left < minLen) {
        start = left;
        minLen = right - left;
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

  return minLen === Infinity ? "" : s.slice(start, start + minLen);
};
