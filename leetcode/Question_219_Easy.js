// https://leetcode-cn.com/problems/contains-duplicate-ii/
// 219. 存在重复元素 II

// Done

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let right = 0;
  let left = 0;
  let window = new Map();

  while (right < nums.length) {
    let newNum = nums[right];
    right++;
    let value = window.get(newNum) ? window.get(newNum) + 1 : 1;
    window.set(newNum, value);
    while (window.get(newNum) > 1) {
      let reduceNum = nums[left];
      left++;
      if (right - left <= k) {
        return true;
      }
      window.set(reduceNum, window.get(reduceNum) - 1);
    }
  }

  return false;
};
