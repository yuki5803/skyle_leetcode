// https://leetcode-cn.com/problems/contains-duplicate-iii/
// 220. 存在重复元素 III

// Done

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let left = 0;
  let right = 0;
  let window = [];

  while (right < nums.length) {
    let newNum = nums[right];
    right++;

    for (let i = 0; i < window.length; i++) {
      if (Math.abs(newNum - window[i]) <= t) {
        return true;
      }
    }
    window.push(newNum);
    while (right - left > k) {
      left++;
      window.shift();
    }
  }
  return false;
};
