// https://leetcode-cn.com/problems/maximum-average-subarray-i/
// 643. 子数组最大平均数 I

// Done

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let left = 0;
  let right = 0;
  let window = 0;
  let maxAverage = -Infinity;

  while (right < nums.length) {
    let newNum = nums[right];
    right++;
    window += newNum;

    while (right - left > k) {
      let reduceNum = nums[left];
      left++;
      window = window - reduceNum;
    }
    if (right - left === k) {
      maxAverage = Math.max(maxAverage, window / k);
    }
  }

  return maxAverage;
};
