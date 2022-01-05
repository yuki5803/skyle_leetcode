// https://leetcode-cn.com/problems/container-with-most-water/
// 11. 盛最多水的容器

// Done

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  let curr;

  while (l < r) {
    max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
    if (height[r] > height[l]) l++;
    else r--;
  }
  return max;
};
