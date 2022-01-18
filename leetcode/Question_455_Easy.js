// https://leetcode-cn.com/problems/assign-cookies/
// 455. 分发饼干
// Done

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  if (s.length === 0) {
    return 0;
  }
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let child = 0;
  let cookie = 0;
  let result = 0;
  while (child < g.length && cookie < s.length) {
    if (g[child] <= s[cookie]) {
      result++;
      child++;
    }
    cookie++;
  }
  return result;
};
