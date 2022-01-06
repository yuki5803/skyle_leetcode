// https://leetcode.com/problems/maximum-subarray/
// 53. 最大子数组和

// Done

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let count = 0;
  let max = -Infinity;
  for (i = 0; i < nums.length; i++) {
    count = nums[i] + count;
    max = count > max ? count : max;
    if (count < 0) {
      count = 0;
    }
  }
  return max;
};
